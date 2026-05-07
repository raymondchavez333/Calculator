let firstNum = 0 ;
let secondNum = 0;
let operation = '';

// let calculation = {firstVal: firstNum, operateSymbol: operation, secondVal: secondNum};
let calculation = {};
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
    return Math.round((num1 / num2) * 10000000) / 10000000;
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
// let period = buttons.

let period = document.querySelector(".point");
// console.log(period);


buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        let clicked = button.textContent;
        if(button.getAttribute("id") === "digit"){
            if(("result" in calculation) && !("operateSymbol" in calculation)){
                let numArraySize = numArray.length;
                for(let i = 1; i <= numArraySize; i++){
                numArray.pop();
                firstNum = 0;
                finalNum = 0;
                delete calculation.firstVal;
                }
            }
            if(!("operateSymbol" in calculation)){
                delete calculation.result;
                if(clicked === "."){
                    button.textContent = "";
                }
                numArray.push(clicked);
                finalNum = Number(numArray.join(""));
                updateFirstNum(finalNum);
                console.log(calculation);
            }else{
                clearGray();
                if(clicked === "."){
                    button.textContent = "";
                }
                numArray2.push(clicked);
                finalNum2 = Number(numArray2.join(""));
                updateSecondNum(finalNum2);
                console.log(calculation);
            }
        }

        if(button.getAttribute("id") === "operator"){
            button.setAttribute("style", "background-color: gray");
            period.textContent = ".";
            if(!("operateSymbol" in calculation)){
                calculation.operateSymbol = clicked;
            }
            if(("firstVal" in calculation) && ("operateSymbol" in calculation) && ("secondVal" in calculation)){
                calculatedVal = operate(calculation.operateSymbol, calculation.firstVal, calculation.secondVal);
                calculation.calculated = calculatedVal;
                input.textContent = calculatedVal;
                // console.log(calculation.operateSymbol);
                calculation.operateSymbol = clicked;
                calculation.firstVal = calculatedVal;
                let numArray2Size = numArray2.length;
                for(let i = 1; i <= numArray2Size; i++){
                    numArray2.pop();
                }
                delete calculation.secondVal;
                delete calculation.calculated;

                console.log(calculation);
                // console.log(calculation.firstVal);
                // console.log(calculation.secondVal);
                // console.log(numArray2);
            }
            if(("firstVal" in calculation) && ("operateSymbol" in calculation) && !("secondVal" in calculation)){
                clearGray();
                button.setAttribute("style", "background-color: gray");
                calculation.operateSymbol = clicked;
                console.log(calculation);
            }
        }

        if(button.getAttribute("id") === "calculate"){
            period.textContent = ".";
            if(("firstVal" in calculation) && ("operateSymbol" in calculation) && ("secondVal" in calculation)){
                calculatedVal = operate(calculation.operateSymbol, calculation.firstVal, calculation.secondVal);
                input.textContent = calculatedVal;
                calculation.calculated = calculatedVal;
                calculation.firstVal = calculatedVal;

                delete calculation.operateSymbol;
                delete calculation.secondVal;
                delete calculation.calculated;

                calculation.result = "=";

                let numArray2Size = numArray2.length;
                for(let i = 1; i <= numArray2Size; i++){
                    numArray2.pop();
                }

                console.log(calculation);
            }else if(("firstVal" in calculation) && ("result" in calculation)){
                input.textContent = calculation.firstVal;
            }else if(("firstVal" in calculation) && ("operateSymbol" in calculation)){
                input.textContent = calculation.firstVal;
                delete calculation.operateSymbol;
                console.log(calculation);
            }else if("firstVal" in calculation){
                input.textContent = calculation.firstVal;
                console.log(calculation);
            }else{input.textContent = 0;
            // console.log(calculation);
            }
            clearGray();
        }

        if(button.getAttribute("id") === "clear"){
            period.textContent = ".";
           firstNum = 0;
           secondNum = 0;
           operation = '';
           let numArraySize = numArray.length;
            for(let i = 1; i <= numArraySize; i++){
                numArray.pop();
            }
            let numArray2Size = numArray2.length;
            for(let i = 1; i <= numArray2Size; i++){
                numArray2.pop();
            }
            clearGray();
            calculation.firstVal = 0;
            calculation.operateSymbol = '';
            calculation.secondVal = 0;
            delete calculation.calculated;
            delete calculation.firstVal;
            delete calculation.operateSymbol;
            delete calculation.secondVal;
            delete calculation.result;
            
            input.textContent = 0;
           console.log(calculation);
        }

        if(button.getAttribute("id") === "backspace"){
            if(("firstVal" in calculation) && !("secondVal" in calculation)){
                numArray.pop();
                finalNum = Number(numArray.join(""));
                updateFirstNum(finalNum);
                console.log(calculation);
                console.log(numArray);
            }
            if("secondVal" in calculation){
                numArray2.pop();
                finalNum2 = Number(numArray2.join(""));
                updateSecondNum(finalNum2);
                console.log(calculation);
                console.log(numArray2);
            }
            if(("firstVal" in calculation) && ("result" in calculation)){
                delete calculation.result;
                numArray.push(clicked);
                finalNum = Number(numArray.join(""));
                updateFirstNum(finalNum);
                console.log(calculation);
            }
        }
    });
});

document.addEventListener("keydown", function(event){
   if(event.key === "1"){
     document.querySelector(".one").click();
   } 
   if(event.key === "2"){
     document.querySelector(".two").click();
   }
   if(event.key === "3"){
     document.querySelector(".three").click();
   } 
   if(event.key === "4"){
     document.querySelector(".four").click();
   } 
   if(event.key === "5"){
     document.querySelector(".five").click();
   } 
   if(event.key === "6"){
     document.querySelector(".six").click();
   }
   if(event.key === "7"){
     document.querySelector(".seven").click();
   }
   if(event.key === "8"){
     document.querySelector(".eight").click();
   }
   if(event.key === "9"){
     document.querySelector(".nine").click();
   }
   if(event.key === "0"){
     document.querySelector(".zero").click();
   }
   if(event.key === "+"){
     document.querySelector(".add").click();
   }
   if(event.key === "-"){
     document.querySelector(".subtract").click();
   }
   if(event.key === "*"){
     document.querySelector(".multiply").click();
   }
   if(event.key === "/"){
     document.querySelector(".divide").click();
   }
   if(event.key === "Delete" || event.key === "Backspace"){
     document.querySelector(".backspace").click();
   }
   if(event.key === "."){
     document.querySelector(".point").click();
   }
   if(event.key === "Enter"){
     document.querySelector(".equals").click();
   }
});

let input = document.querySelector(".input");

function updateFirstNum(num){
    firstNum = num;
    calculation.firstVal = firstNum;
    if (isNaN(num)){
        input.textContent = "0.";
    }else{
        input.textContent = num;
    }
    
    // console.log(calculation.firstVal);
}

function updateSecondNum(num){
    if(calculation.operateSymbol === "/" && num === 0){
        alert("You can't divide by zero!");
        return;
    }
    secondNum = num;
    calculation.secondVal = secondNum;
    if (isNaN(num)){
        input.textContent = "0.";
    }else{
        input.textContent = num;
    }
    // console.log(calculation.secondVal);
}

function clearGray(){
    buttons.forEach((button) => {
        button.setAttribute("style", "background-color: none");
    });
}