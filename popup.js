// // Initialize button with user's preferred color
// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

// // The body of this function will be executed as a content script inside the
// // current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }
let color = '#3aaff7';
let count = 0;
// Function to change the content of t2
function myFunction() {
    var x = document.createElement("TR");
    x.setAttribute("id", "myTr"+ String(count));
    document.getElementById("myTable").appendChild(x);

    var y = document.createElement("TD");
    var z = document.createElement("TD");
    var r = document.createTextNode("2$");
    var t = document.createTextNode("TESL");
    y.appendChild(t);
    z.appendChild(r);
    document.getElementById("myTr"+String(count)).appendChild(y);
    document.getElementById("myTr"+String(count)).appendChild(z);
    count+=1;

    chrome.storage.local.get(['stock'], function(result) {
        console.log('Value currently is ' + result.key);
      });

}

// Add event listener to table
const el = document.getElementById("add-more");
el.addEventListener("click", myFunction, false);