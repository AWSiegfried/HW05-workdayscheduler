// 0. Build containers
$(document).ready(function() {
    //Display Current Day 
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mma"));

    //This array will be used to save objects that include both date and time
    var savedTodos = JSON.parse(localStorage.getItem("savedTodos")) || [];


    // Create workHours array, to then use array length to run for loop to create ros
    var workHours = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];
    var mainDisplay = $("#displayContent");

    // 0a. Each hour is one row. Then hour, text box and save button are 3 columns.  Put them in div class container, but make it a loop to create all of them with index less than workHours.length

    for (var i = 0; i < workHours.length; i++) {

        //Create row
        var newRow = $("<div>");
        newRow.addClass("row");
        newRow.data("hour", workHours[i])

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
        console.log(savedTodos);
        savedTodos.forEach(function(element) {
            console.log(element);
            if (element.hour == workHours[i]) {
                newColText.val(element.todo)
            }
        });
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
        console.log($(this).parent());
        console.log($(this).siblings("input"));

        //Filter - If returns true, stays in the array.  If returns false, is removed from the array.
        var savedTodos = JSON.parse(localStorage.getItem("savedTodos")) || [];
        var filteredSavedTodos = savedTodos.filter(function(element) {
            return element.hour !== $(this).parent().data("hour")
        });
        var savedTodosStorage = {
            hour: $(this).parent().data("hour"),
            todo: $(this).siblings("input").val(),
        }
        filteredSavedTodos.push(savedTodosStorage);
        localStorage.setItem("savedTodos", JSON.stringify(filteredSavedTodos));
    })
})