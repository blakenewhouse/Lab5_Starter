// expose.js

const jsConfetti = new JSConfetti();
window.addEventListener('DOMContentLoaded', init);

function init() {

  // picture + audio selection
  const pictureSelect = document.getElementById("horn-select");
  const picture = document.querySelector("img");
  const audio = document.querySelector(".hidden");
  let selected;
  
  pictureSelect.addEventListener("input", function () {
    selected = pictureSelect.value;

    if (selected === "air-horn") {
      picture.src = "assets/images/air-horn.svg";
      picture.alt = "air-horn";
      audio.src = "assets/audio/air-horn.mp3";
    } else if (selected === "car-horn") {
      picture.src = "assets/images/car-horn.svg";
      picture.alt = "car-horn";
      audio.src = "assets/audio/car-horn.mp3";
    } else if (selected === "party-horn") {
      picture.src = "assets/images/party-horn.svg";
      picture.alt = "party-horn";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  // volume slider
  const volumeDiv = document.getElementById("volume-controls");
  const volumeBar = document.getElementById("volume");

  volumeBar.addEventListener("input", function () {
    let volume = volumeBar.value;
    const icon = volumeDiv.querySelector("img");

    if (volume == 0) {
      icon.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      icon.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      icon.src = "assets/icons/volume-level-2.svg";
    } else {
      icon.src = "assets/icons/volume-level-3.svg";
    }

    audio.volume = (volume / 100);
  });

  // play sound
  const soundButton = document.querySelector("button");


  soundButton.addEventListener("click", function() {
    audio.play();
    if (pictureSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}