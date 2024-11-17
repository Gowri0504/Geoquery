const voiceBtn = document.getElementById('voiceBtn');
const resultDiv = document.getElementById('result');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

voiceBtn.addEventListener('click', () => {
    recognition.start();
});

recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript.toLowerCase().trim();
    console.log('Recognized speech:', speechResult);
    document.getElementById('disease').value = speechResult; // Set the input field

    
    getSuggestions(); 
};

recognition.onerror = (event) => {
    console.error('Speech recognition error detected: ' + event.error);
    resultDiv.innerHTML = "<strong>Sorry, I didn't catch that. Please try again.</strong>";
};
