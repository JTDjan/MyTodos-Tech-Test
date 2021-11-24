// get the element ID to be able to use in DOM
 const userInput = document.querySelector("#userInput");
 const listOfTask = document.querySelector("#listOfTask");
 const sumbitBtn = document.querySelector("#sumbit");

// create an array of Task 
const taskArr = []

// create a function so that when the user clicks the button the text value will be sent to the array. 
sumbitBtn.addEventListener("click", ()=> {
  let inputValue =  userInput.value 
  listOfTask.innerHTML += `<li>${inputValue}</li>` 
})


// loop the array using a map & display the element of the the task to the display using innerHTML 

