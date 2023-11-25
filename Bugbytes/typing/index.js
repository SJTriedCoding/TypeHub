//  (actualWords / totalTimeTaken) * 60;

const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');

let startTime, endTime, totalTimeTaken;


const sentences = ['You inspire me to live life to the fullest, and I look forward to many new adventures together. I’ve never loved anyone like this before, and I feel so lucky to have you in my life.',
    'You always find a way to make my day brighter. I already can’t imagine life without you.',
    'You’re the reason for my happiness, and I look forward to each new day because I get to spend it with you and the beautiful family we’ve created. You’re the love of my life, and I wouldn’t want to be on this journey with anyone else. ']



const calculateTypingSpeed = (time_taken) => {
    let  totalWords = typing_ground.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if(actualWords !== 0) {
        let typing_speed  =  (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you wrote ${actualWords} words & time taken ${time_taken} sec`;
    }else{
        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
    }
}


const endTypingTest = () => {
    btn.innerText = "Start";

    let date = new Date();
    endTime = date.getTime();

    totalTimeTaken = (endTime -startTime) / 1000;

    // console.log(totalTimeTaken);

    calculateTypingSpeed(totalTimeTaken);

    show_sentence.innerHTML = "";
    typing_ground.value = "";
}



const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    // console.log(randomNumber);
    show_sentence.innerHTML = sentences[randomNumber];

    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "Done";
}




// step 2
btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;

        case "done":
            typing_ground.setAttribute('disabled' , 'true');
            endTypingTest();
            break;
    }
})
