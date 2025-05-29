
const axios = require('axios');


async function fetchHTML(url) {
  try {
   //send req
    const response = await axios.get(url);

    
    console.log(response.data);
  } catch (error) {
    
    console.error('Error fetching :',error.message);
  }
}


fetchHTML('https://futuriktechnologies.com/KLU/Hari/');
