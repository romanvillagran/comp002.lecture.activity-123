function myFunction(name) {
    return `Hello, ${name}!`;
}

console.log(myFunction("some name"));

function calculateCircumference(diameter){
    const pi = Math.PI;
    return pi * diameter;
}
console.log(calculateCircumference(10));

function secondFunction() {
    console.log("pokwdpjowinfovoeverv");
}

function firstFunction() {
    console.log("efjwoi4hurgnscurnwwe");
    
    secondFunction();
    
    console.log("iojefowj4wifowjfoi4wf");
}
firstFunction();

// so the first log inside of firstfunction is executed displaying its message frist, then the log after second function is executed and does the same thing the first log does. it then goes back to the firstfunction where the final log/message is executed //

