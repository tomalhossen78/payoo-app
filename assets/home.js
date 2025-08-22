const validPin = 1234;
// capture add money btn

document.getElementById('btn-add-money').addEventListener('click',function(even){
    event.preventDefault();
    // capture bank input
    const bank = document.getElementById('select-bank').value;
    const accountNumber =parseInt(document.getElementById('bank-account-number').value);
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('pin-num').value);
    console.log(bank, accountNumber, addAmount, pin);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    
    if(toString(accountNumber).length<11){
        
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