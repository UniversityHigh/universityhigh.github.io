let date = new Date();
let year = date.getFullYear();
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = date.getMonth() + 1;
if(month.toString().length === 1) month = "0" + month.toString();
document.querySelector("#pdf").src = "https://www.hartfordschools.org/wp-content/uploads/2016/01/Lunch-6-12-" + monthNames[month - 1] + "-" + year + "-Menu.pdf";