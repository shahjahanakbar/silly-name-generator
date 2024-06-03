const express = require('express');
const sillyname = require('sillyname');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS) from the project directory
app.use(express.static(path.join(__dirname)));

// Endpoint to generate a silly name
app.get('/generate-name', (req, res) => {
    const name = sillyname();
    res.json({ name });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
