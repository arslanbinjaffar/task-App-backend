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

app.use('/api',taskRoutes)

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Connect to MongoDB

function Mongodb() {
  try {
    mongoose.connect(process.env.MongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongodb")
  } catch (error) {
    console.log(error)
  }
}