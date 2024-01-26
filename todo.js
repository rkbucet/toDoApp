let todoList = [];
displayItems();

function addItem(){
    let inputElement = document.querySelector('#todo-input');
    let inputDate = document.querySelector('#todo-date');
    let itemValue = inputElement.value;
    let dueDate = inputDate.value;
    todoList.push({item: itemValue, duedate: dueDate})
    console.log(itemValue, dueDate);
    inputElement.value = '';
    inputDate.value = '';
    
    displayItems()
}

function displayItems() {
    let toDoShow = document.querySelector('.containerElement')
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let  {item, duedate} = todoList[i]
        newHtml += `
            <span>${item}</span>
                <span>${duedate}</span>
                <button id="btn-delete" onclick="todoList.splice(${i}, 1);
                displayItems();">Delete</button>
          `;
    }
    toDoShow.innerHTML = newHtml;
  }