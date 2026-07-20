import "./QuizModal.css";
function QuizModal({lecture,setSelectedQuizLecture}){
    return(
        <div className="modal-overlay">
            <div className="quiz-modal">
                <h2>Lecture Quiz</h2>
                <h3>{lecture.topic}</h3>
                <div className="quiz-content">
                    {
                        lecture.quiz.map((question,index)=>(
                            <div key={index} className="question-card">
                                <h4>
                                    Q{index+1}. {question.question}
                                    </h4>
                            {
                                question.options.map((option,optionIndex)=>(
                                    <div key={optionIndex}>
                                        <input 
                                        type="radio"
                                        name={`question-${index}`}
                                        id={`q${index}-option${optionIndex}`}
                                        />
                                        <label htmlFor={`q${index}-option${optionIndex}`}
                                        >{option}</label>
                                        </div>
                                ))
                            }
                            </div>
                        ))
                    }
                </div>
                <button onClick={()=>setSelectedQuizLecture(null)}>
                    Close
                </button>
            </div>
        </div>
    );

}
export default QuizModal;