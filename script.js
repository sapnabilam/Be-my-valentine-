let messageIndex = 0;
let messages = ["No", "Are you sure?", "Think again 😏", "Pleaseee 🥺"];

function handleNoClick() {
  const yesButton = document.querySelector(".yes-button");
  const noButton = document.querySelector(".no-button");

  // change NO text
  noButton.innerText = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // FORCE grow YES
  let size = parseInt(yesButton.style.fontSize || 20);
  yesButton.style.fontSize = (size + 10) + "px";
}

function sendYes() {
  window.location.href =
    "https://wa.me/919813279342?text=I%20said%20YES%20%F0%9F%92%95";
}
