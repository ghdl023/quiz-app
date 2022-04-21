import React, {useState} from 'react';
import '../style/Center.css';
import LoadingBox from "./QuizComponents/LoadingBox";
import QuizBox from "./QuizComponents/QuizBox";
import jsonData from "../list";

function shuffle(array) { array.sort(() => Math.random() - 0.5); return array;}

const Center = () => {
    // useState Hooks
    // const [quizList, setQuizList] = useState([]);
    const quizList= shuffle(jsonData);
    const [showQuiz, setShowQuiz] = useState(false);
    return (
        <div>
            { !showQuiz ?
                <LoadingBox setShowQuiz={setShowQuiz} len={quizList.length}/> :
                <QuizBox setShowQuiz={setShowQuiz} quizList={quizList}/>
            }
        </div>
    );
}

export default Center;