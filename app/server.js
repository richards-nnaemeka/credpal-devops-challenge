const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date() });
});

// Status endpoint
app.get('/status', (req, res) => {
  res.status(200).json({ 
    status: 'operational', 
    uptime: process.uptime(),
    database: process.env.DB_HOST ? 'connected' : 'disconnected'
  });
});

// Process endpoint
app.post('/process', (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(400).json({ error: 'Missing data field' });
  }
  // Simulate processing
  res.status(200).json({ 
    message: 'Data processed successfully', 
    processedData: data.toUpperCase() 
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Database host: ${process.env.DB_HOST || 'not set'}`);
});
