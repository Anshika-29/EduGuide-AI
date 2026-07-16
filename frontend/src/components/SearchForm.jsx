import subjectsByBranch from"../data/subjects";
function SearchForm({searchTopic, setSearchTopic,searchBranch,setSearchBranch,searchYear,setSearchYear,searchSubject,setSearchSubject,searchLearningGoal,setSearchLearningGoal,searchDifficulty,setSearchDifficulty,searchLanguage,setSearchLanguage}){
    const availableSubjects=subjectsByBranch[searchBranch]||[];
    const clearFilters =() =>{
        setSearchTopic("");
        setSearchBranch("");
        setSearchYear("");
        setSearchSubject("");
        setSearchLearningGoal("");
        setSearchDifficulty("");
        setSearchLanguage("");
    }
    return(
        <div className="search-box">
            <input type="text"
            placeholder="Search any B.Tech topic"
            value={searchTopic}
            onChange={(e) => setSearchTopic(e.target.value)}
            />
            <select value={searchBranch}
            onChange={(e) => setSearchBranch(e.target.value)}>
                <option value="">Select Branch</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="Mechanical">Mechanical</option>
            </select>
            <select value={searchYear}
            onChange={(e) => setSearchYear(e.target.value)}>
                <option value="">Select Year</option>
                <option value="First Year">First Year</option>
                <option value="Second Year">Second Year</option>
                <option value="Third Year">Third Year</option>
                <option value="Fourth Year">Fourth Year </option>
                
            </select>
      <select
    value={searchSubject}
    onChange={(e) => setSearchSubject(e.target.value)}
>
    <option value="">Select Subjects</option>

    {availableSubjects.map((sub) => {
        return (
            <option key={sub} value={sub}>
                {sub}
            </option>
        );
    })}
</select>
     
    
           
            <select value={searchLearningGoal}
            onChange={(e)=>setSearchLearningGoal(e.target.value)}>
                <option value="">Learning Goal</option>
                <option value="Detailed">Detailed</option>
                <option value="Revision">Revision</option>
            </select>
            <select value={searchDifficulty}
            onChange={(e)=>setSearchDifficulty(e.target.value)}>
                <option value="">Difficulty</option>
                <option value="Basic">Basic</option>
                <option   value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
            </select>
            <select value={searchLanguage}
            onChange={(e)=> setSearchLanguage(e.target.value)}>
                <option value="">Language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
            </select>
            <div className="button-group">
            <button className="clear-btn" onClick={clearFilters}>
                Clear Filters
            </button>
            </div>
        </div>
    );
}
export default SearchForm;