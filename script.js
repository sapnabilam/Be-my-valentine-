let messageIndex = 0;
let messages = ["No", "Are you sure?", "Think again 😏", "Pleaseee 🥺"];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  // change text
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // grow YES button
  let currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );

  yesButton.style.fontSize = (currentSize + 10) + "px";
}
