// Define fetchData
function fetchData(apiUrl, callback) {
    // Simulate an asynchronous operation
    setTimeout(() => {
        const data = { name: 'John Doe', age: 30 }; // Simulated API response
        callback(data); // Call the provided callback with the data
    }, 1000); // Simulate network delay
}

// Define processData
function processData(data) {
    console.log('Received data:', data); // Process and log the data
}

fetchData('https://api.example.com/user', processData); // Fetch data and process it