const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

let entryList = [];

const buttonElement = document.getElementById("btn");
buttonElement.addEventListener("click", (event) => {
  const inputElement = document.getElementById("input").value;
  //   console.dir(typeof(inputElement));

  if (+inputElement != 0) {
    entryList.push(+inputElement);
    console.log(entryList);
    render();
    saveData();
  }
});

const renderBudget = document.getElementById("renderBudget");

const incomeElement = document.getElementById("income");
const expanseElement = document.getElementById("expanse");

// let income = 0;
// let expanse = 0;

function render() {
  renderBudget.innerHTML = "";

  let income = 0;
  let expanse = 0;

  for (let i = 0; i < entryList.length; i++) {
    if (entryList[i] > 0) {
      income = income + entryList[i];

      renderBudget.innerHTML += `<div class="flex justify-between py-1 ">
      <div class="flex gap-4"><span class="font-bold">${entryList[i]}</span> <span>Income</span></div>
      <div class="flex gap-3"><button onclick="del(${i})" >Delete</button> <button onclick ="edit(${i})">Edit</button></div>
    </div>`;
    } else {
      expanse = expanse + entryList[i];

      renderBudget.innerHTML += `<div class="flex justify-between py-1 ">
      <div class="flex gap-4"><span class="font-bold">${Math.abs(
        entryList[i]
      )}</span> <span>Expanse</span></div>
      <div class="flex gap-3"><button onclick="del(${i})" >Delete</button> <button onclick ="edit(${i})">Edit</button></div>
    </div>`;
    }
  }
  incomeElement.innerText = income;
  expanse = Math.abs(expanse);
  expanseElement.innerText = expanse;
}

function del() {}
function saveData() {
  localStorage.setItem("data", JSON.stringify(entryList));
}
function getData() {
  let read = localStorage.getItem("data");
  if (read) {
    entryList = JSON.parse(read);
  }
  render();
}

getData();
