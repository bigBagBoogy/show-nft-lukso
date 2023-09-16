require("dotenv").config();
const express = require("express");

const { Web3 } = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider(process.env.LUKSO_RPC_URL)
);

const app = express();
const port = 3000; // You can choose any available port

// Define the route that connects to the UP Browser Extension
app.get("/connect", async (req, res) => {
  try {
    // Check if the UP Extension is available
    if (window.ethereum) {
      // Initialize a Web3 instance with the UP Extension as the provider
      const web3 = new Web3(window.ethereum);

      // Request access to accounts
      const accountsRequest = await web3.eth.requestAccounts();
      const accounts = await web3.eth.getAccounts();

      // Return the connected address as a response
      res.json({ address: accounts[0] });
    } else {
      res.status(400).json({ error: "UP Extension is not installed." });
    }
  } catch (error) {
    console.error("Error connecting to UP Extension:", error);
    res.status(500).json({ error: "Error connecting to UP Extension" });
  }
});

// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// // const web3 = new Web3(process.env.LUKSO_RPC_URL);
// const app = express();
// app.get("/", (req, res) => {
//   res.send("Hello, Express!");
// });
// const port = 3000; // You can choose any available port
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// // Export the web3 instance to make it accessible in other files
// module.exports = web3;
