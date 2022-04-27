import React, {useState} from 'react';
import '../style/Center.css';
import LoadingBox from "./QuizComponents/LoadingBox";
import QuizBox from "./QuizComponents/QuizBox";
import jsonData from "../list";
import ContainerStyles from "./CommonStyles/ContainerStyles"
import styled from "styled-components"

const DivStyles = styled.div`
    position: relative;
    color: #fff;
    padding: 14% 0 10%;
    margin: auto;
    
    & > span {
        position: absolute;
        left: 50%;
        top: -50px;
        width:160px;
        padding: 60px 0 20px;
        border-radius: 50%;
        background: #fff;
        -o-transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        font-size: 1.2rem;
        font-weight: bold;
        color: cornflowerblue;
        text-align: center;
    }
`;

function shuffle(array) { array.sort(() => Math.random() - 0.5); return array;}

const Center = () => {
    // useState Hooks
    // const [quizList, setQuizList] = useState([]);
    const quizList= shuffle(jsonData);
    const [showQuiz, setShowQuiz] = useState(false);
    return (
        <ContainerStyles background="#6495ED">
            <div className="container-inner">
                <DivStyles>
                    <span>상식퀴즈</span>
                    <>
                        { !showQuiz ?
                            <LoadingBox setShowQuiz={setShowQuiz} len={quizList.length}/> :
                            <QuizBox setShowQuiz={setShowQuiz} quizList={quizList}/>
                        }
                    </>
                </DivStyles>
            </div>
        </ContainerStyles>
    );
}

export default Center;