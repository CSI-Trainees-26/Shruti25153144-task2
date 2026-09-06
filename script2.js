//nav
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(item => {
            item.classList.remove("active");
        });
        this.classList.add("active");
    });
});

//time
function showTime(){
    let now= new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm= hours>=12? "PM" : "AM";
    hours=hours%12;
    hours = hours=== 0 ? 12:hours;
    minutes= minutes<10? "0"+minutes: minutes;
    document.getElementById("time").innerText= "The current time is:"+ " "+ hours +":"+minutes +" " +ampm;
}
showTime()
setInterval(showTime,1000);

//date
const today=new Date();
document.getElementById("date").textContent = today.toLocaleDateString("en-US",{
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
});

//time-tracker
let time = 0;
function addTime(amount) {
    time+=amount;
    if (time>8)
    {
        time=8;
    }
    document.getElementById("timeTracker").textContent=time;
    let percentage= (time/8)*100;


    let bar1= document.getElementById("timeBar1")
    let bar2= document.getElementById("timeBar2")
    let bar3= document.getElementById("timeBar3")
    let bar4= document.getElementById("timeBar4")


    bar1.style.width = "0%";
    bar2.style.width = "0%";
    bar3.style.width = "0%";
    bar4.style.width = "0%";

    if (time<=2)
    {
        bar1.style.width = (time/2)*25 +"%";
        alert("YOU NEED TO SLEEP!");
    }
    else if (time<=4)
    {
        bar1.style.width = "25%";
        bar2.style.width = ((time-2)/2)*25 +"%";
        alert("YOU NEED TO IMPROVE YOUR SLEEP CYCLE!");
    }
    else if (time<=6)
    {
        bar1.style.width = "25%";
        bar2.style.width = "25%";
        bar3.style.width = ((time-4)/2)*25 +"%";
    }
    else
    {
        bar1.style.width = "25%";
        bar2.style.width = "25%";
        bar3.style.width = "25%";
        bar4.style.width = ((time-6)/2)*25 +"%";
        alert("CONGRATULATIONS! YOU HAVE GOOD SLEEP CYCLE!")
    }
}