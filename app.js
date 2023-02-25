const addBtn = document.getElementById("addBtn");
const addList = document.getElementById("addList");
const list = document.getElementById("lists");
const completed = document.getElementById("done");

let lists = [];
let completedTasks = [];

function toDoListcard() {
  list.innerHTML = lists
    .map(
      (render) =>
        `<div class="list-container">
      <p class="Task"> &#8728; ${render}</p>
      <div class="btns">
        <button class="doneBtn">&#9825;</button>
        <button class="deleteBtn">&#9932;</button>
      </div>
    </div>`
    ).join("");
}

addBtn.addEventListener("click", updateLists);
function updateLists() {
  if (addList.value === "") {
    window.alert("Ups..You can't add an empty list");
  } else {
    lists.push(addList.value);
    addList.value = "";
    toDoListcard();
  }
}

list.addEventListener("click", listsClicks);
function listsClicks(event) {
  const listItem = event.target.closest(".list-container");
  const itemIndex = Array.from(list.children).indexOf(listItem);

  if (event.target.classList.contains("deleteBtn")) {
    lists.splice(itemIndex, 1);
    listItem.remove();
  } 
  else if (event.target.classList.contains("doneBtn")) {
    const completedItem = lists.splice(itemIndex, 1)[0];
    completedTasks.push(completedItem);
    listItem.remove();

    completed.innerHTML = completedTasks.map((render) =>
      `<p class="completedTask"> &#8226; ${render}</p>`
      ).join("");
  }
}

