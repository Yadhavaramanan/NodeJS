const express = require('express');
const fs = require('fs');
const app = express();
const port = 1100;

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Endpoint to read file using callback
app.get('/read-file-callback', (req, res) => {
    fs.readFile(__dirname + '/yadhav.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file using callback:', err);
            return res.status(500).send('Error reading file using callback');
        }
        res.send(data);
    });
});

// Endpoint to read file using promise
app.get('/read-file-promise', (req, res) => {
    fs.promises.readFile(__dirname + '/yadhav.txt', 'utf8')
        .then(data => res.send(data))
        .catch(err => {
            console.error('Error reading file using promise:', err);
            res.status(500).send('Error reading file using promise');
        });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});