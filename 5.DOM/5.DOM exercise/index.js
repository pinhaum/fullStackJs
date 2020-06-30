function saveHouse() {
  let area = document.querySelector("input[name='area']").value;
  let number = document.querySelector("input[name='number']").value;
  let city = document.querySelector("input[name='city']").value;
  let neighbourhood = document.querySelector("input[name='neighbourhood']")
    .value;

  let newListValue = document.createElement("li");
  newListValue.innerText = `${area} m², número: ${number} (${neighbourhood} - ${city})`;

  let removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "Remove";
  removeButton.setAttribute("onclick", "removeHouse(this)");

  newListValue.appendChild(removeButton);

  document.getElementById("house-list").appendChild(newListValue);
}

function removeHouse(button) {
  let liToRemove = button.parentNode;

  document.getElementById("house-list").removeChild(liToRemove);
}
