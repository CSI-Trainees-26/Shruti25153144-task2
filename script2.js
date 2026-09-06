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