const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


const cors = require('cors');
app.use(cors());
app.get('/api/test', (req, res,next) => {
    next();
    res.json({ message: 'Hello from the backend!' });
});
