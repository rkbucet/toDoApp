console.log('Hello World!');

function addItem(){
    let inputElement = document.querySelector('#todo-input').value;
    let inputDate = document.querySelector('#todo-date').value;
    console.log(inputDate, inputElement)
    console.log();
    document.querySelector('#todo-input').value = '';
    document.querySelector('#todo-date').value = '';
}