import React, {useEffect, useRef, useState} from 'react';
import '../style/QuizComp.css';

import jsonData from "../list";
console.log(jsonData);

function QuizComp() {
    const quizList = jsonData;
    const MAX_COUNT = 13;

    // useState Hooks
    const [seconds, setSeconds] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);

    const currentIndex = useRef(0);
    const timerId = useRef();

    const next = () => {
        console.log('next!');
        stopTimer();
        setSeconds(0);
        // setCurrentIndex(prevState => prevState +1);
        currentIndex.current++;
        console.log(currentIndex.current);
        if(currentIndex.current < quizList.length) {
            startTimer();
        } else {
            resetTimer();
        }
    }

    const startTimer = () => {
        console.log("start!");
        setShowQuiz(true);
        timerId.current = setInterval(() => {
            setSeconds(prevState => prevState +1);
            // console.log(seconds);
        }, 1000);
    }

    const stopTimer = () => {
        console.log('stop!');
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
        console.log('Seconds: ', seconds);
        if(seconds >= MAX_COUNT) {
            next();
        }
    }, [seconds])

    return (
        <>
            <h1>Quiz Component</h1>
            { !showQuiz ? (
              <>
                  <button onClick={()=>startTimer()}>Start</button>
              </>
            ) : (
                <>
                    { seconds >= 0 && seconds < MAX_COUNT-3 ?
                        (
                            <div className="question--title">
                                Q. { quizList[currentIndex.current].question }
                                <div className="question--seconds">
                                    { (MAX_COUNT-3) - seconds }
                                </div>
                            </div>
                        ) : (
                            <div className="answer--title">
                                정답 : { quizList[currentIndex.current].answer }
                            </div>
                        )
                    }
                </>
            ) }
        </>
    );
}

export default QuizComp;