
document.querySelector('#deposit-btn').addEventListener('click',function name(params) {
    // button click korle    input থেকে  value ta nisi 
    const getDepositInput = document.getElementById('deposit-input');
    const getNewDepositInputValueString = getDepositInput.value; // typeOf   value ta string output hosse 
    const getNewDepositInputValueStringConvert = parseFloat( getNewDepositInputValueString );   // akkon string to  number a   convert hoyse 
    getDepositInput.value = '';
    

    // value ta ke upore deposit amount a add korte hobe 
    const getDepositValue = document.querySelector('#deposit-value');
    const getPreviousDepositValueText = getDepositValue.innerText;  // আগে 0 থাকার জন্য  number এ convert হয়েও    typeOf  value ta string output   কারন 0 একটা string

    const getPreviousDepositValueTextConvert = parseFloat(getPreviousDepositValueText)    // akkon string to  number a   convert hoyse 

    // input ar value  & deposit ar value  sum kortesi 
    const sumPreviousAndNew = getPreviousDepositValueTextConvert + getNewDepositInputValueStringConvert;
    getDepositValue.innerText = sumPreviousAndNew;
    


    // update nuw balance 
    const getOldBalanceValue = document.getElementById('balance-value');
    const oldBalanceValueString = getOldBalanceValue.innerText;
    const convertBalanceValue = parseFloat(oldBalanceValueString);
    const NewBalanceValue = getNewDepositInputValueStringConvert+ convertBalanceValue; // sumPreviousAndNew  যোগ করা যাবে না ।  যোগ করলে বেশি হয়ে যাবে । তাই getNewDepositInputValueStringConvert যোগ করতে হবে তাইলে  সঠিক হবে ।
    
    getOldBalanceValue.innerText = NewBalanceValue;
    

    
    
})