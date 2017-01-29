let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = new Date();
let month = months[date.getMonth()]
let year = date.getFullYear();

function daysInMonth() {
	return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

document.querySelector("#month").textContent = month + " ";
document.querySelector("#year").textContent = year;

let days = document.querySelectorAll(".days td");
let dayNumbers = document.querySelectorAll(".days .day-number");
for(let i = 0; i < daysInMonth(); i++) {
	dayNumbers[i].textContent = i + 1;
}