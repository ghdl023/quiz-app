import React from 'react';
import '../../style/QuizComptStyle/LoadingBox.css';

const LoadingBox = ({setShowQuiz}) => {
    return (
        <div>
            <h2>퀴즈를 시작하시겠습니까?</h2>
            <button onClick={()=>setShowQuiz(true)}>START</button>
        </div>
    );
};

export default LoadingBox;