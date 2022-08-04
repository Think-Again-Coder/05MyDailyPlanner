// var today = moment();
// $("#timeHeader").text(today.format("MMM Do, YYYY"));

var weekDay = moment("1-1-2022", "M-D-YYYY").format("ddd MMM Do, YYYY");
$("#timeHeader").text(weekDay);