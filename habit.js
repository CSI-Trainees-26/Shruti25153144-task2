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

//selectedday
let todays = new Date();

let options = {
    weekday: "long",
    month: "long",
    day: "numeric"
};
document.getElementById("date").textContent =    today.toLocaleDateString("en-US", options);

let week = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false]
];

let selectedDay = today.getDay() - 1;
if (selectedDay === -1) {
    selectedDay = 6;
}
let taskNames = [
    "🎸 Playing Guitar",
    "🏃 Run",
    "📖 Reading Book",
    "📔 Journaling",
    "🧘 Meditation",
    "💪 Workout"
];
let checkboxes =document.querySelectorAll(".tasks input");
function changeDay(day) {
    selectedDay = day;
    showTasks();
}

//show task
function showTasks() {
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked =
            week[selectedDay][i];
    }
    updateProgress();
    updateDayButtons();
}
function taskCompleted(taskNumber) {
    week[selectedDay][taskNumber] =
        checkboxes[taskNumber].checked;

    document.getElementById("selectedTask").textContent =        "Working on: " + taskNames[taskNumber];
    updateProgress();
    calculateStreak();
}
function updateProgress() {
    let completed = 0;
    for (let i = 0; i < 6; i++) {
       if (week[selectedDay][i] === true) {

            completed++;
        }
    }
    let percentage =
        (completed / 6) * 100;
    document.getElementById("progressBar").style.width =
        percentage + "%";
    document.getElementById("progressText").textContent =
        completed + " / 6 tasks completed";

}
function updateDayButtons() {

    let buttons =
        document.querySelectorAll(".days button");


    for (let i = 0; i < buttons.length; i++) {

        buttons[i].classList.remove("active");

    }


    buttons[selectedDay].classList.add("active");

}

//streak
function calculateStreak() {
    let streak = 0;
    for (let i = 0; i < 6; i++) {
        let complete = true;
        for (let j = 0; j < 5; j++) {
            if (week[i][j] === false) {
                complete = false;
                break;
            }
        }
        if (complete) {
            streak++;
        }
    }
document.getElementById("streak").textContent =
        streak;
}

//pomodoro
let time = 25 * 60;
let timer;
let running = false;
let sessions = 0;
function startTimer() {
    if (running === true) {
        return;
    }
    running = true;
    timer = setInterval(function() {
        time--;
        updateTimer();

        if (time === 0) {
            clearInterval(timer);
            running = false;
            sessions++;
            document.getElementById("sessions").textContent =
                sessions;
            alert("Pomodoro completed! 🎉");
            time = 25 * 60;
            updateTimer();
        }
    }, 1000);
}
function pauseTimer() {
    clearInterval(timer);
    running = false;
}
function resetTimer() {
    clearInterval(timer);
    running = false;
    time = 25 * 60;
    updateTimer();
}
function updateTimer() {
    let minutes =
        Math.floor(time / 60);
    let seconds =
        time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById("timer").textContent= minutes + ":" + seconds;
}
showTasks();
updateTimer();
