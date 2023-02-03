const userValue = document.querySelector(".container-input input");
const Btn = document.querySelector(".container-input button");
const todo = document.querySelector(".todo");

showTasks();

Btn.onclick = ()=>{
    if(userValue.value.trim() === "") {
        return;
    }
    const userEnteredValue = userValue.value;
    const localStorageData = localStorage.getItem("todo");
    if(localStorageData == null){
        listArray = [];
     }
    else{
        listArray = JSON.parse(localStorageData);
    }
    listArray.push(userEnteredValue);
    localStorage.setItem("todo",JSON.stringify(listArray));
    showTasks();
    userValue.value = "";
}

function showTasks(){
    const localStorageData = localStorage.getItem("todo");
    if(localStorageData == null){
        listArray = [];
    }else{
        listArray = JSON.parse(localStorageData);
    }
    let litag = "";
    listArray.forEach((element,index)=>{
        litag+=`<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`
    })
    todo.innerHTML = litag;
}

function deleteTask(index){
    const localStorageData = localStorage.getItem("todo");
    if(localStorageData == null){
        listArray = [];
    }else{
        listArray = JSON.parse(localStorageData);
    }
    listArray.splice(index,1);
    localStorage.setItem("todo",JSON.stringify(listArray));
    showTasks();
}