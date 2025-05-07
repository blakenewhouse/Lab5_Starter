// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  console.log("hello");
  // voice selection/generation
  const speech = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const face = document.querySelector("img");
  let voices = speech.getVoices();

  function getDifferentVoices() {
    voiceSelect.innerHTML = '';
    voices = speech.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.value = `${voices[i].name}`;
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-name", voices[i].name); 
      option.setAttribute("data-lang", voices[i].lang);
      voiceSelect.appendChild(option);
    }
  }

  getDifferentVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = getDifferentVoices;
  }

  // press to talk
  const talkButton = document.querySelector("button");
  const text = document.getElementById("text-to-speak");

  talkButton.addEventListener("click", function() {
    let spokenWords = new SpeechSynthesisUtterance(text.value);
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const voices = speech.getVoices();
    spokenWords.voice = voices.find(voice => voice.name === selectedVoice);

    speech.speak(spokenWords);

    // change face while speaking
    face.src = "assets/images/smiling-open.png";

    spokenWords.addEventListener("end", function() {
      face.src = "assets/images/smiling.png";
    }); 

  });

}