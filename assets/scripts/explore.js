// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // voice selection/generation
  const voiceSelect = document.getElementById("voice-select");
  const face = document.querySelector("img");
  const voices = SpeechSynthesis.getVoices();
  let selected = voiceSelect.value;

  for (const i of voices) {
    const newOption = document.createElement("option");
    newOption.value = i.name;
    newOption.textContent = `${i.name()} (${i.lang()})`;
    voiceSelect.appendChild(newOption);
  }

  voiceSelect.addEventListener("change", function () {
    selected = voiceSelect.value;
  });

  // press to talk
  const talkButton = document.querySelector("button");
  const text = document.getElementById("text-to-speak");

  talkButton.addEventListener("click", function() {
    let spokenWords = new SpeechSynthesisUtterance(text.value);
    spokenWords.voice = voices.find(voice => voice.name === selectedVoice);

    SpeechSynthesis.speak(spokenWords);

    // Display face while speaking
    spokenWords.onstart = function() {
      face.src = "assets/images/smiling-open.png";
    };

    spokenWords.onend = function() {
      face.src = "assets/images/smiling.png";
    };

    window.speechSynthesis.speak(spokenWords);
  });

}