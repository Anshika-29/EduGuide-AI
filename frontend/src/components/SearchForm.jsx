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
    };
      return (
        <section className="search-section">

            <div className="search-header">
                <h2>🔍 Find Your Lecture</h2>

                <p>
                    Search and filter lectures based on your learning needs.
                </p>
            </div>

            <div className="topic-search">

                <span className="search-icon">🔍</span>

                <input
                    type="text"
                    placeholder="Search any B.Tech topic..."
                    value={searchTopic}
                    onChange={(e) => setSearchTopic(e.target.value)}
                />

            </div>

            <div className="filter-group">

                <h3>🎓 Academic Filters</h3>

                <div className="filter-grid">

                    <select
                        value={searchBranch}
                        onChange={(e) => setSearchBranch(e.target.value)}
                    >
                        <option value="">Select Branch</option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="Mechanical">Mechanical</option>
                    </select>


                    <select
                        value={searchYear}
                        onChange={(e) => setSearchYear(e.target.value)}
                    >
                        <option value="">Select Year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                    </select>


                    <select
                        value={searchSubject}
                        onChange={(e) => setSearchSubject(e.target.value)}
                    >
                        <option value="">Select Subject</option>

                        {availableSubjects.map((sub) => (
                            <option key={sub} value={sub}>
                                {sub}
                            </option>
                        ))}
                    </select>

                </div>

            </div>


            <div className="filter-group">

                <h3>🎯 Learning Preferences</h3>

                <div className="filter-grid">

                    <select
                        value={searchLearningGoal}
                        onChange={(e) =>
                            setSearchLearningGoal(e.target.value)
                        }
                    >
                        <option value="">Learning Goal</option>
                        <option value="Detailed Learning">
                            Detailed Learning
                        </option>
                        <option value="Quick Revision">
                            Quick Revision
                        </option>
                        <option value="GATE Preparation">
                            GATE Preparation
                        </option>
                    </select>


                    <select
                        value={searchDifficulty}
                        onChange={(e) =>
                            setSearchDifficulty(e.target.value)
                        }
                    >
                        <option value="">Difficulty</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>


                    <select
                        value={searchLanguage}
                        onChange={(e) =>
                            setSearchLanguage(e.target.value)
                        }
                    >
                        <option value="">Language</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                    </select>

                </div>

            </div>

            <div className="filter-actions">

                <button
                    className="clear-btn"
                    onClick={clearFilters}
                >
                    ↻ Clear Filters
                </button>

            </div>

        </section>
    );
}

export default SearchForm;