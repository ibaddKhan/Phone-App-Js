const data = localStorage.getItem("pArray");
const items = JSON.parse(data);
const mainDiv = document.getElementById("main-div");
const div = document.getElementById("total");
const btn = document.querySelector(".back-to-home-button");

btn.addEventListener("click", click);
function click() {
  // localStorage.setItem("pArray", JSON.stringify(pArray));
  localStorage.setItem("pArray", JSON.stringify(items));
}

print();
function print() {
  for (let i = 0; i < items.length; i++) {
    items[i].total = +`${items[i].price * items[i].Quantity}`;

    mainDiv.innerHTML += `
        <div class="main"><div>
        <h2 class=" padding:10px">${items[i].brand}</h2>
       <img src="${items[i].img}" class="image">
       <h3>Device : ${items[i].model}</h3>
       <h3>Ram : ${items[i].ram} Gb</h3>
       <h3>Rom : ${items[i].rom}Gb</h3>
       <h3>Camera : ${items[i].camera}</h3>
       <h3>Quantity : ${items[i].Quantity}</h3>
  
       <h3 style="Border:1px solid  ;border-radius: 15px 50px;    background-color: #e5f3ff; margin-top:6px  ;margin-bottom:6px; padding:6px">Price : <span style= "color:red; font-weight:bolder; font-size:20px; ">Total : ${items[i].total}</h3
       <div style="display:flex; justify-content:center; gap:9px;" class= "add-sub"><button onclick="remove(${i})">Delete</button><button onclick="plus(${i})" style="margin:4px; padding:7px 20px;border-radius: 3px;" >+</button><button onclick="minus(${i})" style="margin:4px; padding:7px 20px;border-radius: 3px;">-</button ></div>
        </div>
        `;
  }
}
function plus(index) {
  items[index].Quantity += 1;
  mainDiv.innerHTML = "";
  print();
}
function minus(index) {
  mainDiv.innerHTML = "";
  items[index].Quantity -= 1;
  if (items[index].Quantity == 0) {
    items.splice(index, 1);
  }
  print();
}

function remove(index) {
  mainDiv.innerHTML = "";
  items.splice(index, 1);
  print();
}
function check(index) {
  let totalCarrier = 0;
  for (let i = 0; i < items.length; i++) {
    totalCarrier += items[i].total;
  }
  div.innerHTML = totalCarrier;
}
window.onbeforeunload = function () {
  localStorage.setItem("pArray", JSON.stringify(items));
};
