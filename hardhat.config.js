require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

console.log(process.env.PRIVATE_KEY.length);
console.log("Private Key Length:", process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY.length : "Not Loaded");
console.log("Alchemy URL:", `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`);

module.exports = {
    solidity: "0.8.28",
    networks: {
        sepolia: {
            url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`, 
            accounts: [`0x${process.env.PRIVATE_KEY}`], 
        },
    },
};