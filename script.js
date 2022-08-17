console.log("hello world");

var dayDisplayEl = $("#day-display");
//display current time
function displayDay() {
  var today = moment().format(`dddd MMM DD, YYYY`);
  dayDisplayEl.text(today);
}
//declare the current day HTML element

//declare current hour

//declare time entries container html element

//render a block for each hour of the day
for (var i = 9; i <= 17; i++) {
  //attempt to get the saved data for the hour of the loop
  var data = "asf";

  //compare i to current hour to determine if this hour is in the past, present, or future

  var template = `
    <div class = "row">
    <div>
        ${i}AM
    </div>
    <div>
        <textarea>${data}</textarea>
    </div>
    <div>
        <button class="btn btn-info" data-hour="${i}">Save</button>
    </div>
    </div>
    `;
  // Append the html to the page
}

// Save an hour to local storage

displayDay();
