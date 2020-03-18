// 'use strict'


// Задание 3:

let a = +prompt("Введите число a:", ''),
    b = +prompt("Введите число b:", '');

if(a > 0 && b > 0) {
    alert(a - b);
}  else if( a < 0 && b < 0) {
    alert(a * b);
}  else if(a < 0 && b > 0 || a > 0 && b < 0) {
    alert(a + b);
}  else {
    alert("Вы ввели что-то неправильно!")
}


// Задание 4:

let a2 = +prompt("Введите число от 0 до 15", '');

switch(a2) {
    case 1: 
    console.log(1);

    case 2: 
    console.log(2);

    case 3: 
    console.log(3);

    case 4: 
    console.log(4);

    case 5: 
    console.log(5);

    case 6: 
    console.log(6);

    case 7: 
    console.log(7);

    case 8: 
    console.log(8);

    case 9: 
    console.log(9);

    case 10: 
    console.log(10);

    case 11: 
    console.log(11);

    case 12: 
    console.log(12);

    case 13: 
    console.log(13);

    case 14: 
    console.log(14);

    case 15: 
    console.log(15);

    default:
    alert("Это не выполнится");
}


// Задание 5:

function calc(a, b) {
    console.log(a + b);

    console.log(a - b);

    console.log(a * b);

    console.log(a / b);

    return;
}

calc(10, 8);


// Задание 6:

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+' :
            // console.log(arg1 + arg2);
            return arg1 + arg2;
            break;
        
        case '-' :
            // console.log(arg1 - arg2);
            return arg1 - arg2;
            break;    

        case '/' :
            // console.log(arg1 / arg2);
            return arg1 / arg2;
            break;  

        case '*' :
            // console.log(arg1 * arg2);
            return arg1 * arg2;
            break;  
    }
}

mathOperation(5, 3, '+');
mathOperation(5, 3, '-');
mathOperation(5, 3, '*');
mathOperation(5, 3, '/');


// Задание 8:

function power(val, pow) {
    if (pow == 1) {
        return val; 
    } else {
        return val * power(val, pow - 1);
    }
}

console.log(power(5, 2));





