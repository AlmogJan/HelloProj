// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from 'express';
import cors from 'cors'

// Create an Express application
const app = express();
app.use(cors());
app.use(express.json());

// Specify the port number for the server
const port: number = 3000;

// Define a route for the root path ('/')
app.get('/', (req, res) => {
    // Send a response to the client
    res.json({ message: "Hello from server!" });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});