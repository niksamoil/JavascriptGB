// Задание 1:
let i = 0;

while (i <= 100) {
    console.log(i);
    i++;
}

// Задание 2:

let arr = [prompt('Введите товары через запятую:')],
    price = [+prompt('Введите цены товаров через запятую:')];



function countBasketPrice() {
    

    let result = price.reduce(function(sum, current) {
        return sum + current;
    });

    
    console.log('Ваши товары ' + arr + ' стоят: ' + result);
    
}

countBasketPrice();


// Задание 3: 
let arrA = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    arrB = [];

for (let i = 0; i < arrA.length; arrB[i] = arrA[i++]); 

console.log(arrB);


// Задание 4: 





