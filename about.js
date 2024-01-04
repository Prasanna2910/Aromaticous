// declaring a variable to the store some texts
const text =
  'Welcome to the exciting world of foods. Confused what to eat daily! You are in the right place for your answer. Get recommedations on food to eat daily based on trending and delicious food items around. Get you based on refresh the page. Also get the ingredients of the food items found in front of you. Have aromatic and tasty foods. Signing of from Aromaticous!!';

// Setting a index 0 to instruct the computer to start the previously mentioned texts to start from the 0th index
let index = 0;


function typeText() {
  // get the element from the HTML
  const typingText = document.getElementById('typing-text');
  typingText.textContent += text[index];
  index++;

  if (index < text.length) {
    // Adjusting the timeout to look like typing fast using setTimeout
    setTimeout(typeText, 35);
  }
}

// adding an event listener called "DOMContentLoaded" to display all the HTML that are required to to be shown initially before displaying other stuff
document.addEventListener('DOMContentLoaded', function () {
  typeText(); //showing the typing effect
});
 
let goBackBtn = document.getElementById("takeon").addEventListener("click",function(){
    window.location.href = "index.html"
})
