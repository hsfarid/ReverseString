How to write a function that reverse a string in JavaScript
-First get a reference of the input form where you will accept an input from a user and also a container where you will display the results

- create a submit event listener that invokes a callback function when submitted
- in the event listener, first prevent the default submit action (by default it will refresh the web page)
- create a varible which stores the value of the input
- pass it to a reverseString function
- clear the input field
- In the reverseString function, take the string as a parameter
- split the string into an array of characters, reverse it and join the characters
- display it in the container where you want to display the results
