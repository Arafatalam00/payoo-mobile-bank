document.getElementById('button-login').addEventListener('click',function(event){
   event.preventDefault()
    

    const PhoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(PhoneNumber, pinNumber);

    if(PhoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in')
    window.location.href = '/home.html'
    }
    
    else{
        alert('Invalid Phone Number or Pin Number')
    }


})