let firstNum = 0 ;
let secondNum = 0;
let operation = '';

let calculation = {firstVal: firstNum, operateSymbol: operation, secondVal: secondNum};
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

let calculatedVal = 0;

buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        let clicked = button.textContent;
        if(button.getAttribute("id") === "digit"){
            if(calculation.operateSymbol === ''){
                numArray.push(clicked);
                finalNum = Number(numArray.join(""));
                updateFirstNum(finalNum);
            }else{
                clearGray();
                numArray2.push(clicked);
                finalNum2 = Number(numArray2.join(""));
                updateSecondNum(finalNum2);
            }
        }

        if(button.getAttribute("id") === "operator"){
            button.setAttribute("style", "background-color: gray");
            if(calculation.operateSymbol === ''){
                calculation.operateSymbol = clicked;
            }
            if(calculation.firstVal !== 0 && calculation.operateSymbol !== '' && calculation.secondVal !== 0){
                calculatedVal = operate(calculation.operateSymbol, calculation.firstVal, calculation.secondVal);
                calculation.calculated = calculatedVal;
                input.textContent = calculatedVal;
                console.log(calculation.operateSymbol);
                calculation.operateSymbol = clicked;
                calculation.firstVal = calculatedVal;
                console.log(calculation.firstVal);
                // console.log(calculation.operateSymbol);
                // console.log(clicked);
                // console.log(calculation.calculated);
            }
        }

        if(button.getAttribute("id") === "calculate"){
            calculatedVal = operate(calculation.operateSymbol, calculation.firstVal, calculation.secondVal);
            input.textContent = calculatedVal;
            calculation.calculated = calculatedVal;
            // console.log(calculation);
        }
    });
})

let input = document.querySelector(".input");

function updateFirstNum(num){
    firstNum = num;
    calculation.firstVal = firstNum;
    input.textContent = num;
    // console.log(calculation.firstVal);
}

function updateSecondNum(num){
    secondNum = num;
    calculation.secondVal = secondNum;
    input.textContent = num;
    // console.log(calculation.secondVal);
}

function clearGray(){
    buttons.forEach((button) => {
        button.setAttribute("style", "background-color: none");
    });
}
