import * as calculator from './calculator'

let btnAdd, btnSubtract,divResult,txtN1,txtN2;

console.log(calculator.getTime());
console.log('Hello there again!');

function onBtnSubtractClick(){
    let n1 = parseInt(txtN1.value),
        n2 = parseInt(txtN2.value),
        result = calculator.subtract(n1, n2)
    divResult.innerText = result;
}

function onBtnAddClick(){
    let n1 = parseInt(txtN1.value),
        n2 = parseInt(txtN2.value),
        result = calculator.add(n1, n2)
    divResult.innerText = result;
}

function onDocumentLoad(){
    txtN1 = document.getElementById('txtN1')
    txtN2 = document.getElementById('txtN2')
    btnAdd = document.getElementById('btnAdd')
    btnSubtract = document.getElementById('btnSubtract')
    divResult = document.getElementById('divResult')

    btnAdd.addEventListener('click', onBtnAddClick)
    btnSubtract.addEventListener('click', onBtnSubtractClick)
}
window.addEventListener('load', onDocumentLoad)
