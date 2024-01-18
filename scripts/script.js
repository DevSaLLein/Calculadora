const screen = document.querySelector('#screen');


const getButton = (id) => {

    let button = document.querySelector(`#${id}`); 
    let value = button.childNodes.item(0).textContent;

    button.addEventListener('click', () => putValue(value));
}

const putValue = (value) => {

    let resultInput = document.querySelector('#result').childNodes.item(3).childNodes.item(3);

    if(value == ',' && resultInput.innerHTML == '') {
        resultInput.innerHTML = `0${value}`;

        return
    }

    resultInput.innerHTML += value
}

const putAction = (action) => {
    
    let resultContainer = document.querySelector('#result');

    resultContainer.childNodes.item(1).innerHTML = screen.innerHTML;
    screen.childNodes.item(3).innerHTML = '0';

    screen.childNodes.item(1).innerHTML = action;
}

const getActions = (id) => {
    let action__button  = document.querySelector(`#${id}`);
    let action = action__button.childNodes.item(0).textContent;

    action__button.addEventListener('click', () => putAction(action));
}

const plusAction = getActions('plus');
const lessAction = getActions('less');
const percentageAction = getActions('percentage');
const multiplicationAction = getActions('multiplication');
const divisionAction = getActions('division');
 
const numberZero__button = getButton('numberZero');
const numberOne__button = getButton('numberOne');
const numberTwo__button = getButton('numberTwo');
const numberThree__button = getButton('numberThree');
const numberFour__button = getButton('numberFour');
const numberFive__button = getButton('numberFive');
const numberSix__button = getButton('numberSix');
const numberSeven__button = getButton('numberSeven');
const numberEight__button = getButton('numberEight');
const numberNine__button = getButton('numberNine');

const comma__button = getButton('comma');

const negativeNumberAction = document.querySelector('#negativeNumberAction');

negativeNumberAction.addEventListener('click', () => {

    let value = screen.childNodes.item(3).innerHTML;

    console.log(value)
    screen.childNodes.item(3).innerHTML = `-${value}`; 
})

const equal_action = document.querySelector('#equal_action');
equal_action.addEventListener('click', () => getResult())

const getResult = () => {

}