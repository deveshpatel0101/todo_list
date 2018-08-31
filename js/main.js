let todo_form = document.getElementById('todo_form');
let todo_remain = document.getElementById('todo_remain');
let todo_complete = document.getElementById('todo_complete');
let check = 0;

todo_form.addEventListener('submit', function(e) {
    let todoRemainValue = [];
    let newTodo = e.target.elements[0].value;
    check = 0;
    e.preventDefault();
    if (newTodo == "") {
        alert('Please fill in some value.');
        return;
    }

    for (i = 0; i < todo_remain.children.length; i++) {
        todoRemainValue.push(todo_remain.children[i].textContent.split("delete")[0]);
    }

    for (i = 0; i < todoRemainValue.length; i++) {
        if (newTodo.toLowerCase() === todoRemainValue[i].toLowerCase()) {
            check = 1;
            alert("You cannot add same todo twice.");
        }
    }

    if (check === 0) {
        let newLi = document.createElement('li');
        let text = document.createTextNode(newTodo);
        let newButton = document.createElement('button');
        newButton.setAttribute("onclick", "runMe(this);");
        let buttonText = document.createTextNode('delete');
        newButton.appendChild(buttonText);
        newLi.appendChild(text);
        newLi.appendChild(newButton);
        todo_remain.appendChild(newLi);
    }
});

function runMe(e) {
    e.parentNode.remove()
    let newLi = document.createElement('li');
    let newText = document.createTextNode(e.parentNode.textContent.split("delete")[0]);
    newLi.appendChild(newText);
    todo_complete.appendChild(newLi);
}