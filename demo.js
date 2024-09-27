let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect=document.querySelector("select");

//get voices onVoicesChanged [like onload page]
window.speechSynthesis.onvoiceschanged = ()=>{  
    voices = window.speechSynthesis.getVoices(); 
    // console.log(voices[0])

    // choose first voice as default voice
    speech.voice = voices[0]; 

    // display voices on select options
    voices.forEach((voice, i) =>(voiceSelect.options[i] = new Option(voice.name , i)));
};

voiceSelect.addEventListener("change", ()=>{
    // console.log(voiceSelect.value)
    speech.voice = voices[voiceSelect.value];
});


document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});