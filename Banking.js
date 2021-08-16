function getInputValue(inputID){
    const inputField = document.getElementById(inputID);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    
    return amountValue;
}

function updateTotalField(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
    
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = amount + previousTotal;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);

    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotalAmount + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotalAmount - amount;
    }

    // balanceTotal.innerText = newBalanceTotal;

}

// Deposit
document.getElementById('deposit-submit').addEventListener('click', function(){
    //get the deposit amount
    // const depositField = document.getElementById('deposit-input');
    // const newDepositAmountText = depositField.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);
    
    const newDepositAmount = getInputValue('deposit-input');
    
    // const depositTotal = document.getElementById('deposit-total');
    
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);

    // const newDepositTotal = newDepositAmount + previousDepositAmount;

    // depositTotal.innerText = newDepositTotal;
    updateTotalField('deposit-total',newDepositAmount);

    //update account balance

    // const balanceTotal = document.getElementById('balance-total');

    // const previousBalanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);

    // const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    // balanceTotal.innerText = newBalanceTotal;

    updateBalance(newDepositAmount, true);

    // clear the deposit input 

    // depositField.value = '';
})

//withdraw

document.getElementById('withdraw-submit').addEventListener('click',function(){
    // const withdrawField = document.getElementById('withdraw-input');
    // const newWithdrawAmountText = withdrawField.value;
    // const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    const newWithdrawAmount = getInputValue('withdraw-input')

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawAmount = parseFloat(withdrawTotalText);

    // const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;

    // withdrawTotal.innerText = newWithdrawTotal;

    updateTotalField('withdraw-total',newWithdrawAmount);

    // update account balance 
    // const balanceTotal = document.getElementById('balance-total');

    // const previousBalanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);

    // const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;
    // balanceTotal.innerText = newBalanceTotal;

    updateBalance(newWithdrawAmount, false);
    // clear withdraw input 
    // withdrawField.value ='';

})