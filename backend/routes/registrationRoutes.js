const express = require('express');
const router = express.Router();
const RegisterNewUser = require('../models/auth/registermodel');

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const newUser = new RegisterNewUser({ name, email, password });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Failed to register user' });
    }
  });

module.exports = router;