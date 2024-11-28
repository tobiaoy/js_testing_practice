class Calculator {
    add (a, b) {
        if (!a || !b){
            return -1;
        }
        return a + b;
    }

    subtract (a, b) {
        if (!a || !b){
            return -1;
        }
        return a - b;
    }

    divide (a, b) {
        if (!a || !b){
            return -1;
        }
        return a / b;
    }

    multiply (a, b) {
        if (!a || !b){
            return -1;
        }
        return a * b; 
    }
}

module.exports = Calculator;