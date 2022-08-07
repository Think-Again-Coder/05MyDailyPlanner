//Started with the most current date and time

var past = [];
var present = [];
var future = [];

//The jquery elements that can be used like this code below
// var clock = document.getElementById("timeHeader");


var currentDay = new Date();

var present = moment("08-06-2022", "M-D-YYYY").format("MMMM Do YYYY, h:mm:ss", true);
$("#currentDay").text(currentDay);
console.log(currentDay);

var events = localStorage.getItem('saveBtn');

// function now() {
//     console.log(clock);
// };

//The click event below is being used to change the color of the timeblock when clicked.
document.getElementById("#b1").addEventListener("click", changeColor, true);

function changeColor(present) {
    document.syle = present;
  
};


//Using this button to save to local storage
// saveBtn.addEventListener("click", function() {
//     if (events = true) {
//         innerHTML.textContent = events;
//       localStorage.setItem("events", );
//     }
//   });


//each line will have to be saved independantly of the others. 
// 9 hour workday - append new element  
//classes <> to add color coding for hourly events
//Use the css to reference the past present future 
//use setInterval for timers and clear Interval for 
// var weekDay = moment("1-1-2022", "M-D-YYYY").format("ddd MMM Do, YYYY");
// $("#timeHeader").text(weekDay);