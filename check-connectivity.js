//to run:  node check-connectivity.js
import ERC725 from "@erc725/erc725.js";

// Check if MetaMask or a similar provider is available
if (window.ethereum) {
  // Use the injected Ethereum provider
  const ethereumProvider = window.ethereum;
  const erc725 = new ERC725([], "0x...", ethereumProvider);

  // Perform blockchain interactions here
} else {
  // Handle the case where MetaMask or a similar provider is not available
  console.error("MetaMask or similar provider not found.");
}

const web3 = require("./index");

async function checkBlockchainConnectivity() {
  try {
    // Get the latest block number (block height) from the blockchain
    const latestBlockNumber = await web3.eth.getBlockNumber();

    // If you reach this point, the connection is successful
    console.log(
      `Connected to the blockchain. Latest block number: ${latestBlockNumber}`
    );
  } catch (error) {
    console.error("Error connecting to the blockchain:", error);
  }
}

// Call the connectivity check function
checkBlockchainConnectivity();
