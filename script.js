//declare the current day HTML element
var currentDayEl = $("#currentDay");

//declare time entries container html element
var containerEl = $("#timeEntries");

//declare current hour
var currentHour = moment().hour();

//display current time
function currentDay() {
  var today = moment().format(`dddd MMM DD, YYYY`);
  currentDayEl.text(today);
}

//render a block for each hour of the day
for (var i = 9; i <= 17; i++) {
  // var key = "hour-" + i;

  //attempt to get the saved data for the hour of the loop

  var data = ""; //fetch from the local storage

  //compare i to current hour to determine if this hour is in the past, present, or future
  var timeClass;
  //past
  if (currentHour > i) {
    timeClass = "past";
  }
  //present
  else if (currentHour === i) {
    timeClass = "present";
  }
  //future
  else {
    timeClass = "future";
  }
  // if statement for AM else PM
  const timeSuffix = i < 12 ? "AM" : "PM";

  var template = `
  <div class="container">
  <div id="time-9" class="row time-block">
    <div class="col-md-1 hour">${i < 13 ? i : i - 12}${timeSuffix}</div>
    <textarea class="col-md-10 description ${timeClass}">${data}</textarea>
    <button data-hour="${i}" class="btn saveBtn col-md-1">
      <i class="fas fa-save"></i>
    </button>
  </div>
    `;

  // Append the html to the container element
  containerEl.append(template);
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
// localStorage.setItem("hour", JSON.stringify(time));

currentDay();
