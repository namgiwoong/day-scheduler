//declare the current day HTML element
var dayDisplayEl = $("#day-display");

//declare time entries container html element
var containerEl = $(".container");

//declare current hour
var time = moment().format("hh:mm:ss");

//display current time
function displayDay() {
  var today = moment().format(`dddd MMM DD, YYYY`);
  dayDisplayEl.text(today);
}

//render a block for each hour of the day
for (var i = 9; i <= 17; i++) {
  var key = "hour-" + i;

  //attempt to get the saved data for the hour of the loop

  var data = "asf";

  //compare i to current hour to determine if this hour is in the past, present, or future

  var template = `
  <div class="container">
  <div id="time-9" class="row time-block">
    <div class="col-md-1 hour">${i}</div>
    <textarea class="col-md-10 description">${data}</textarea>
    <button class="btn saveBtn col-md-1">
      <i class="fas fa-save">${i}</i>
    </button>
  </div>
    `;

  // Append the html to the container element
}

//set up a "click" event listner on the container
containerEl.on("click", "button", function (event) {
  //fetch the hour from the clicked button's "data-hour" attribute.
  event.target();
  //use the hour to create the key for local storage
  // from the clicked button, traverse the DOM to the nearby <textarea> to fetch its value
  // use the key and the value to save into localstorage
});

// Save an hour to local storage

displayDay();
