// 0. Build containers

//Display Current Day 
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mma"));

//Current hour converted from a string to an integer
var currentHour = parseInt(moment().format("h"));

//This array will be used to save objects that include both date and time
var savedTodos = [];

// Create workHours array, to then use array length to run for loop to create ros
var workHours = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];
var mainDisplay = $("#displayContent");
// 0a. Each hour is one row. Then hour, text box and save button are 3 columns.  Put them in div class container, but make it a loop to create all of them with index less than workHours.length

for (var i = 0; i < workHours.length; i++) {
    //Create row
    var newRow = $("<div>");
    newRow.addClass("row");

    //Create column 1 (hour)
    var newColHour = $("<div>");
    newColHour.addClass("col-md-2 col-sm-3 time-block");
    //Add text of time to the div, adding pm/am and subtracting 12 for times after noon to not be in military time. 
    if (workHours[i] == 12) {
        newColHour.text("Noon")
    } else if (workHours[i] > 12) {
        newColHour.text(parseInt(workHours[i] - 12) + "pm");
    } else {
        newColHour.text(parseInt(workHours[i]) + "am");
    }

    //Create column 2 (text)
    var newColText = $("<input>");
    newColText.addClass("col-md-9 col-sm-6 textarea");

    //Change color depending on time
    if (parseInt(workHours[i]) === moment().hour()) {
        newColText.addClass("present");
    } else if (parseInt(workHours[i]) < moment().hour()) {
        newColText.addClass("past");
    } else {
        newColText.addClass("future");
    }

    //Create column 3 (save button)
    var newColSave = $("<button>");
    newColSave.addClass("col-md-1 col-sm-3 saveBtn");
    newColSave.text("Save");

    //Append columns to row
    newRow.append(newColHour, newColText, newColSave);
    mainDisplay.append(newRow);

};

//Click save to save event into local storage
$(".saveBtn").on("click", function() {
    var savedTodosStorage = {
        hour: $(this).val(),
        todo: $("#col-text-" + $(this).val()).val()
    }
    savedTodos.push(savedTodosStorage);
    localStorage.setItem("savedTodos", JSON.stringify(savedTodos));
})

//Refreshed page still has saved events
function renderSavedTodos() {
    var savedEvents = JSON.parse(localStorage.getItem("savedTodos"));
    console.log(savedEvents);

    //Need to put the savedTodosStorage object back in 

}


//Bonus
// 1. Delete (maybe triple click, then alert delete prompt, and if true then delete, if false then keep). For now you can just rewrite the message or delete the message and save. 
// 2. If time has event, change color to reflect busy