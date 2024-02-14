const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'application' directory
app.use(express.static(path.join(__dirname, 'application')));

// Serve home.html as the default page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'application', 'template', 'home.html'));
});

// Route for pg.html
app.get('/pg', (req, res) => {
    res.sendFile(path.join(__dirname, 'application', 'template', 'pg.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
