document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault()
  
    
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

        if(pinNumberInput === '1234'){
            console.log('you have added money')
            const balance = document.getElementById('account-balance').innerText;

            console.log(balance)

            const addMoneyNumber = parseFloat(addMoneyInput)
            const balanceNumber = parseFloat(balance)
            const newBalance = addMoneyNumber + balanceNumber;
            console.log(newBalance);   
            
            document.getElementById('account-balance').innerText = newBalance;
        }





})