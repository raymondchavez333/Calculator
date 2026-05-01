let firstNum = 0 ;
let secondNum = 0;
let operation = '';

let calculation = {firstVal: firstNum, operateSymbol: operation, secondNum: secondNum};
console.log(calculation.firstVal);

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

let numArray = [];
let finalNum = 0;

buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        let clicked = button.textContent;
        // let finalNum = 0;
        if(button.getAttribute("id") === "digit"){
            numArray.push(clicked);
            finalNum = Number(numArray.join(""));
            updateFirstNum(finalNum);
            updateSecondNum(finalNum);
        }

        if(button.getAttribute("id") === "operator"){
            button.setAttribute("style", "background-color: gray");
            console.log(clicked);
            console.log(finalNum);
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


