const connectBtn = document.getElementById('connectBtn');
const walletAddress = document.getElementById('walletAddress');
const status = document.getElementById('status');

// Simulating connection to a wallet provider (like MetaMask)
connectBtn.addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            
            walletAddress.innerText = `Connected: ${account.substring(0,6)}...${account.substring(38)}`;
            connectBtn.innerText = "Connected";
            connectBtn.style.background = "#2ecc71";
            
            // In a real app, you'd now fetch the real balance using ethers.js
            document.getElementById('balance').innerText = "1.25 ETH"; 
        } catch (error) {
            status.innerText = "User denied account access";
        }
    } else {
        status.innerText = "Please install MetaMask!";
    }
});

document.getElementById('sendBtn').addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    const recipient = document.getElementById('recipient').value;

    if(!amount || !recipient) {
        alert("Please fill in all fields");
        return;
    }
    
    // Logic to trigger a blockchain transaction goes here
    status.innerText = `Processing payment of ${amount} ETH...`;
});