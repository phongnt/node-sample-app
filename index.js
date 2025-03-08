// Import express
const express = require('express');

// Create an instance of an express app
const app = express();

// Define a port to listen on
const PORT = process.env.PORT || 3000;

// Middleware: Serve static files (optional)
app.use(express.static('public'));

// Route 1: Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Express Sample App!');
});

// Route 2: About route
app.get('/about', (req, res) => {
  res.send('This is a simple Node.js application using Express.');
});

// Route 3: JSON response
app.get('/api', (req, res) => {
  res.json({ message: 'This is a JSON response from the API endpoint.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
