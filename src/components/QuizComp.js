import React, {useState} from 'react';
import '../style/QuizComp.css';
import LoadingBox from "./QuizComponents/LoadingBox";
import QuizBox from "./QuizComponents/QuizBox";
import jsonData from "../list";

function shuffle(array) { array.sort(() => Math.random() - 0.5); return array;}

const QuizComp = () => {
    // useState Hooks
    // const [quizList, setQuizList] = useState([]);
    const quizList= shuffle(jsonData);
    const [showQuiz, setShowQuiz] = useState(false);
    return (
        <div className="question--inner">
            { !showQuiz ?
                <LoadingBox setShowQuiz={setShowQuiz} len={quizList.length}/> :
                <QuizBox setShowQuiz={setShowQuiz} quizList={quizList}/>
            }
        </div>
    );
}

export default QuizComp;