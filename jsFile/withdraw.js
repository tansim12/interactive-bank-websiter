document.querySelector('#withdraw-btn').addEventListener('click',function name(params) {
    const getWithdrawInput = document.getElementById('withdraw-input');
    const getWithdrawInputString = getWithdrawInput.value;
    const getPreviousWithdrawInputStringCovert = parseFloat(getWithdrawInputString)
    getWithdrawInput.value = '';


    const getWithdrawValue = document.querySelector('#withdraw-value');
    const getWithdrawValueString = getWithdrawValue.innerText ;
    const getWithdrawValueNumberConvert = parseFloat(getWithdrawValueString);
    const sumNewWithdrawValue = getPreviousWithdrawInputStringCovert + getWithdrawValueNumberConvert ;
    getWithdrawValue.innerText = sumNewWithdrawValue;



    // previous balance total = মানে যদি withdraw করি  তাহলে তো  balance থেকে  amount টা বাদ যাবে 

    const getBalanceButton = document.getElementById('balance-value');
    const getPreviousBalanceString =getBalanceButton.innerText;
    const getPreviousBalanceStringConvert = parseFloat(getPreviousBalanceString);
    const differNewBalance = getPreviousBalanceStringConvert - getPreviousWithdrawInputStringCovert;
    getBalanceButton.innerText = differNewBalance;

})