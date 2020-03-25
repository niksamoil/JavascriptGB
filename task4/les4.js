// Задание 1:

function conversionNumber() {
    for (let i = 0; i<1; i++) {
        let numEnter = prompt('Введите число от 0 до 999:'),
        obj = {};

        if(numEnter < 10 && numEnter != '' && numEnter != null) {
            obj.units = numEnter;
            console.log(obj);
        } else if (numEnter > 9 && numEnter < 100) {
            obj.units = numEnter.charAt(0);
            obj.dozens = numEnter.charAt(1);
            console.log(obj);
        } else if (numEnter > 99 && numEnter < 1000) {
            obj.units = numEnter.charAt(0);
            obj.dozens = numEnter.charAt(1);
            obj.hundreds = numEnter.charAt(2);
            console.log(obj);
        } else if (numEnter > 1000) {
            console.log(obj);
        } else if (numEnter == null || numEnter == '') {
            console.log('Вы ввели что-то неправильно, повторите попытку');
            i--;
        } else {
            console.log('Неизвестная ошибка');
        }
    }
}

conversionNumber();

// Задание 2:

function Fruit(color, form) {
    this.color = color;
    this.form = form;
    this.showFruit = function() {
        console.log('Цвет фрукта '+ color + ' форма ' + form);
    };
}


let apple = new Fruit('зеленое', 'круглое');
let banan = new Fruit('желтый', 'длинный');

apple.showFruit();

banan.showFruit();


// Задание 3:

// function comparation (a, b) {
//     let result = false,
//         arrA = [],
//         arrB = [];

//     if (a === b) {
//         result = true;
//         console.log(result);
//     } else if (a === arrA && b === arrB ) {
//         console.log('uraa')
//     }
    
//     return result;
// }

// comparation([], []);