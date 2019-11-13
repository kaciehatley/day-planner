var currentDay = document.querySelector("#currentDay");

window.onload = function() {
    var today = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthNum = today.getMonth();
    currentMonth = months[monthNum];
    var date = (currentMonth+' '+today.getDate()+', '+today.getFullYear());
    currentDay.innerHTML = date;
}

