const fibonacci = function() {
    const num = Number(arguments[0]);

    if (num < 0){
        return "OOPS";
    }else if (num <=2){
        return 1;
    }else {
        return fibonacci(num-1) + fibonacci(num-2); 
    }

};

console.log(fibonacci('4'));

// Do not edit below this line
module.exports = fibonacci;
