const express = require('express');
const cors=require('cors')
const mongoose = require('mongoose');
require('dotenv').config();
const taskRoutes=require('./routes/task')
Mongodb()
// const authRoutes = require('./routes/auth');
// const protectedRoutes = require('./routes/protected');
// const passport = require('./services/passportConfig');
const app = express();
app.use(cors())
app.use(express.json());

app.get('/', (req,res) => {
  res.send('hello world i am listening ')
})

const whitelist = [
  '*'
];

app.use((req, res, next) => {
  const origin = req.get('referer');
  const isWhitelisted = whitelist.find((w) => origin && origin.includes(w));
  if (isWhitelisted) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
  }
  // Pass to next layer of middleware
  if (req.method === 'OPTIONS') res.sendStatus(200);
  else next();
});

const setContext = (req, res, next) => {
  if (!req.context) req.context = {};
  next();
};
app.use(setContext);
app.use('/api',taskRoutes)

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Connect to MongoDB

function Mongodb() {
  try {
    mongoose.connect(process.env.MongoDB);
    console.log("connected to mongodb")
  } catch (error) {
    console.log(error)
  }
}