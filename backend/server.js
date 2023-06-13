const express = require("express");
require('dotenv').config();

const app = express();
const connectDatabase = require('./config/database');
const RegisterRoutes = require('./routes/registrationRoutes.js');
const CheckRoutes = require('./routes/checkUser');
// Connect to the database
connectDatabase;

// Middleware
app.use(express.json());

// Register routes
app.use('/api', RegisterRoutes);
app.use('/api1',CheckRoutes);
// Root endpoint
app.get("/", (req, res) => {
  res.send('Complaint Register Server');
});

const PORT = process.env.REACT_APP_PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
