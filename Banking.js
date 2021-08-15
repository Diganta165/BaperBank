// Deposit
document.getElementById('deposit-submit').addEventListener('click', function(){
    //get the deposit amount
    const depositField = document.getElementById('deposit-input');
    const newDepositAmountText = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    
    
    const depositTotal = document.getElementById('deposit-total');
    
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = newDepositAmount + previousDepositAmount;
    depositTotal.innerText = newDepositTotal;

    //update account balance

    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);

    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear the deposit input 

    depositField.value = '';
})

//withdraw

document.getElementById('withdraw-submit').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotalText);

    const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);

    const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input 
    withdrawField.value ='';

})