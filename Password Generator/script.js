

const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')
const resultEl = document.getElementById('result')




//variable randomFunc

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

//Copy the password in clipboard
clipboardEl.addEventListener('click', () =>{
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password){return}
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard')
})

generateEl.addEventListener('click', () => {
   const length = +lengthEl.value;
   const hasLower = lowercaseEl.checked
   const hasUpper = uppercaseEl.checked
   const hasNumber = numbersEl.checked
   const hasSymbol = symbolsEl.checked
  
    resultEl.innerHTML = generatePassword (hasLower, hasUpper, hasNumber, hasSymbol, length );
   
   
   
})

//Generate password function

function  generatePassword (lower, upper, number, symbol, length) {
//1.Init pw var
//2.Filter out unchecked types
//3.Loop over length call generator function for each type
//4.Add final pw to the pw var and return

    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    // console.log('typesCount', typesCount)
    const typesArr = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0])
    // console.log('typesCount', typesArr)
    
    
    if(typesCount === 0 ) {
        return ''
    }

    for(let i = 0; i < length; i += typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
            // console.log(funcName)
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword

    //  console.log(typesArr)
}


//Generator functions - http://net-comber.com/charset.html

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 97)
}

// console.log(getRandomLower())


function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 65)
}

// console.log(getRandomUpper())


function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10)+ 48)
}

// console.log(getRandomNumber())

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

// console.log(getRandomSymbol())