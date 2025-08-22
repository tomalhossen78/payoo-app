// login btn functionality

// capture the button click
document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    // get input number value
    const number = '01743629778';
    const pin = '220986';
    const inputNumber = document.getElementById('mobile-number').value;
    const inputPin  =  document.getElementById('pin-number').value;
    console.log(inputNumber,inputPin);
    if(inputNumber===number && inputPin===pin){
        console.log('Login Sucess');
        window.location.href="./home.html"
    }
    else{
       alert('Number or pin not match');
    }
    
})