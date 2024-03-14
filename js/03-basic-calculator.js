// ADD A FUNCTION CALLED CALCULATE

function calculate(firstnum, secondNum, operation) {

    

    let result;

    switch(operation) {
        case '-' :
            result = firstnum - secondNum;
            break;
        case '+' :
            result = firstnum + secondNum;
            break;
        case '*' :
            result = firstnum * secondNum;
            break;
        case "/" :
            result = firstnum / secondNum;
            break;
    }


    window.alert(result);
}

let run = true;

do {

// COLLECT FIRST NUMBER FROM USER

let firstnum = +window.prompt("Enter Number");

// COLLECT SECOND NUMBER FROM USER

let secondNum = +window.prompt("Enter Number");

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

let operation = window.prompt("Enter Operation (+,-,*,/)");

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT

    if ( operation != "-" && operation != "+" && operation != "/" && operation != "*" ) {

        window.alert("Please Enter Valid Operation");
        
    } else {

        calculate(firstnum, secondNum, operation);
        run = window.confirm("Make another Calculation?");

    }
    

} while(run )
