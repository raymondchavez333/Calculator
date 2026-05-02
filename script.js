let firstNum = 0 ;
let secondNum = 0;
let operation = '';

let calculation = {firstVal: firstNum, operateSymbol: operation, secondNum: secondNum};
// console.log(calculation.operateSymbol);

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

// console.log(operate('/', 1, 2));

const buttons = document.querySelectorAll("li");

let numArray = [];
let finalNum = 0; // used for creating an array of inputted digits
let numArray2 = [];
let finalNum2 = 0; // used for creating an array of inputted digits

buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        let clicked = button.textContent;
        if(button.getAttribute("id") === "digit"){
            if(calculation.operateSymbol === ''){
                numArray.push(clicked);
                finalNum = Number(numArray.join(""));
                updateFirstNum(finalNum);
            }else{
                numArray2.push(clicked);
                finalNum2 = Number(numArray2.join(""));
                updateSecondNum(finalNum2);
            }
        }

        if(button.getAttribute("id") === "operator"){
            button.setAttribute("style", "background-color: gray");
            calculation.operateSymbol = clicked;
            // console.log(calculation.operateSymbol);
        }

        if(button.getAttribute("id") === "calculate"){

        }
    });
})

let input = document.querySelector(".input");

function updateFirstNum(num){
    firstNum = num;
    calculation.firstVal = firstNum;
    input.textContent = num;
    console.log(calculation.firstVal);
}

function updateSecondNum(num){
    secondNum = num;
    input.textContent = num;
    // console.log(num);
}


