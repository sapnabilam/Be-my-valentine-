let messages = ["No", "Are you sure?", "Think again 😏", "Pleaseee 🥺"];
let index = 0;

function handleNoClick() {
  const yesBtn = document.querySelector(".yes-button");
  const noBtn = document.querySelector(".no-button");

  // change NO text
  noBtn.innerText = messages[index];
  index = (index + 1) % messages.length;

  // grow YES button
  let currentSize = parseInt(yesBtn.style.fontSize || 20);
  yesBtn.style.fontSize = (currentSize + 10) + "px";
}

function sendYes() {
  window.location.href =
    "https://wa.me/919813279342?text=I%20said%20YES%20bubu%20%F0%9F%92%95";
}
