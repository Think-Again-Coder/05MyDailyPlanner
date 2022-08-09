// The time is set by date with next three variables using moment api includes current time.
var currentDay = new Date();

var present = moment("08-06-2022", "M-D-YYYY").format("MMMM Do YYYY, h:mm:ss");
$("#currentDay").text(currentDay);
console.log(currentDay);

var currentHour = moment().hour();
    console.log(currentHour);

//This function lets me relate the hour to the past, present, or future based on block times. 
//The click event below is being used to change the color of the timeblock when clicked.It adds and removes the 
//..the blocks of time
var setHourBlock = function(hourBlock) {
    var hourId = Number.parseInt(hourBlock.id);
    var textArea = hourBlock.querySelector('input');
    if (hourId < currentHour) {
        textArea.classList.add('past');
    } else if (hourId === currentHour) {
        textArea.classList.remove('past');
        textArea.classList.add('present');
    } else {
        textArea.classList.remove('past');
        textArea.classList.remove('present');
        textArea.classList.add('future');
    }
    var saveBtn = hourBlock.querySelector('.saveBtn');  

//This will let the input be retrieved from local storage. 
var savedTask = localStorage.getItem(hourId)
textArea.value = savedTask;

// Using this button to save to local storage with event listener click.
saveBtn.addEventListener("click", function() {
    var taskInput = textArea.value;
    console.log(taskInput);
    localStorage.setItem(hourId, (taskInput))
    
  });
};  
//found that the forEach method lets me connect all the Time Blocks
document.querySelectorAll('.input-group').forEach(setHourBlock);

