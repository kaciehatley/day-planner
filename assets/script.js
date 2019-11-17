// When page loads, the current day is displayed.
window.onload = function() {
    var today = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthNum = today.getMonth();
    currentMonth = months[monthNum];
    var date = (currentMonth+' '+today.getDate()+', '+today.getFullYear());
    $('#currentDay').html(date);
}

// Variable for current time
var now = moment().hour();

// Variables to store work hours and container that will store new elements
var workHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var $container = $(".container");

// Loop for each row
$.each(workHours, function (index, value) {
    // The index of each row and all of its elements equals current index of item in workHours array
    var i = index;

    // Changes display time from military
    boxHour = "";
    if (value <= 11) {
        boxHour = value + "AM"
    } else if (value > 12) {
        boxHour = (value-12) + "PM";
    } else if (value = 12) {
        boxHour = value + "PM";
    }

    // Creates new rows and elements for each time block
    var $newRow = $("<div>").addClass("row");
    var $newCol1 = $("<div>" + boxHour + "</div>").addClass("col-sm-1 hour");
    var $newCol3 = $("<div></div>").addClass("col-sm-1 saveBtn");
    var textarea = $('<textarea></textarea>').attr("data-index", i).addClass("input");
    var icon = $('<i class="far fa-save fa-3x" style="margin: auto; padding: 10px;"></i>').attr("data-index", i);

    // Adds class of "past" "present" or "future" based on the current time
    if (value==now) {
        var $newCol2 = $("<div></div>").addClass("col-sm-10 present description");
    } else if (value < now) {
        var $newCol2 = $("<div></div>").addClass("col-sm-10 past description");
    } else if (value > now) {
        var $newCol2 = $("<div></div>").addClass("col-sm-10 future description");
    }

    // Appends all new elements
    $newRow.append($newCol1);
    $newRow.append($newCol2);
    $newCol2.append(textarea);
    $newRow.append($newCol3);
    $newCol3.append(icon);
    $container.append($newRow);

    // Sets all textarea values equal to corresponding value in storage
    var inputText = localStorage.getItem(i);
    textarea.text(inputText);

    // On click function for each icon 
    icon.on("click", function(event) {
        event.preventDefault();
        var element = event.target;
        var content = element.parentNode.parentNode.querySelector(".input").value;
        localStorage.setItem(i, content);
    })
})