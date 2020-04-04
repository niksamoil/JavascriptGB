'use strict';


// Задание 1:
let ytLinks = document.querySelectorAll('#video-title-link'),
    arr = [];


function ytd() {
    for (let i = 0; i < ytLinks.length; i++) {
       
        arr.push(ytLinks[i].href);
    
    }

    return arr;
}

ytd();

// или такой вариант

// ytLinks.forEach(function(item, i) {
//     console.log(i + ' ' + item.href);
// });


// Задание 2:

let user = document.querySelectorAll('.mates-list__mate-name-block'),
    userObj = {};


function geekbrainsUser() {
    
    for( let i = 0; i < user.length; i++) {

        
        userObj[user[i].text] = user[i].href ;
    }

    return userObj;

}    

geekbrainsUser();

