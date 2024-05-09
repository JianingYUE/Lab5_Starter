// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('img[src*="smiling.png"]'); 
  
  let voices = [];
  
  function populateVoiceList() {
    voices = synth.getVoices();
  
    voiceSelect.innerHTML = ''; 
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Select Voice:';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    voiceSelect.appendChild(defaultOption);
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
  speakButton.addEventListener('click', (event) => {
    event.preventDefault();
  
    if (textArea.value !== '') {
      const utterThis = new SpeechSynthesisUtterance(textArea.value);
      const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
  
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedVoiceName) {
          utterThis.voice = voices[i];
        }
      }
  
      utterThis.onstart = () => {
        faceImage.src = 'assets/images/smiling-open.png'; 
      };
  
      utterThis.onend = () => {
        faceImage.src = 'assets/images/smiling.png'; 
      };
  
      synth.speak(utterThis);
    }
  });
}
