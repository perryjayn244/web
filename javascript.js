// You will need the Contract Address and the ABI (Application Binary Interface)
const contractAddress = "0xYourContractAddressHere";
const abi = [ /* Paste your JSON ABI here from the compiler */ ];

async function sendPayment() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    const amountInEth = document.getElementById('amount').value;
    
    try {
        const tx = await signer.sendTransaction({
            to: contractAddress,
            value: ethers.utils.parseEther(amountInEth)
        });
        
        status.innerText = "Transaction Sent! Hash: " + tx.hash;
        await tx.wait(); // Wait for the block to be mined
        status.innerText = "Payment Confirmed!";
    } catch (err) {
        status.innerText = "Error: " + err.message;
    }
}