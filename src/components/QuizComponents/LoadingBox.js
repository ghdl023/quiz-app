import React from 'react';
import '../../style/QuizComptStyle/LoadingBox.css';
import ButtonStyles from '../CommonStyles/ButtonStyles'

const LoadingBox = ({setShowQuiz}) => {
    return (
        <div className="loading-box">
            <h2>퀴즈를 시작하시겠습니까?</h2>
            <ButtonStyles onClick={()=>setShowQuiz(true)}>START</ButtonStyles>
        </div>
    );
};

export default LoadingBox;