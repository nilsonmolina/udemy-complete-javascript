//////////////////////////////////////////
// Lecture: Hoisting

/*
//Thanks to HOISTING, we can call a function declaration before the function definition as shown below.  
calculateAge(1990);

function calculateAge(year) {
    console.log(2017 - year);
}

//However, function expressions do NOT work this way, and this is because hoisting only works with function declarations.  Hoisting sets variables to undefined, thus an error is thrown with the following code:

//retirement(1956);
//
//var retirement = function(year) {
//    console.log(65 - (2017 - year));
//}


//Hoisting with variables is simply set as undefined. Execution context is very important!
console.log(age);
var age = 23;
console.log(age);

function foo() {
    var age = 65;
    console.log('age in foo: ' + age);
}

function otherFoo() {
    console.log('age in otherFoo: ' + age);
    var age = 65;
}

function finalFoo() {
    console.log('age in finalFoo: ' +age);
}
foo();
otherFoo();
finalFoo();
console.log('not in foo: ' + age);

*/

//////////////////////////////////////////
// Lecture: Scoping
/*
// First scoping example - Lexical Scoping (nested scoping) Notice how this code block works, but the second block does not:

//var a = 'Hello!';
//first();
//
//function first() {
//    var b = 'Hi!';
//    second();
//    
//    function second() {
//        var c = 'Hey!';
//        console.log(a + b + c);
//    }
//}

// Example to show the difference between execution stack and scope chain.  This does not work:

//var a = 'Hello!';
//first();
//
//function first() {
//    var b = 'Hi!';
//    second();
//    
//    function second() {
//        var c = 'Hey!';
//        third();
//    }
//}
//
//function third() {
//    var d = 'John';
//    //console.log(c);
//    console.log(a + d);
//}
*/

//////////////////////////////////////////
// Lecture: The 'this' Keyword

/*
//console.log(this);



//calculateAge(1985);
//
//function calculateAge(year) {
//    console.log(2017 - year);
//    console.log(this);
//}



var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2017 - this.yearOfBirth);
        
//        function innerFunction() {
//            console.log(this);
//        }
//        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();*/






















