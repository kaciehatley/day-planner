// When page loads, the current day is displayed.
window.onload = function() {
    var today = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthNum = today.getMonth();
    currentMonth = months[monthNum];
    var date = (currentMonth+' '+today.getDate()+', '+today.getFullYear());
    $('#currentDay').html(date);
}

workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

for (var i=0; i<workHours.length; i++) {
    $('.container').append("<div class='row'><div class='col-sm-1 hour'>");
    $('.hour').html(workHours[i]);
    // $('.hour').text(workHours[i]);
    // $('.row').append('<div class="col-sm-10 past description">');
    // $('.row').append('<div class="col-sm-1 saveBtn">');
}