document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOut = document.getElementById('input-cash-out').value;
    const cashoutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value;

    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;

       const balanceNumber = parseFloat(balance); 

        const newBalance = balanceNumber - cashoutNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Invalid Pin Number')
    }
})