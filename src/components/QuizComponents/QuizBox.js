import {useEffect, useRef, useState} from 'react';
import anime from 'animejs';
import TimerBox from "../TimerComponents/TimerBox";
import QuizTextBox from "./QuizTextBox";
import StarBox from '../StarComponents/StarBox';
import '../../style/QuizComptStyle/QuizBox.css';
import StarIcon from "../StarComponents/StarIcon";


const QuizBox = ({ setShowQuiz, quizList }) => {
    const MAX_COUNT = 13;
    // let voices = [];

    // useState Hooks
    const [seconds, setSeconds] = useState(0);
    // const [listenQuestion, setListenQuestion] = useState(false);

    const currentIndex = useRef(0);
    const timerId = useRef();

    const next = () => {
        // console.log('next!');
        stopTimer();
        setSeconds(0);
        // setCurrentIndex(prevState => prevState +1);
        currentIndex.current++;
        // console.log(currentIndex.current);
        if(currentIndex.current < quizList.length) {
            startTimer();
        } else {
            resetTimer();
        }
    }

    const startTimer = () => {
        // console.log("start!");
        const textWrapper = document.querySelector('.ml2');
        if(textWrapper) {
            // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            textWrapper.innerHTML = quizList[currentIndex.current].question;
        }

        timerId.current = setInterval(function(){
            // setSeconds(prevState => prevState +1);
            setSeconds(prevState => prevState +1);
            // console.log(seconds);
        }, 1000);
    }

    const stopTimer = () => {
        // console.log('stop!');
        clearInterval(timerId.current);
        timerId.current = 0;
    }

    const resetTimer = () => {
        stopTimer();
        currentIndex.current = 0;
        setShowQuiz(false);
        // startTimer();
    }

    const init = () => {
        if(quizList.length > 0) {
            startTimer();
        } else {
            setShowQuiz(false);
        }
    }

    useEffect(()=>{
        init();
    },[]);

    useEffect(() => {
        // console.log('Seconds: ', seconds);
        if(seconds >= MAX_COUNT) {
            const textWrapper = document.querySelector('.ml2');
            if(textWrapper) {
                textWrapper.innerHTML = quizList[currentIndex.current+1].question;
            }
            next();
        } else if(seconds === MAX_COUNT-3) {
            const textWrapper = document.querySelector('.ml2');
            if(textWrapper) {
                textWrapper.innerHTML = quizList[currentIndex.current].answer;
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
                anime.timeline({loop: false})
                    .add({
                        targets: '.ml2 .letter',
                        scale: [4,1],
                        opacity: [0,1],
                        translateZ: 0,
                        easing: "easeOutExpo",
                        duration: 950,
                        delay: (el, i) => 70*i
                    });
            }
        }
    }, [seconds])

    // tts

    // useEffect(() => {
    //     voices = window.speechSynthesis.getVoices();
    //     console.log(voices);
    // });

    // const toggleListen = () => {
    //     setListenQuestion(!listenQuestion);
    // }
    //
    // const speech = () => {
    //     if(!window.speechSynthesis) {
    //         alert("음성 재생을 지원하지 않는 브라우저입니다. 크롬, 파이어폭스 등의 최신 브라우저를 이용하세요");
    //         return;
    //     }
    //
    //     voices = window.speechSynthesis.getVoices();
    //     console.log(voices);
    //
    //     let text = quizList[currentIndex.current].question;
    //     console.log('text:' + text);
    //     if(!text) {
    //         console.log("text is empty..");
    //         return;
    //     }
    //
    //     const lang = 'ko-KR';
    //     const utterThis = new SpeechSynthesisUtterance(text);
    //
    //     utterThis.onend = function (event) {
    //         console.log('end');
    //     };
    //
    //     utterThis.onerror = function(event) {
    //         console.log('error', event);
    //     };
    //
    //     var voiceFound = false;
    //
    //     for(var i = 0; i < voices.length ; i++) {
    //         if(voices[i].lang.indexOf(lang) >= 0 || voices[i].lang.indexOf(lang.replace('-', '_')) >= 0) {
    //             utterThis.voice = voices[i];
    //             voiceFound = true;
    //         }
    //     }
    //     if(!voiceFound) {
    //         console.log('voice not found');
    //         return;
    //     }
    //     utterThis.lang = lang;
    //     utterThis.pitch = 1;
    //     utterThis.rate = 0.8; //속도
    //
    //     window.speechSynthesis.speak(utterThis);
    // }

    return (
        <div className="quiz-box">
            {/*<button onClick={()=>toggleListen()}>Sound { listenQuestion ? 'On' : 'Off' }</button>*/}
            <StarBox>
                {[...Array(quizList[currentIndex.current].level)].map((x, i) =>
                    <StarIcon key={i}/>
                )}
            </StarBox>
            <span>{ seconds >= 0 && seconds < MAX_COUNT-3 ? "문제" : "정답" }</span>
            <QuizTextBox/>
            { seconds >= (MAX_COUNT-8) && seconds < (MAX_COUNT-3) && <TimerBox seconds_text={(MAX_COUNT-3) - seconds}/>}
        </div>
    );
};

export default QuizBox;