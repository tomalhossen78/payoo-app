const validPin = 1234;
// capture add money btn

document.getElementById('btn-add-money').addEventListener('click',function(even){
    event.preventDefault();
    // capture bank input
    const bank = document.getElementById('select-bank').value;
    const accountNumber =document.getElementById('bank-account-number').value;
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('pin-num').value);
    console.log(bank, accountNumber, addAmount, pin);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    
    
    if(accountNumber.length!==11){
        
        alert('Please the valid Account Number')
        return;
    }
    if(pin!=validPin){
        alert('Please Enter the Valid Pin');
        return;
    }
    const totalBalance = availableBalance + addAmount;
    document.getElementById('available-balance').innerText=totalBalance;
    


})

// logout button functionality

document.getElementById('btn-log-out').addEventListener('click',function(){
     window.location.href="./index.html"
     console.log('logout btn clicked')
})

// add money feature functionality

document.getElementById('add-money').addEventListener('click',function(){
    document.getElementById('add-money-section').classList.remove('hidden');

    document.getElementById('cash-out-section').classList.add('hidden');
})

// cashout feature functionality
document.getElementById('cash-out').addEventListener('click',function(){
    document.getElementById('cash-out-section').classList.remove('hidden');

    document.getElementById('add-money-section').classList.add('hidden');
})

// cashout button fuctionality

document.getElementById('btn-withdraw-money').addEventListener('click',function(event){
    event.preventDefault();
   const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);
   const availableBalance = parseInt(document.getElementById('available-balance').innerText)
   const agentNumber = document.getElementById('agent-number').value;
   const pin = parseInt(document.getElementById('pin-num-agent').value);
    
    
    if(agentNumber.length!==11){
        
        alert('Please the valid Agent Number')
        return;
    }
    if(pin!=validPin){
        alert('Please Enter the Valid Pin');
        return;
    }
    const totalBalance = availableBalance - withdrawAmount;
    document.getElementById('available-balance').innerText=totalBalance;

})

