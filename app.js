const keys = {
    capitalLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCaseLetters: "abcdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    symbols: "!@#$%^&*-",
}

const getKey = [
    function capitalLetters() {
        return keys.capitalLetters[Math.floor(Math.random() * keys.capitalLetters.length)];
    },
    function lowerCaseLetters() {
        return keys.lowerCaseLetters[Math.floor(Math.random() * keys.lowerCaseLetters.length)];
    },
    function numbers() {
        return keys.numbers[Math.floor(Math.random() * keys.numbers.length)];
    },
    function symbols() {
        return keys.symbols[Math.floor(Math.random() * keys.symbols.length)];
    }
];

let inputSlider = document.getElementById("passwordSlider");
let sliderValue = document.getElementById("sliderValue");
let generateBtn = document.getElementById("generateBtn");
let copyBtn = document.getElementById("copy");
let passBox = document.getElementById("password");

// Password Length

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});

generateBtn.addEventListener('click', ()=>{
    passBox.value = createPassword();
})

function createPassword() {

    const capital = document.getElementById("capitalLetters").checked;
    const lower = document.getElementById("lowerCaseLetters").checked;
    const numbersCheck= document.getElementById("numbers").checked;
    const symbolsCheck = document.getElementById("symbols").checked;
    if (capital + lower + numbersCheck + symbolsCheck === 0) {
        alert("Please check atleast one box!");
        return;
    }

    //var passwordLength 
    var password = "";
    const length = inputSlider.value;
    

    while (length > password.length) {
        let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
        let isChecked = document.getElementById(keyToAdd.name).checked;
        if (isChecked) {
            password += keyToAdd();
        }
    }
    return password;
}

copyBtn.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyBtn.innerText = "Copying";
        copyBtn.title = "Copying";

        setTimeout(()=>{
            copyBtn.innerHTML = "Password Copied";
            copyBtn.title = "Password Copied";
        }, 3000)
    }
});