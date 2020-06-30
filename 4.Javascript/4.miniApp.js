let container = document.getElementById("container");
let h1 = document.createElement("h1");

h1.innerHTML = "Mini App";
container.appendChild(h1);

////////////////////////////////////
let departureDateEntry = prompt("Digite a data de partida (formado DD/MM/YYYY");

let departureDate = moment(departureDateEntry, "DD/MM/YYYY");

let today = moment();

let dateDiff = today - departureDate;

let chosenOption = prompt(
  "Escolha como exibir o tempo de partida\n1- Segundos\n2- MInutos\n3- Horas\n4- Dias"
);

if (chosenOption == "1") {
  let secondsOfDeparture = Math.round(dateDiff / 1000);
  alert(`Tempo de vôo: ${secondsOfDeparture} segundos`);
} else if (chosenOption == "2") {
  let minutesOfDeparture = Math.round(dateDiff / 1000 / 60);
  alert(`Tempo de vôo: ${minutesOfDeparture} minutes`);
} else if (chosenOption == "3") {
  let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600);
  alert(`Tempo de vôo: ${hoursOfDeparture} Horas`);
} else if (chosenOption == "4") {
  let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24);
  alert(`Tempo de vôo: ${daysOfDeparture} Dias`);
} else {
  alert("invalid option");
}
