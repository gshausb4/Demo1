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
const userData = JSON.parse(fs.readFileSync('userData.json'));
const userFullData = JSON.parse(fs.readFileSync('userFullData.json'));

app.get('/api/data', (req, res) => {
  res.json(jsonData);
});

app.get('/api/userData', (req, res) => {
  res.json(userData);
});

app.post('/api/userfulldata', (req, res) => {
  // Assuming req.body contains the new data to be appended to the JSON file
  const newData = req.body;

  // Read the existing JSON file
  const existingData = JSON.parse(fs.readFileSync('userFullData.json'));

  // Append the new data to the existing data
  const updatedData = [...existingData, newData];

  // Write the updated data back to the JSON file
  fs.writeFileSync('userFullData.json', JSON.stringify(updatedData));

  res.status(200).json({ message: 'Data appended successfully' });
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

// Route to delete data by property ID
app.delete('/api/data/:propertyId', (req, res) => {
  const propertyId = req.params.propertyId;

  // Find the index of the property with the specified ID
  const index = jsonData.findIndex(property => property.PROPId === parseInt(propertyId));

  if (index !== -1) {
    // Remove the property with the specified ID from the array
    jsonData.splice(index, 1);

    // Write the updated data back to the JSON file
    fs.writeFileSync('data.json', JSON.stringify(jsonData));

    res.status(200).json({ message: 'Data deleted successfully' });
  } else {
    res.status(404).json({ message: 'Property not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
