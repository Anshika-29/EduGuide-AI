import "./NotesModal.css";
function NotesModal({lecture,setSelectedLecture}){
    return(
        <div className="modal-overlay">
            <div className="notes-modal">
                <h2>Lecture Notes</h2>
                <h3>{lecture.topic}</h3>
                <div className="notes-content">
                    <p>
                        Normalization is an important process in database design that helps improve the database's efficiency, consistency, and accuracy. It makes it easier to manage and maintain the data and ensures that the database is adaptable to changing business needs.

It is the process of organizing the attributes of the database to reduce or eliminate data redundancy (having the same data in different places), which otherwise unnecessarily increases the size of the database.
Data redundancy leads to inconsistency problems during insert, delete, and update operations, making data management difficult.
Normalization involves splitting a table into multiple tables, which must be linked each time a query requires data from the split tables.
                    </p>
                </div>
                <button onClick={()=>setSelectedLecture(null)}>Close</button>

            </div>
        </div>
    );
}
export default NotesModal;