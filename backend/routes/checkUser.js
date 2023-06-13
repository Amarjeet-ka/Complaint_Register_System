const express = require('express');
const router = express.Router();
const RegisterNewUser = require('../models/auth/registermodel');

router.get('/login',async(req,res)=> {

   const {email} = req.params;
    try {
      const user = RegisterNewUser.findOne({email});

      if(user) {
        res.json({ message : `User data found`});
      }
      else{
        res.json({
          message :'User not found' 
        })
        
      }
    }
      catch (error) {
        console.error(`Error checking user registration`,error);
        res.status(500).json({message :`Failed to check registration`})
      }
   
 }
)


module.exports = router;