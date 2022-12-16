const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const result = document.getElementById("values-list");
const filter = document.getElementById("filter");

const arrayValues = [];
async function getData() {
  let values = JSON.parse(localStorage.getItem("values"));
  if (values === null) {
    valuesList = [];
  } else {
    valuesList = values;
  }
  result.innerHTML = "";
  values.map((value, index) => {
    const div = document.createElement("div");
    arrayValues.push(div);
    div.innerHTML = `
        <div class="wrapper">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"/>
        <div class="wrap__details">   
        <p class="pName">${value.name}</p>
        <p class="pRole">${value.role}</p> </div>
        <button class="deleteTask" onClick="deleteItem(${index})"></button>
        </div>
`;
    result.appendChild(div);
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameInput.value.length < 2) {
    document.getElementById("errorMessage").style.display = "block";
    document.getElementById("errorMessage").innerHTML =
      "Please Fill out this field";
  } else {
    document.getElementById("errorMessage").style.display = "none";
    let values = JSON.parse(localStorage.getItem("values"));
    if (values === null) {
      valuesList = [];
    } else {
      valuesList = values;
    }
    valuesList.push({ name: nameInput.value, role: roleInput.value });
    localStorage.setItem("values", JSON.stringify(valuesList));
  }
  getData();
});

const deleteItem = (index) => {
  valuesList.splice(index, 1);
  localStorage.setItem("values", JSON.stringify(valuesList));
  getData();
};

getData();
filter.addEventListener("input", (e) => filterData(e.target.value));

function filterData(searchTerm) {
  arrayValues.map((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
