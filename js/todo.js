const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const willremoveli = event.target.parentElement;
  willremoveli.remove();
  toDos = toDos.filter(
    (filterToDo) => filterToDo.id !== parseInt(willremoveli.id)
  );
  saveToDos();
}

function paintToDo(newToDo) {
  const createdli = document.createElement("li");
  createdli.id = newToDo.id;
  const createdspan = document.createElement("span");
  createdspan.innerText = newToDo.text;
  const createdButton = document.createElement("button");
  createdButton.innerText = "x";
  createdButton.addEventListener("click", deleteToDo);
  createdli.appendChild(createdspan);
  createdli.appendChild(createdButton);
  toDoList.appendChild(createdli);
}

function handleToDosubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDosubmit);

function sayHello() {
  console.log("test", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
