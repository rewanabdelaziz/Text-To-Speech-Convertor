let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect=document.querySelector("select");

async function getVoicesAsync(){
    return new Promise((resolve) =>{
        voices = window.speechSynthesis.getVoices(); 
        if(voices.length > 0){
            resolve(voices)
        } else{
            //get voices onVoicesChanged [like onload page]
            window.speechSynthesis.onvoiceschanged = ()=> {
                voices = window.speechSynthesis.getVoices(); 
                resolve(voices);
            };
        }
    });
}

async function loadVoices(){
    voices = await getVoicesAsync()
    // choose first voice as default voice
    speech.voice = voices[0]; 
    // display voices on select options
    voices.forEach((voice, i) =>{
        voiceSelect.options[i] = new Option(voice.name , i)
    });
    
}
loadVoices() 

voiceSelect.addEventListener("change", ()=>{
    // console.log(voiceSelect.value)
    speech.voice = voices[voiceSelect.value];
});


document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});