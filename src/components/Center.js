import React, {useState} from 'react';
import '../style/Center.css';
import LoadingBox from "./QuizComponents/LoadingBox";
import QuizBox from "./QuizComponents/QuizBox";
import jsonData from "../list";
import ContainerStyles from "./CommonStyles/ContainerStyles"
import styled from "styled-components"

const DivStyles = styled.div`
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

const InfoDiv = styled.div`
    color:rgba(255,255,255, 0.65);
    font-size:12px;
    position: absolute;
    bottom:15px;
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
                    <InfoDiv>
                        <span>본 사이트에서 사용중인 일부 데이터는 '하루1분시사상식' (<a href="http://115.90.24.101/m/index" target="_blank">http://115.90.24.101/m/index</a>)에서 가져와 활용하고 있습니다. 문제시 gwee1216@naver.com 연락을 주신다면 해당 데이터를 사용하지 않겠습니다.</span>
                    </InfoDiv>
                </DivStyles>
            </div>
        </ContainerStyles>
    );
}

export default Center;