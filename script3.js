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


//steps
let steps = 0;
let calories = 0;
let water = 0;
function addSteps(amount) {
    steps+=amount;
    if (steps>10000)
    {
        steps=10000;
    }
    document.getElementById("number").textContent=steps;
    let percentage= (steps/10000)*100;
    document.getElementById("stepBar").style.width = percentage+"%";
}

//waterintake
function addWater(amount){
    water+=amount;
    if (water>2.5)
    {
        water=2.5;
    }
    document.getElementById("drink").textContent=water;
    let percentage= (water/2.5)*100;
    document.getElementById("waterBar").style.width= percentage+"%";
}
//calroies
function addCalories(amount)
{
    calories+=amount;
    if (calories>2400){
        calories=2400;
    }
    document.getElementById("eat").textContent=calories;
    let percentage= (calories/2400)*100;
    document.getElementById("calorieBar").style.width=percentage + "%";
}


