// When page loads, the current day is displayed.
window.onload = function() {
    var today = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthNum = today.getMonth();
    currentMonth = months[monthNum];
    var date = (currentMonth+' '+today.getDate()+', '+today.getFullYear());
    $('#currentDay').html(date);
}

var now = moment().hour();

var workHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var $container = $(".container");

$.each(workHours, function (index, value) {
    var i = index;
    console.log(i);

    boxHour = "";
    if (value <= 11) {
        boxHour = value + "AM"
    } else if (value > 12) {
        boxHour = (value-12) + "PM";
    } else if (value = 12) {
        boxHour = value + "PM";
    }

    var $newRow = $("<div>").addClass("row");
    var $newCol1 = $("<div>" + boxHour + "</div>").addClass("col-sm-1 hour");
    var $newCol3 = $("<div></div>").addClass("col-sm-1 saveBtn");
    var textarea = $('<textarea></textarea>');


    if (value==now) {
        var $newCol2 = $("<div></div>").addClass("col-sm-10 present description");
    } else if (value < now) {
        var $newCol2 = $("<div></div>").addClass("col-sm-10 past description");
    } else if (value > now) {
        var $newCol2 = $("<div></div>").addClass("col-sm-10 future description");
    }
    
    // var textarea = $('<textarea></textarea>').attr("data-index", workHours[index]);
    var icon = $('<i class="far fa-save fa-3x" style="margin: auto; padding: 10px;"></i>');
    $newRow.append($newCol1);
    $newRow.append($newCol2);
    $newCol2.append(textarea);
    $newRow.append($newCol3);
    $newCol3.append(icon);
    $container.append($newRow);
})

// set data attributes for each text area


// 