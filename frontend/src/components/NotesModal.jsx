import "./NotesModal.css";
function NotesModal({lecture,setSelectedLecture}){
    return(
        <div className="modal-overlay">
            <div className="notes-modal">
                <h2>Lecture Notes</h2>
                <h3>{lecture.topic}</h3>
                <div className="notes-content">
                   <pre>{lecture.notes}</pre>
                </div>
                <button onClick={()=>setSelectedLecture(null)}>Close</button>

            </div>
        </div>
    );
}
export default NotesModal;