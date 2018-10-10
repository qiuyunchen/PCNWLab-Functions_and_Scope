/*
    FOR EACH PROBLEM BELOW, IMPLEMENT THREE WAYS
    1. AS A FUNCTION DECLARATION
    2. AS function expression
    3. AS fat arrow function
    
    RUN BOTH TO ENSURE THEY WORK PROPERLY
*/


/*
    PROBLEM 1:
        Write a function that takes THREE params: a, b, c
        return the remainder of the sum of a,b,c divided by 3
*/ 
function remainderF1(a = 0, b = 0, c =0) {
    return (a + b + c) % 3;
}

const remainderF2 = function(a = 0, b = 0, c =0) {
    return (a + b + c) % 3;
}

const remainderF3 = (a = 0, b = 0, c =0) => {
    return (a + b + c) % 3;
}

//testing testing//
console.log(remainderF1(1, 3, 3), 1);
console.log(remainderF2(1, 3, 3), 1);
console.log(remainderF2(3, 3, 2), 2);
console.log(remainderF3(3, 3, 2), 2);


/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/

function concatenateF1( a, b, c ){
    return `${a}-${b}-${c}`;
}

const concatenateF2 = function( a, b, c ) {
    return `${a}-${b}-${c}`;
}

const concatenateF3 = ( a, b, c ) => {
    return `${a}-${b}-${c}`;
}

//testing testing//
console.log(concatenateF1("hello", "my", "buddy"));
console.log(concatenateF2("O", "M", "G"));
console.log(concatenateF3("fork", "my", "heart"));

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/

function random1(){
    return (Math.random() * 10);
}

const random2 = function(){
    return (Math.random() * 10);
}

const random3 = () => {
    return (Math.random() * 10);
}

//testing testing//
console.log(random1());
console.log(random2());
console.log(random3());

