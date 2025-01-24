// Ensure environment variables are loaded
require('dotenv').config();

// Validate the required variables
if (!process.env.API_KEY || !process.env.SERVER_SECRET) {
    throw new Error("Missing required environment variables. Please check your .env file.");
}

// Access environment variables
const config = {
    apiKey: process.env.API_KEY,
    serverSecret: process.env.SERVER_SECRET,
    isKalvian: process.env.IS_KALVIAN === 'true',
};

module.exports = config;

// Log for testing (optional)
console.log(config);