let outputscreen = document.getElementById("display");

let display = (argu) => {
    outputscreen.value += argu;      //displaying the values pressed on outputscreen
};
let Compute = () => {
    try {
        outputscreen.value = eval(outputscreen.value);    //eval() method evaluates the expression.
    }
    catch (err) {  //if entered expression is invalid 
        alert("Invalid Expression")
    }
};
let Clear = () => {
    outputscreen.value = '';         
};
let Del = () => {
    outputscreen.value = outputscreen.value.slice(0, -1);   //deleting one by one using slice method
};