//date
const today=new Date();
document.getElementById("date").textContent = today.toLocaleDateString("en-US",{
    weekday: "long",
    month: "long",
    day: "numeric",
});


//profile
let name = prompt("PLEASE ENTER YOUR FIRST NAME:");
document.getElementById("profile").innerText= "HELLO, " + name.toUpperCase() + " ! "

//streak
let streak=2;
const checkboxes= document.querySelectorAll(".habit");
const streakShow= document.getElementById("streak");
checkboxes.forEach(function(checkbox){
    checkbox.addEventListener("change", function(){
        const allChecked= [...checkboxes].every(function(box){
            return box.checked;
        });
        if (allChecked){
            streak++;
            streakShow.textContent=streak;
        }
    });
});
