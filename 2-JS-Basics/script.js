////////////////////////////////////////////////
// Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/



////////////////////////////////////////////////
//Lecture: variables 2
/*
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');


var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/


////////////////////////////////////////////////
//Lecture: operators
/*
var now = 2016
var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/




////////////////////////////////////////////////
// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;

if(isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}

if (23 == '23') {
    console.log('"Type Coercion" in the "==" vs "===", makes the number 23 and the string "23" equal to eachother.');
}
*/


////////////////////////////////////////////////
//Lecture: boolean logic and switch
/*
var age = 20;

if(age < 20) {
    console.log('John is not a "real" man yet. :P');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}


var job = 'teacher';

job = prompt('What does John do?');

switch(job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
}
*/



////////////////////////////////////////////////
//CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player wih the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console.  Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).
4. EXTRA: Add a third player and now decide who wins.  Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
*/

/////////////////////
//MY ANSWER
/*

function player(name, height, age) {
    this.name = name;
    this.height = height;
    this.age = age;
    this.score = height + (5 * age)
}

function sillyGame(p1, p2, p3) {
    // CODE FOR A 2 PLAYER GAME
    //if (p1.score > p2.score) {
    //    announceWinner(p1);
    //} else if (p1.score < p2.score) {
    //    announceWinner(p2);
    //} else if (p1.score === p2.score) {
    //    announceDraw();
    //}
    
    if (p1.score > p2.score && p1.score > p3.score) {
        announce(p1);
    } else if(p2.score > p1.score && p2.score > p3.score) {
        announce(p2);
    } else if (p3.score > p1.score && p3.score > p1.score) {
        announce(p3);
    } else {
        announceDraw();
    }
    
    function announce(player) {
        console.log(player.name + ' wins the game with ' + player.score + ' points!');
    }
    
    function announceDraw() {
        console.log('It\'s a draw.');
    }
}

var player1 = new player('John', 180, 26);
var player2 = new player('Mike', 165, 29);
var player3 = new player('Mary', 158, 31);

sillyGame(player1, player2, player3);
*/



/////////////////////////
// SOLUTION:
/*
var heightJohn = 172;
var heightMike = 195;
var ageJohn = 26;
var ageMike = 29;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;

//if (scoreJohn > scoreMike) {
//    console.log('John wins the game with ' + scoreJohn + ' points!');
//} else if (scoreMike > scoreJohn) {
//    console.log('Mike wins the game with ' + scoreMike + ' points!');
//} else if (scoreJohn === scoreMike) {
//    console.log('there is a draw.');
//}


var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;

if(scoreJohn > scoreMike && scoreJohn && scoreMary) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary wins the game with ' + scoreMary + ' points!');
} else {
    console.log('It\'s a draw');
}
*/



///////////////////////////////////////////////
// Lecture: functions
/*

function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
//console.log(ageJohn);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.'); 
    } else {
        console.log(name + ' has already retired.');
    }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/


///////////////////////////////////////////////
// Lecture: statements and expressions
/*
// function statement: performs an action
function someFun(par) {
    //code
}

// function expression: produces a value
var someFun = function(par) {
    //code
}

//for example, these are expressions:
3 + 4;
var x = 3;

//on the other hand, these are statements:
if(x === 5) {
    //do something
}
*/


//////////////////////////////////////////////
// Lecture: arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf('Smith'));

if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher.');
}
*/



////////////////////////////////////////////////
//Lecture: objects
/*
// object literal
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
}

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/


////////////////////////////////////////////////
//Lecture: objects and methods
/*
//// v1.0
//var john = {
//    name: 'John',
//    lastName: 'Smith',
//    yearOfBirth: 1990,
//    job: 'teacher',
//    isMarried: false,
//    family: ['Jane', 'Mark', 'Bob'],
//    calculateAge: function() {
//        return 2017 - this.yearOfBirth;
//    }
//}
//
//console.log(john.calculateAge());
//
//var age = john.calculateAge();
//john.age = age;
//
//console.log(john);

//////////////

// v2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2017 - this.yearOfBirth;
    }
}

john.calculateAge();
console.log(john);
*/



///////////////////////////////////////////////////
// Lecture: loops

/*
//for (var i = 0; i < 10; i++) {
//    console.log(i);
//}

// 0, true, print 0, update i to 1
// 1, true, print 1, update i to 2
// .
// .
// .
// 9, true, print 9, update i to 10
// 1o, FALSE, end loop!

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}


// CHALLENGE: REVERSE NAME ORDER
for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}

// while loops
var i = 0
while(i < names.length) {
    console.log(names[i]);
    i++;
}

//this will not write anything after 3, because it breaks out of the loop 
for (var i = 1; i <= 5; i++) {
    console.log(i);
    
    if (i === 3) {
        break;
    }
}

//this will skip 3 because it will skip back to the loop start
for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
*/



//////////////////////////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just[])
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age
5. Finally, create a function called printFullAge which receives the vector of years as an argument (from 1.), executes the steps 2., 3. and 4. and returns a vector of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different vectors and store the results in two variables: full_1 and full_2

Example input: [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/


////////////////////////
// MY ANSWER
/*
var yearsBorn = [1965, 2008, 1992];
var ages = [];

for(var i = 0; i < yearsBorn.length; i++) {
    ages.push(2017 - yearsBorn[i]);
    
    console.log(ages[i] >= 18);
    console.log(ages[i]);
}

function printFullAge(yearsArr) {
    var ages = [];
    var arr = [];

    for(var i = 0; i < yearsArr.length; i++) {
        ages.push(2017 - yearsArr[i]);
        
        console.log(ages[i] >= 18);
        console.log(ages[i]);     
        
        ages[i] >= 18 ? arr.push(true) : arr.push(false);
    }
    
    return arr;
}

var full_1 = printFullAge([1995, 1997, 1999, 2001]);
var full_2 = printFullAge([1965, 2008, 1992]);

*/

///////////////////
// SOLUTION
/*
function printFullAge(years) {
    var ages = [];
    var fullAges = [];

    for (var i = 0; i < years.length; i++) {
        ages[i] = 2017 - years[i];
    }

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
            fullAges.push(false);
        }
    }
    
    return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];

var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
*/






























