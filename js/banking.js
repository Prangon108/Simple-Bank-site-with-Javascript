//deposit
document.getElementById('deposit-button').addEventListener('click',function(){
const depositInput = document.getElementById('deposit-input');
const newDepositAmountText = depositInput.value;
//update deposit total
const newDepositAmount = parseFloat(newDepositAmountText);
const depositTotal = document.getElementById('deposit-total');
const previousDepositAmountText = depositTotal.innerText;
const previousDepositAmount = parseFloat(previousDepositAmountText);
const newDepositTotal = (previousDepositAmount + newDepositAmount);
depositTotal.innerText = newDepositTotal;
//Update balance total
const balanceTotal = document.getElementById('balance-total')
const balanceTotaltext=balanceTotal.innerText;
const previousBalanceTotal=parseFloat(balanceTotaltext);
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotal.innerText= newBalanceTotal;

    })

     //withdrawal event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
        const withdrawInput = document.getElementById('withdraw-input');
        const newWithdrawAmountText = withdrawInput.value;
        const newWithdrawAmount= parseFloat(newWithdrawAmountText);
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawAmountText= withdrawTotal.innerText;
        const previousWithdrawAmount= parseFloat(previousWithdrawAmountText);
        withdrawTotal.innerText = newWithdrawAmount + previousWithdrawAmount;
        //Update balance
        const balanceTotal = document.getElementById('balance-total')
        const balanceTotaltext=balanceTotal.innerText;
        const previousBalanceTotal=parseFloat(balanceTotaltext);
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        balanceTotal.innerText= newBalanceTotal;

})

