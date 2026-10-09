import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";

function LectureSearch({
searchTopic,
setSearchTopic,
searchBranch,
setSearchBranch,
searchYear,
setSearchYear,
searchSubject,
setSearchSubject,
searchLearningGoal,
setSearchLearningGoal,
searchDifficulty,
setSearchDifficulty,
searchLanguage,
setSearchLanguage,
onSearch
}) {
const navigate = useNavigate();


function handleSearch() {
    onSearch();
    navigate("/lectures");
}

return (
    <>
        <Navbar />

        <main className="lecture-search-page">
            <section className="search-page-heading">
                <h1>What are you learning today?</h1>

                <p>
                    Find lectures according to your branch,
                    year, subject and learning goal.
                </p>
            </section>

            <SearchForm
                searchTopic={searchTopic}
                setSearchTopic={setSearchTopic}
                searchBranch={searchBranch}
                setSearchBranch={setSearchBranch}
                searchYear={searchYear}
                setSearchYear={setSearchYear}
                searchSubject={searchSubject}
                setSearchSubject={setSearchSubject}
                searchLearningGoal={searchLearningGoal}
                setSearchLearningGoal={setSearchLearningGoal}
                searchDifficulty={searchDifficulty}
                setSearchDifficulty={setSearchDifficulty}
                searchLanguage={searchLanguage}
                setSearchLanguage={setSearchLanguage}
                onSearch={handleSearch}
            />
        </main>
    </>
);


}

export default LectureSearch;
