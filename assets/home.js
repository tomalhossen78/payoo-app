const validPin = 1234;
// capture add money btn

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    // capture bank input
    const bank = document.getElementById('select-bank').value;
    const accountNumber = document.getElementById('bank-account-number').value;
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('pin-num').value);
    console.log(bank, accountNumber, addAmount, pin);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)



    if (accountNumber.length !== 11) {

        alert('Please the valid Account Number')
        return;
    }
    if (pin != validPin) {
        alert('Please Enter the Valid Pin');
        return;
    }
    const totalBalance = availableBalance + addAmount;
    document.getElementById('available-balance').innerText = totalBalance;

    // call the function for tracsaction;
    addTransaction('Add Money',addAmount);

     // reset form

    document.getElementById('select-bank').value='Choice Your Bank';
    document.getElementById('bank-account-number').value='';
    document.getElementById('add-amount').value='';
    document.getElementById('pin-num').value='';
    
   
})

// logout button functionality

document.getElementById('btn-log-out').addEventListener('click', function () {
    window.location.href = "./index.html"
    console.log('logout btn clicked')
})

// add money feature functionality

document.getElementById('add-money').addEventListener('click', function () {
    document.getElementById('add-money-section').classList.remove('hidden');

    document.getElementById('cash-out-section').classList.add('hidden');
})

// cashout feature functionality
document.getElementById('cash-out').addEventListener('click', function () {
    document.getElementById('cash-out-section').classList.remove('hidden');

    document.getElementById('add-money-section').classList.add('hidden');
})

// cashout button fuctionality

document.getElementById('btn-withdraw-money').addEventListener('click', function (event) {
    event.preventDefault();
    const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    const agentNumber = document.getElementById('agent-number').value;
    const pin = parseInt(document.getElementById('pin-num-agent').value);


    if (agentNumber.length !== 11) {

        alert('Please the valid Agent Number')
        return;
    }
    if (pin != validPin) {
        alert('Please Enter the Valid Pin');
        return;
    }
    if(withdrawAmount>availableBalance){
        alert('Insufficient Banlance');
        return;
    }
    const totalBalance = availableBalance - withdrawAmount;
    document.getElementById('available-balance').innerText = totalBalance;

    addTransaction('Cash Out',withdrawAmount);

    // reset form

    document.getElementById('agent-number').value='';
    document.getElementById('withdraw-amount').value='';
    document.getElementById('pin-num-agent').value='';
    

})

function addTransaction(type,amount){
 // transaction feature
    // get the parent node
    const transactionContainer = document.getElementById('transaction-container');
    console.log(transactionContainer);
    // create transaction and add inner text

    const NewTransaction = document.createElement('div');
    NewTransaction.className = 'flex justify-between items-center bg-white p-4 my-4 rounded-xl';
    NewTransaction.innerHTML= `
    <div class="flex justify-start items-center ">
                        <div class="bg-[#08080810] p-3 rounded-full">
                            <img class="h-8 w-8" src="assets/wallet1.png" alt="">
                        </div>
                        <div class="ml-2">
                            <h4 class="text-[#080808] text-[18px] font-bold">${type}</h4>
                            <p class="text-[14px]">${new Date().toLocaleString()}</p>
                        </div>
                    </div>
                    <div>
                        <p class="font-bold text-xl py-2 px-4 bg-blue-50 rounded-xl">$<span>${amount}</span></p>
                    </div>
                    <div class="">
                        <i class="fa-solid fa-ellipsis-vertical text-2xl"></i>
                    </div>`;
    
    transactionContainer.prepend(NewTransaction);
    
}

