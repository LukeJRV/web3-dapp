const executeContractFunction = async () => {
  if (account) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contractABI = [
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_unlockTime",
              "type": "uint256"
            }
          ],
          "stateMutability": "payable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "when",
              "type": "uint256"
            }
          ],
          "name": "Withdrawal",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "unlockTime",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "withdraw",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ];

      const contractAddress = "0x0Bcfcef3a230d4D72432D26c4b2750A5F693771F"; 
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      const tx = await contract.withdraw();  
      await tx.wait();

      setMessage("Transaction executed successfully!");
    } catch (err) {
      setMessage("Error executing contract function: " + err.message);
    }
  } else {
    setMessage("Connect your wallet first!");
  }
};
