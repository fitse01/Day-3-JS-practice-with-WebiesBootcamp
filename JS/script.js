console.log('helloooo Webies');
//Exercice 2 
// Q 13,   Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
//Enter birth year: 1995
// You are 25. You are old enough to drive
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

var birthYear = parseInt(prompt("please enter your birth year "));
var currentYear = parseInt(prompt("please enter the current year "));
function driverLicence(birthYear){
    
    let age = currentYear - birthYear;
    let leftYears = age - 18;
    let positiveValue = Math.abs(leftYears);
    if (age >=18){
        console.log("you are "+ age +". You are old enough to drive ");
    }
    else{
        console.log("you are "+ age +". You will be allowed to drive after " + positiveValue + " years. ")
    }
}
driverLicence(birthYear);





//Q14,Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
//You lived 3153600000 seconds.

var livedYear = parseInt(prompt("please enter the year you have lived ")); 
function changeYear(livedYear){
    const oneYear = 365 , oneDayToHour = 24 , oneHourToMinut = 60 , oneMinToSecond = 60;
    var changeToSecond = livedYear *  oneYear * oneDayToHour * oneHourToMinut * oneMinToSecond;
    console.log( changeToSecond);
}
changeYear(livedYear);



//Q15  Create a human readable time format using the Date time object
//YYYY-MM-DD HH:mm
//DD-MM-YYYY HH:mm
//DD/MM/YYYY HH:mm


var now = new Date();
var year = now.getFullYear();
var month = String(now.getMonth() + 1);
var day = String(now.getDate());
var hours = String(now.getHours());
var minutes = String(now.getMinutes());

//1,YYYY-MM-DD HH:mm format:
var formattedTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
console.log(formattedTime);

//2,DD-MM-YYYY HH:mm format:
var formattedTime = day + '-' + month + '-' + year + ' ' + hours + ':' + minutes;
console.log(formattedTime);


//3,DD/MM/YYYY HH:mm
var formattedTime = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
console.log(formattedTime);


//Exercise 3
//Q 1,  Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// i , YYY-MM-DD HH:mm eg. 20120-01-02 07:05
var now = new Date();
var year = now.getFullYear();
var month = String(now.getMonth() + 1).padStart(2, '0');
var day = String(now.getDate()).padStart(2, '0');
var hours = String(now.getHours()).padStart(2, '0');
var minutes = String(now.getMinutes()).padStart(2, '0');

var formattedTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
console.log(formattedTime);

