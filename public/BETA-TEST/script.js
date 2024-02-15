document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".bomb-button");
  let count = 0;
  let timer;

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const buttonText = this.innerText;
      console.log(`Button ${buttonText} was pressed.`);
      count++;
      console.log(`Total count: ${count}`);
    });
  });

  function resetCount() {
    clearInterval(timer);
    count = 0;
    console.log("Count reset to 0.");
  }

  // Set the timer for 4 minutes and 20 seconds
  function startTimer() {
    timer = setInterval(resetCount, 260000);
  }

  startTimer();
});
