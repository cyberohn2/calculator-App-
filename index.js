let numbers = document.querySelectorAll('.numbers');
numbers.forEach(display);
let operators = document.querySelectorAll('.operators');
let operations = document.getElementById('operations');
let answer = document.getElementById('answer-update');
let cancel = document.getElementById('cancel');
let clear = document.getElementById('clear');
let equalTo = document.getElementById('equalto');

clear.addEventListener('click', () => {
    
})
 
cancel.addEventListener('click', () => {
    operations.value = '';
    answer.value = '';
})

operators.forEach(display);


function display (element) {
    element.addEventListener('click', () => {
        operations.value += element.value
    });
}
let operatorHandler;

equalTo.addEventListener('click', () => {
    operatorHandler = operations.value;
    answer.value = eval(operatorHandler);

})
