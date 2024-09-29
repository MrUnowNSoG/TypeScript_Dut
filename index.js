//Числа-----------------------------------------------------------------------------
function getNumberInput(promptText) {

    let input;

    do {

        input = prompt(promptText);

        if (!isNumber(input)) {
            alert("Будь ласка, введіть коректне число.");
        }

    } while (!isNumber(input));
    

    return parseFloat(input);
}


function isNumber(value) {

    let number = parseFloat(value);
    let canParse = false;

    if (isFinite(number)) {
        var savedNumber = number;
        canParse = true;

    } else {

        canParse = false;
    }

    return canParse;
}
//Числа-----------------------------------------------------------------------------



//Операції--------------------------------------------------------------------------

var allOperation = ["+", "-", "*", "/"];

function getOperation(promptText) {

    let operation;
    let hadOperation = false;

    do {
        operation = prompt(promptText);

        for(let i = 0; i < allOperation.length; i++) {

            if(operation.toString() == allOperation[i].toString()) {
                operation = allOperation[i];
                hadOperation = true
                break;
            } 
        }
        
        if(hadOperation == false) alert("Будь ласка, виберіть коректну операцію.");

    } while (hadOperation == false);

    return operation;
}
//Операції--------------------------------------------------------------------------



//Калькулятор-----------------------------------------------------------------------
function calculate(num1, num2, operation) {
    let result;
    switch (operation) {
        case allOperation[0]:
            result = num1 + num2;
            break;

        case allOperation[1]:
            result = num1 - num2;
            break;

        case allOperation[2]:
            result = num1 * num2;
            break;

        case allOperation[3]:

            if (num2 === 0) {
                alert("Ділення на нуль неможливе. Число замінене на 1!");
                num2 = 1;
            }
            result = num1 / num2;
            break;

        default:
            alert("Невідома операція.");
            return null;
    }


    return result;
}
//Калькулятор-----------------------------------------------------------------------


//Main
function Main() {

    //Калькулятор---------------------------------------------------------------------
    alert("Калькулятор!");

    //Числа
    let number1 = getNumberInput("Введіть перше число:");
    let number2 = getNumberInput("Введіть друге число:");

    //Дії
    const operation = getOperation("Виберіть операцію (+, -, *, /):");

    const result = calculate(number1, number2, operation);

    if (result !== null) {
        alert(`Результат: ${number1} ${operation} ${number2} = ${result}`);
    }
    //Калькулятор---------------------------------------------------------------------



    //Площа---------------------------------------------------------------------------
    alert("Розрахунок площі і периметру прямокутника!");
    
    //Числа
    number1 = getNumberInput("Введіть перше число:");
    number2 = getNumberInput("Введіть друге число:");

    let S = number1 * number2;
    let P = 2 * (number1 + number2);

    alert("Площа: " + S);
    alert("Периметр: " + P);
    //Площа---------------------------------------------------------------------------



    //Вгадуємо число------------------------------------------------------------------
    alert("Вгадуємо число!");

    number1 = getNumberInput("Введіть число:");

    let num_1 = number1 + 1;
    let num_2 = number1 - 1;

    alert("Наступне число це :" + num_1);
    alert("Попереднє число це:" + num_2);
    //Вгадуємо число------------------------------------------------------------------



    //Ялинка 1------------------------------------------------------------------
    alert("Ялинка-1");
    
    number1 = parseInt(getNumberInput("Введіть кількість рядків:"));

    for(let i = 0; i <= number1; i++) {
        var str = "";
        for(var f = 0; f < i; f++) {
            str += "#";
        }

        document.write(str + "<br>");
    }
    //Ялинка 1------------------------------------------------------------------



    //Ялинка 2------------------------------------------------------------------
    alert("Ялинка-2");
        
    number1 = parseInt(getNumberInput("Введіть кількість рядків:"));

    if(number1 > 0) {

        for(let i = 1; i <= number1; i++) {

            let str = "";

            for(let f = 0; f < number1 - i; f++) {
                str += " ";
            }

            for(let f = 0; f < i; f++) {
                str += "#";
            }

            str += " ";

            for(let f = 0; f < i; f++) {
                str += "#";
            }

            document.write( "<pre>"+ str+ "</pre>");
        }
    }
    //Ялинка 2------------------------------------------------------------------
}

Main();