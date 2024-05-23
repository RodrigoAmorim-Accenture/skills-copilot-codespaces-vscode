// Create web server
// Run: node comments.js
// Access: http://localhost:3000
// Access: http://localhost:3000/comments

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/comments', (req, res) => {
  res.sendFile(path.join(__dirname, 'comments.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});