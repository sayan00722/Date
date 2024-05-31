const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveButtonRandomly(event) {
  event.preventDefault(); // Prevent default click behavior on touch devices

  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;

  let newTop = getRandomNumber(0, containerHeight - btnHeight);
  let newLeft = getRandomNumber(0, containerWidth - btnWidth);

  // Ensure button stays within container bounds (avoid overlaps on right/bottom)
  while (newLeft + btnWidth > containerWidth) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }
  while (newTop + btnHeight > containerHeight) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  btnNo.style.top = `${newTop}px`; // Template literals for cleaner string interpolation
  btnNo.style.left = `${newLeft}px`;
}

// Handle both touch and click events for broad compatibility
btnNo.addEventListener("touchstart", moveButtonRandomly); // Use touchstart for mobile devices
btnNo.addEventListener("click", moveButtonRandomly);

btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});
