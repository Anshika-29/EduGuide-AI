import NotesModal from "./components/NotesModal";
import"./App.css";
import {useState,useEffect,useRef} from"react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchForm from "./components/SearchForm";
import LectureModal from"./components/LectureModal";
import LectureCard from"./components/LectureCard";
import lectures from "./data/lectures";
function App(){
  const [searchTopic,setSearchTopic]=useState("");
  const[searchBranch,setSearchBranch]=useState("");
  const[searchYear,setSearchYear]=useState("");
  const[searchSubject,setSearchSubject]=useState("");
  const[searchLearningGoal,setSearchLearningGoal]=useState("");
  const[searchDifficulty,setSearchDifficulty]=useState("");
  const[searchLanguage,setSearchLanguage]=useState("");
  const[selectedLecture,setSelectedLecture]=useState(null);
  const[selectedNotesLecture,setSelectedNotesLecture]=useState(null);
  const[favoriteLectures,setFavoriteLectures]=useState([]);
  const firstFavoriteRender=useRef(true);
  const firstFilterRender=useRef(true);
  const filters={
    topic:searchTopic,
    branch:searchBranch,
    year:searchYear,
    subject:searchSubject,
    learningGoal:searchLearningGoal,
    difficulty:searchDifficulty,
    language:searchLanguage,
  };
  useEffect(()=>{
    const savedFavorites=localStorage.getItem("favoriteLectures");
    if(savedFavorites){
      const parsedFavorites=JSON.parse(savedFavorites);
      setFavoriteLectures(parsedFavorites);
    }
  },[]);
  useEffect(()=>{
    if(firstFavoriteRender.current){
      firstFavoriteRender.current=false;
      return;
    }
    localStorage.setItem(
      "favoriteLectures",
      JSON.stringify(favoriteLectures)
    );
  },[favoriteLectures]);
  useEffect(()=>{
      const savedFilters=localStorage.getItem("searchFilters");
      if(savedFilters){
        const parsedFilters=JSON.parse(savedFilters);
        setSearchTopic(parsedFilters.topic);
        setSearchBranch(parsedFilters.branch);
        setSearchYear(parsedFilters.year);
        setSearchSubject(parsedFilters.subject);
        setSearchLearningGoal(parsedFilters.learningGoal);
        setSearchDifficulty(parsedFilters.difficulty);
        setSearchLanguage(parsedFilters.language);
      }
    },[]);
  
  useEffect(()=>{
    if(firstFilterRender.current){
      firstFilterRender.current=false;
      return;
    }
    localStorage.setItem(
      "searchFilters",
      JSON.stringify(filters)
    );
    },[filters]);
    
  function addToFavorites(lecture){
    const alreadyFavorite=favoriteLectures.some((favLecture=>favLecture.id===lecture.id));
    if(alreadyFavorite){
      return;
    }
    setFavoriteLectures([
      ...favoriteLectures,
      lecture
    ]);
  }
  function removeFromFavorites(id){
    const updatedFavorites=favoriteLectures.filter((lecture)=>lecture.id!==id);
    setFavoriteLectures(updatedFavorites);
  }
  function clearFilters(){
    setSearchTopic("");
    setSearchBranch("");
    setSearchYear("");
    setSearchSubject("");
    setSearchLearningGoal("");
    setSearchDifficulty("");
    setSearchLanguage("");
  }
  const filteredLectures=lectures.filter((lecture) =>
  {
    const topicMatch=
    lecture.topic
      .toLowerCase()
      .includes(searchTopic.toLowerCase());
      const branchMatch=
      searchBranch==="" ||
      lecture.branch=== searchBranch;
      const yearMatch=
      searchYear===""||
      lecture.year===searchYear;
      const subjectMatch=
      searchSubject ===""||
      lecture.subject === searchSubject;
      const learningGoalMatch=
      searchLearningGoal ===""||
      lecture.learningGoal === searchLearningGoal;
      const difficultyMatch=
      searchDifficulty === ""||
      lecture.difficulty=== searchDifficulty;
      const languageMatch=
      searchLanguage ==="" ||
      lecture.language===searchLanguage;
      return topicMatch && branchMatch&&yearMatch&&subjectMatch&&learningGoalMatch&&difficultyMatch&&languageMatch;
  }
  );
  const totalRating=filteredLectures.reduce(
    (sum,lecture)=>sum+lecture.rating,
    0
  );
  const averageRating= filteredLectures.length===0
  ? 0
  :totalRating/filteredLectures.length;
  const formattedAverage=averageRating.toFixed(1);
  const totalViews=filteredLectures.reduce((sum,lecture)=>{
    let views=0;
    if(lecture.views.endsWith("M")){
      views=parseFloat(lecture.views)*1000000;
    }else if(lecture.views.endsWith("K")){
      views=parseFloat(lecture.views)*1000;
    }
    return sum+views;
  },0);
  const formattedViews=(totalViews/1000000).toFixed(1)+"M";
  return(
    <div>
      <Navbar />
      <Hero />
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
      />
      <div className="results">
        <h3>
          Showing {filteredLectures.length} Lecture
          {filteredLectures.length !==1 ? "s":""}
        </h3>
      </div>
      <div className="stats-dashboard">
        <div className="stat-card">
          <h3>Total Lectures</h3>
          <p>{filteredLectures.length}</p>
        </div>
        <div className="stat-card">
          <h3>Average Rating</h3>
          <p>{formattedAverage}</p>
        </div>
        <div className="stat-card">
          <h3>Total Views</h3>
          <p>{formattedViews}</p>
        </div>
        <div className="stat-card">
          <h3>Favorite Lectures</h3>
          <p>{favoriteLectures.length}</p>
        </div>
      </div>
      <div className="active-filters">
        {
          !searchTopic &&
          !searchBranch &&
          !searchYear &&
          !searchSubject &&
          !searchLearningGoal&&
          !searchDifficulty &&
          !searchLanguage&&(<p className="no-filter">
            No filters applied .Showing all lectures.
          </p>)
        }
      {searchTopic &&(
          <p><strong>Topic:</strong> {searchTopic}</p>)}
          {searchBranch&&(<p><strong>Branch:</strong> {searchBranch}</p>)}
          {searchYear &&(<p><strong>Year:</strong> {searchYear}</p>)}
          {searchSubject &&(
            <p><strong>Subject:</strong> {searchSubject}</p>
          )}
          {searchDifficulty &&(<p><strong>Difficulty:</strong> {searchDifficulty}</p>)}
          {searchLearningGoal&&(<p><strong>Learning Goal:</strong> {searchLearningGoal}</p>)}
          {searchLanguage &&(<p><strong>Language:</strong> {searchLanguage}</p>)}
          
          </div>
      
      {
        filteredLectures.length> 0 ?(
          <div className="lecture-container">
      {filteredLectures.map((lecture,index) => 
      (<LectureCard
      key={lecture.id}
       lecture={lecture}
        setSelectedLecture={setSelectedLecture}
        setSelectedNotesLecture={setSelectedNotesLecture}
        addToFavorites={addToFavorites}
        />
      ))}
      {
        favoriteLectures.length===0?(
          <div className="empty-favorites">
            <h2> No Favorite Lectures Yet</h2>
            <p>Start adding lectures to build your personal learning list.</p>
            </div>
        ):(
          <><h2 className="favorite-heading">
            Favorite Lectures({favoriteLectures.length})
          </h2>
      {
        favoriteLectures.map((lecture)=>(
         <LectureCard
         key={lecture.id}
         lecture={lecture}
         setSelectedLecture={setSelectedLecture}
         setSelectedNotesLecture={setSelectedNotesLecture}
         isFavorite={true}
         removeFromFavorites={removeFromFavorites}
         />
        ))
      }
      </>
        )
      }
      {selectedLecture &&(<LectureModal lecture={selectedLecture}
      setSelectedLecture={setSelectedLecture}/>)}
      {selectedNotesLecture &&(
        <NotesModal lecture={selectedNotesLecture}
        setSelectedLecture={setSelectedNotesLecture}/>
      )}
            </div>
      ):(
        <div className="no-results">
          <h2>😔 No lectures found</h2>
          <p>We couldn't find any lecture matching your current search.</p>
          <ul>
            <li>🔍 Try searching another topic</li>
            <li>🎯Remove one or more filters</li>
            <li>🔄Click "Clear Filters" to reset everything</li>
          </ul>
    </div>
  )
}
</div>
  );
}
export default App;