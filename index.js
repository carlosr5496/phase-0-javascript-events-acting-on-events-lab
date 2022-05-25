// Your code here

// adding event listener to whole HTML doc. 
// Takes type of event, and a function

document.addEventListener("keydown", function (event) {
    //inside function, if left arrow key is pressed
    if (event.key === "ArrowLeft") {
        //it creates two variables
        //One will remove px from style
      const leftNumbers = dodger.style.left.replace("px", "");
      //Second one will pass an integer into leftNumbers. 
      const left = parseInt(leftNumbers, 10);
      dodger.style.left = `${left - 1}px`;
    }
    else if (event.key==='ArrowRight'){
      const rightNumbers = dodger.style.right.replace('px', '');
      const right = parseInt(rightNumbers, 10);
      dodger.style.right = `${right+1}px`
    }
  });


  document.addEventListener("keydown", function (event) {
    //inside function, if left arrow key is pressed
    if (event.key === "ArrowLeft") {
        //it creates two variables
        //One will remove px from style
      const leftNumbers = dodger.style.left.replace("px", "");
      //Second one will pass an integer into leftNumbers. 
      const left = parseInt(leftNumbers, 10);
      dodger.style.left = `${left - 1}px`;
    }
  });
  // function will move dodger left if 'left' is detected as event
  function moveDodgerRight() {
      //removes px from style left
    const rightNumbers = dodger.style.right.replace("px", "");
    //passes integer into leftNumbers
    const right = parseInt(rightNumbers, 10);
  // if statement to check if it is or isnt fully to the left side
    if (right > 0) {
      dodger.style.right = `${right + 1}px`;
    }
  }
