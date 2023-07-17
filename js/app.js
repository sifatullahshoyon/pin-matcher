function getPin(){
    const pin = ganaratePin();
    const pinStr = pin + '';
    if(pinStr.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function ganaratePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener("click" , function(){
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})

document.getElementById('calculator').addEventListener("click" , function(event){
    const number = event.target.innerText;
    const displayField = document.getElementById('display-field'); 
    const priviousDisplayField = displayField.value;
    if(isNaN(number)){
        // console.log(number);
       if(number === 'C'){
        displayField.value = '';
       }
       else if(number === '<'){
        const digits = priviousDisplayField.split('');
        digits.pop();
        const remining = digits.join('');
        displayField.value = remining;
       }
    }
    else{
        const newDisplayField = priviousDisplayField + number;
        displayField.value = newDisplayField;
    }
})

document.getElementById('verify-pin').addEventListener("click" , function(){
    const displayPinField = document.getElementById('display-pin');
    const displayField = displayPinField.value;

    const displayInputField = document.getElementById('display-field');
    const displayInput = displayInputField.value;

    const successPinMassage = document.getElementById('success-pin');
    const failurePinMassage = document.getElementById('pin-failure');
    if(displayField === displayInput){
       
       successPinMassage.style.display = 'block';
       failurePinMassage.style.display = 'none';
    }
    else{
        
        failurePinMassage.style.display = 'block';
        successPinMassage.style.display = 'none';
    }
})