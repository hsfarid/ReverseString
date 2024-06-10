//Get references
const inputString = document.querySelector(".string");
const stringForm = document.querySelector(".stringForm");
const resultScreen = document.querySelector(".result");

//create a reverseString function
const reverseString = (string) => {
  //split the string into an array of characters
  const stringArray = string.split("");
  //reverse the characters in the array
  const reverseArray = stringArray.reverse();
  //join the characters
  const stringReversed = reverseArray.join("");

  //Display the result in a div
  resultScreen.innerHTML = stringReversed;
};

//add a submit event listener
stringForm.addEventListener("submit", (e) => {
  //prevent default
  e.preventDefault();

  //get the input string
  const string = inputString.value;

  //put the string into the reverseString function as an argument
  reverseString(string);

  //clear the input field
  stringForm.reset();
});
