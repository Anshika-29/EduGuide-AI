import "./SummaryModal.css";
function SummaryModal({lecture,setSelectedSummaryLecture}){
    return(
        <div className="modal-overlay">
            <div className="summary-modal">
                <h2>Lecture Summary</h2>
                <h3>{lecture.topic}</h3>
                <div className="summary-content">
                    <pre>{lecture.summary}</pre>
                </div>
                <button onClick={()=>setSelectedSummaryLecture(null)}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
export default SummaryModal;