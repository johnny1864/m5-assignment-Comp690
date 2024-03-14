//STEP 1

function halfNumber(num) {
    let calc = num / 2;
    return `Half of ${ num } is ${ calc }`;
}

console.log(halfNumber(5));

//STEP 2

function squareNumber(num) {
    let calc = num  * num;
    return `The result of squaring the number ${ num } is ${ calc }`;
}

console.log(squareNumber(3));

//STEP 3

function percentOf(num1, num2) {
    let calc = (num1 / num2) * 100;
    return `${ num1 } is ${ calc }% of ${ num2 }`;
}

console.log(percentOf(2, 4));

//STEP 4

function findModulus(num1, num2) {
    let calc = num1 % num2;
    return `${ calc } is modulus of ${ num1 } and ${ num2 }`;
}

console.log(findModulus(4, 10));
