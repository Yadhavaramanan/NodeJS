const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for '/'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});

// Route for '/about'
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'about.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});