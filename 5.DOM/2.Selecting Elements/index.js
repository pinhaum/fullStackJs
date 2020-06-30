function show() {
  let nameElement = document.getElementById("name");
  console.log(nameElement.value);

  let phoneElements = document.getElementsByName("phone");
  console.log(phoneElements[0].value);

  let inputElements = document.querySelectorAll(
    "div#phones input[name='phone']"
  );
  console.log(inputElements[1].value);

  let allInputsElements = document.getElementsByTagName("input");
  console.log(allInputsElements);
}
