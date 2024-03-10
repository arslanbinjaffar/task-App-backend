const User = require('../models/user'); // Import your User model

const createUser = async (req, res) => {
    try {
        // Assuming you have a User model with a create method
        const newUser = await User.create(req.body);
        newUser.save()
    .then(user => {
        console.log('User created:', user);
    })
    .catch(error => {
        console.error('User creation error:', error);
    });
        res.status(201).json({message:"user created succefully",newUser});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getUser = async (req, res) => {
    try {
        // Assuming you have a User model with a findById method
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const loginUser = async (req, res) => {
    try {
        // You can customize this part based on your authentication strategy
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const logoutUser = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
};
module.exports = { logoutUser, getUser, createUser, loginUser };
