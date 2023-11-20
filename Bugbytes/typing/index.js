//  (actualWords / totalTimeTaken) * 60;

const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');
const show-time = document.querySelector(slectors: '#showTime');

let startTime, endTime, totalTimeTaken; sentence_to_write;


const sentences = ['You inspire me to live life to the fullest, and I look forward to many new adventures together. I’ve never loved anyone like this before, and I feel so lucky to have you in my life.',
    'You always find a way to make my day brighter. I already can’t imagine life without you.',
    'You’re the reason for my happiness, and I look forward to each new day because I get to spend it with you and the beautiful family we’ve created. You’re the love of my life, and I wouldn’t want to be on this journey with anyone else. ']


//step 7
//1 usage new*
const errorChecking = (words) => {
    console.log(words)

    let num = 0;
    sentence_to_write = show_sentence.innerHTML;
    sentence_to_write = sentence_to_write.trim().split(separator: " ");

//conole.log)sentence_to_write);
    for(let i=0; i<words.length; i++){
        if(words[i] === sentence_to_write[i]){
            num++;
        }
    }
 return num;
}



const calculateTypingSpeed = (time_taken) => {
    let  totalWords = typing_ground.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    actualWords = errorChecking(actualWords);

    if(actualWords !== 0) {
        let typing_speed  =  (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you wrote ${actualWords} correct words out of ${sentence_to_write.length} & time taken ${time_taken} sec`;
    }else{
        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
    }
}


const endTypingTest = () => {
    btn.innerText = "Start";
    
    endTypingTest();

    let date = new Date();
    endTime = date.getTime();

    totalTimeTaken = (endTime -startTime) / 1000;

    // console.log(totalTimeTaken);

    calculateTypingSpeed(totalTimeTaken);

    show_sentence.innerHTML = "";
    typing_ground.value = "";
}

//step6
let intervalID, elapsedTime = 0;

1 usage new*
const showTimer = () => {
    if(btn.innerText === "Done"){
        let intervalID = setInterval(handler:() => {
            elapsedTime++;
            show_time.innerHTML = elapsedTime;
        }, timeout:1000)

    }else if(btn.innerText === "Start"){
        elapsedTime = 0;
        clearInterval(intervalID);
        show_time.innerHTML = "";
    }
}


const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    // console.log(randomNumber);
    show_sentence.innerHTML = sentences[randomNumber];

    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "Done";

    showTimer();

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
