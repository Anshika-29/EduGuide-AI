function LectureCard({title,subject,branch,year,channel,rating,views,link}){
    return(
        <div className="card">
            <h2>{title}</h2>
            <p><strong>Subject:</strong>{subject}</p>
            <p><strong>Branch:</strong>{branch}</p>
            <p><strong>Year:</strong>{year}</p>
            <p><strong>Channel:</strong> {channel}</p> 
            <p><strong>Rating:</strong>⭐{rating}</p>
            <p><strong>Views:</strong>👁️{views}</p>
            <button onClick={()=>window.open(link,"_blank")}>Watch Lecture</button>
        </div>
    );
}
export default LectureCard;