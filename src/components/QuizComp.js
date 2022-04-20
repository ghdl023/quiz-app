import React, {useEffect, useRef, useState} from 'react';
import '../style/QuizComp.css';

import jsonData from "../list";
// console.log(jsonData);

function QuizComp() {
    const quizList = jsonData;
    const MAX_COUNT = 13;
    // let voices = [];

    // useState Hooks
    const [seconds, setSeconds] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
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
        setShowQuiz(true);
        timerId.current = setInterval(() => {
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

    useEffect(() => {
        // console.log('Seconds: ', seconds);
        if(seconds >= MAX_COUNT) {
            next();
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
        <div className="question--inner">
            { !showQuiz ? (
                <div className="question--item intro">
                    <h2>퀴즈를 시작하시겠습니까?</h2>
                    <button className="question--btn" onClick={()=>startTimer()}>START</button>
                </div>
            ) : (
                <div className="question--item">
                    {/*<button onClick={()=>toggleListen()}>Sound { listenQuestion ? 'On' : 'Off' }</button>*/}
                    { seconds >= 0 && seconds < MAX_COUNT-3 ?
                        (
                            <div className="question--title">
                                <p>문제</p>
                                { quizList[currentIndex.current].question }
                                <div className="question--seconds">
                                    { (MAX_COUNT-3) - seconds }
                                </div>
                            </div>
                        ) : (
                            <div className="answer--title">
                                <p>정답</p>
                                { quizList[currentIndex.current].answer }
                            </div>
                        )
                    }
                </div>
            ) }
        </div>
    );
}

export default QuizComp;