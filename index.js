require("dotenv").config();
const express = require("express");

const { Web3 } = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider(process.env.LUKSO_RPC_URL)
);
// const web3 = new Web3(process.env.LUKSO_RPC_URL);
const app = express();
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
const port = 3000; // You can choose any available port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// Export the web3 instance to make it accessible in other files
module.exports = web3;
