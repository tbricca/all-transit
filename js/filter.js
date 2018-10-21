// QUERY / FILTER FOR TRANSIT COMPANY ------------------------------
// Get input element
let filterInput = document.getElementById("filterInput");
// Add event listener
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  // Get value of input
  //we use .value because we want the value
  let filterValue = document.getElementById("filterInput").value.toUpperCase();

  // console.log(filterInput);
  // Get name ul
  let ul = document.getElementById("bookmarks");
  // get li from ul & put it into an array
  // query select all allows you to save everything based on its class name
  let li = ul.querySelectorAll("li.collection-item");

  // Loop through collection items
  for (let i = 0; i < li.length; i++) {
    // names wrapped in 'a' tags
    let a = li[i].getElementsByTagName("a")[0];
    /// [i] current iteration of the loop

    //if matched w/ current name in the loop
    // if else
    // grab whatever is in the a tag
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
