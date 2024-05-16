// server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// Read the existing JSON data
const jsonData = JSON.parse(fs.readFileSync('data.json'));

app.get('/api/data', (req, res) => {
  res.json(jsonData);
});

app.post('/api/data', (req, res) => {
  // Assuming req.body contains the new data to be appended to the JSON file
  const newData = req.body;

  // Read the existing JSON file
  const existingData = JSON.parse(fs.readFileSync('data.json'));

  // Append the new data to the existing data
  const updatedData = [...existingData, newData];

  // Write the updated data back to the JSON file
  fs.writeFileSync('data.json', JSON.stringify(updatedData));

  res.status(200).json({ message: 'Data appended successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
