
import axios from 'axios';

// Array of backend server URLs
const bURL = [
    'http://localhost:7020',
    // 'http://122.52.134.146:7002',
    // 'http://122.52.134.146:7003',
    // 'http://122.52.134.146:7004',
    // 'http://122.52.134.146:7005',
    // 'http://122.52.134.146:7006',
    // 'http://122.52.134.146:7007',
    // 'http://122.52.134.146:7008',
    // 'http://122.52.134.146:7009',
    // 'http://122.52.134.146:7010',
    // 'http://122.52.134.146:7011',
    // 'http://122.52.134.146:7012',
    // 'http://122.52.134.146:7013',
    // 'http://122.52.134.146:7014',
    // 'http://122.52.134.146:7015',
    // 'http://122.52.134.146:7016',
    // 'http://122.52.134.146:7017',
    // 'http://122.52.134.146:7018',
    // 'http://122.52.134.146:7019',
    // 'http://122.52.134.146:7020',

];

// Function to randomly select a backend URL
function getRandomBaseURL() {2
    const randomIndex = Math.floor(Math.random() * bURL.length);
    return bURL[randomIndex];
}

// Create and export an Axios instance with the selected baseURL
const api = axios.create({
    baseURL: getRandomBaseURL() // Randomly selected URL from the array
});

export default api;
