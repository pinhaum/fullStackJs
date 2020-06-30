function addNewPhone() {
  //querySelector devolve o primeiro elemento da lista gerada pelo querrySelectorAll
  const phoneForm = document.querySelector("form#phones");
  const newPhone = phoneForm.children[0].cloneNode(true);
  const phonePosition = phoneForm.children.length + 1;
  newPhone.querySelector("label").innerText = `Phone ${phonePosition}:`;
  phoneForm.appendChild(newPhone);
  console.log(phoneForm.children);
}

function printPhones() {
  let message = "";
  const phones = document.querySelectorAll("input[name='phone']");
  phones.forEach((phone, index) => {
    message += `Telefone ${index + 1}: ${phone.value}\n`;
  });
  alert(message);
}
