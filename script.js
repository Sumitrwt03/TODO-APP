function addtodo(){
    let todoValue=document.getElementById("todobox").value;
    let todos=JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todoValue);    

    localStorage.setItem("todos",JSON.stringify(todos));
    list.innerHTML="";
    
    displayTodos();
}

function displayTodos(){
    let list=document.getElementById("list");
    let todos=JSON.parse(localStorage.getItem("todos")); 

    todos.map(function(item){
        let li=document.createElement("li");
        li.textContent= item;

        list.appendChild(li)
    })
}