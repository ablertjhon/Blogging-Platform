const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// Define your routes here for user authentication, blog post creation, etc.

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
