// sum function
function add(a, b) {
    let total = a + b;
    return total;
}

// sub function
function sub(a, b) {
    let total = a - b;
    return total;
}

// mult function
function mult(a, b) {
    let total = a * b;
    return total;
}

// div function
function div(a, b) {
    let total = a / b;
    total = total.toFixed(2)
    return total;
}

export { add, sub, mult, div };
