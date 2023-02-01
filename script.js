const images = document.querySelectorAll(".image");
const form = document.querySelector(".form");
const dice = document.querySelector(".dice");
const coupon = document.querySelector(".coupon");
const congrats = document.querySelector(".congrats");
const rollDiceButton = document.querySelector("#roll-dice");
let clickCount = 0;
let total = 0;
let attempts = 0;

images[0].addEventListener("click", function() {
  if (clickCount === 0) {
    form.style.display = "block";
    images[0].style.pointerEvents = "none";
    clickCount++;
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const username = document.querySelector("#username").value;
  form.style.display = "none";
  images[1].style.pointerEvents = "auto";
  images[1].addEventListener("click", function() {
    alert(`Name: ${name}\nUsername: ${username}`);
    images[1].style.pointerEvents = "none";
    images[2].style.pointerEvents = "auto";
  });
});

images[2].addEventListener("click", function() {
  dice.style.display = "block";
  images[2].style.pointerEvents = "none";
});

rollDiceButton.addEventListener("click", function() {
  const result = Math.floor(Math.random() * 6) + 1;
  total += result;
  document.querySelector("#result").textContent = `You rolled a ${result}. Total: ${total}`;
  attempts++;
  if (attempts === 3) {
    dice.style.display = "none";
    if (total > 10) {
      images[3].style.pointerEvents = "auto";
    } else {
      if (attempts === 2) {
        alert("Bad luck");
      } else {
        alert("Please try again");
        attempts = 0;
        total = 0;
      }
    }
  }
});

images[3].addEventListener("click", function() {
  coupon.style.display = "block";
  const couponCode = Math.floor(Math.random() * 1000000000000).toString();
  document.querySelector(".coupon p").textContent = `Your coupon code is: ${couponCode}`;
  images[3].style.pointerEvents = "none";
  congrats.style.display = "block";
});