import Navbar from "../components/Navbar";
import LectureCard from "../components/LectureCard";
import LectureModal from "../components/LectureModal";
import NotesModal from "../components/NotesModal";
import SummaryModal from "../components/SummaryModal";
import QuizModal from "../components/QuizModal";

function LectureResults({
    filteredLectures,
    favoriteLectures,
    addToFavorites,
    removeFromFavorites,
    setSelectedLecture,
    setSelectedQuizLecture,
    setSelectedSummaryLecture,
    setSelectedNotesLecture,
    selectedLecture,
    selectedNotesLecture,
    selectedSummaryLecture,
    selectedQuizLecture
}) {
return (
<> <Navbar />


        <main className="lecture-results-page">
            <div className="results-heading">
    <h1>Your Lecture Results</h1>
    <p>
        {filteredLectures.length} lectures found for your search.
    </p>
</div>

{filteredLectures.length === 0 ? (
    <p className="no-results">
        No lectures match your filters. Try changing your search criteria.
    </p>
) : (
    <div className="lecture-grid">
        {filteredLectures.map((lecture) => (
            <LectureCard
                key={lecture._id}
                lecture={lecture}
                setSelectedLecture={setSelectedLecture}
                setSelectedNotesLecture={setSelectedNotesLecture}
                setSelectedSummaryLecture={setSelectedSummaryLecture}
                setSelectedQuizLecture={setSelectedQuizLecture}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                isFavorite={favoriteLectures.includes(lecture._id)}
            />
        ))}
    </div>
)}
       
        {selectedQuizLecture && (
    <QuizModal
        lecture={selectedQuizLecture}
        setSelectedQuizLecture={setSelectedQuizLecture}
    />
)}
        {selectedSummaryLecture && (
    <SummaryModal
        lecture={selectedSummaryLecture}
        setSelectedSummaryLecture={setSelectedSummaryLecture}
    />
)}
        {selectedNotesLecture && (
    <NotesModal
        lecture={selectedNotesLecture}
        setSelectedLecture={setSelectedNotesLecture}
    />
)}
       {selectedLecture && (
    <LectureModal
        lecture={selectedLecture}
        setSelectedLecture={setSelectedLecture}
    />
)}
</main>
    </>
);


}

export default LectureResults;
