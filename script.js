let firstNum = 0 ;
let secondNum = 0;
let operation = '';

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate (operator, num1, num2){

    if(operator === '+'){
        return add(num1, num2);
    }
    if(operator === '-'){
        return subtract(num1, num2);
    }
    if(operator === '*'){
        return multiply(num1, num2);
    }
    if(operator === '/'){
        return divide(num1, num2);
    }

    return;
}

console.log(operate('/', 1, 2));

const buttons = document.querySelectorAll("li");

buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        let num = button.textContent;
        // if(button.getAttribute)
        if(button.getAttribute("id") === "digit"){
            updateFirstNum(num);
            updateSecondNum(num);
        }
    });
})

let input = document.querySelector(".input");

function updateFirstNum(num){
    firstNum = num;
    input.textContent = num;
}

function updateSecondNum(num){
    secondNum = num;
    input.textContent = num;
}


