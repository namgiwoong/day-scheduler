console.log("hello world");

//display current time

//declare the current day HTML element

//declare time entries container html element

//render a block for each hour of the day
for (var i = 9; i <= 17; i++) {
  //attempt to get the saved data for the hour of the loop
  var data = "asf";

  var template = `
    <div class = "row">
    <div>
        ${i}AM
    </div>
    <div>
        <textarea>${data}</textarea>
    </div>
    <div>
        <button data-hour="${i}">Save</button>
    </div>
    </div>
    `;
  // Append the html to the page
}

// Save an hour to local storage
