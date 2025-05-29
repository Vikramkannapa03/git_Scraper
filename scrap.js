
const express = require('express');
const axios = require('axios');

const app = express();


async function fetchHTML(url) {
  try {

    const response = await axios.get(url);


    return response.data;
  } catch (error) {
 
    throw new Error(`Error fetching HTML: ${error.message}`);
  }
}


app.get('/fetch', async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const html = await fetchHTML(url);
    res.send(html);
  } catch (error) {
    res.status(500).json({ error:error.message });
  }
});


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
