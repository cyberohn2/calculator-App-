let numbers = document.querySelectorAll('.numbers');
numbers.forEach(display);
let operators = document.querySelectorAll('.operators');
let operations = document.getElementById('operations');
let answer = document.getElementById('answer-update');
let cancel = document.getElementById('cancel');
let clear = document.getElementById('clear');
let equalTo = document.getElementById('equalto');
let operatorHandler;
clear.addEventListener('click', () => {
   operations.value = operations.value.slice(0,-1)
   operatorHandler = operations.value;
   answer.value = eval(operatorHandler);
})
 
cancel.addEventListener('click', () => {
    operations.value = '';
    answer.value = '';
})

operators.forEach(display);
const divOperator = document.querySelector('.divide')
divOperator.addEventListener('click', e =>{
    e.preventDefault()
    operations.value += divOperator.getAttribute('data-operator')
})

const timesOperator = document.querySelector('.times')
timesOperator.addEventListener('click', e =>{
    e.preventDefault()
    operations.value += timesOperator.getAttribute('data-operator')
})

function display (element) {
    element.addEventListener('click', () => {
        operations.value += element.value
        operatorHandler = operations.value;
        answer.value = eval(operatorHandler);
    });
}

equalTo.addEventListener('click', () => {
    operatorHandler = operations.value;
    answer.value = eval(operatorHandler);

})


window.addEventListener('keydown', e =>{
    e.preventDefault()
    console.log(e);
    if (!isNaN(e.key) || e.key == '*' || e.key == '-' || e.key == '+' || e.key == '/') {
        operations.value += e.key
        operatorHandler = operations.value;
        answer.value = eval(operatorHandler);
    }
    if (e.key == 'Backspace') {
        operations.value = operations.value.slice(0,-1)
        operatorHandler = operations.value;
        answer.value = eval(operatorHandler);
    }
    if (e.key == 'Enter' || e.key == '=') {
        operatorHandler = operations.value;
        answer.value = eval(operatorHandler);
    }
})
