const { ethers } = require("hardhat");

async function main() {
    
    // Contact Deploy (Get)
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Current Time (Get)
    const currentTime = Math.floor(Date.now() / 1000); 
    const futureUnlockTime = currentTime + 3600; 

    console.log("Deploying contract with unlock time:", futureUnlockTime);

    // Future Unlock Time (Get)
    const Contract = await ethers.getContractFactory("Lock");
    const contract = await Contract.deploy(futureUnlockTime);

    console.log("Contract deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
