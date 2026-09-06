//page1
//date
const today=new Date();
document.getElementById("date").textContent = today.toLocaleDateString("en-US",{
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
});

//profile
let name = prompt("PLEASE ENTER YOUR FIRST NAME:");
document.getElementById("profile").innerText= "HELLO, " + name.toUpperCase() + " !  WELCOME " + " TO TASK TRACKER !";