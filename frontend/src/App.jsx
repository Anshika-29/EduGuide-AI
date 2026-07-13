import "./App.css";
import {useState} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchForm from "./components/SearchForm";
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
      <SearchForm setSearchTopic={setSearchTopic}
      setSearchBranch={setSearchBranch}
      setSearchYear={setSearchYear}
      setSearchSubject={setSearchSubject}
      setSearchLearningGoal={setSearchLearningGoal}
      setSearchDifficulty={setSearchDifficulty}
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
      </div>
      <div className="active-filters">
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
        title={lecture.topic}
        subject={lecture.subject}
        branch={lecture.branch}
        year={lecture.year}
        instructor={lecture.instructor}
        duration={lecture.duration}
        language={lecture.language}
        difficulty={lecture.difficulty}
        learningGoal={lecture.learningGoal}
        channel={lecture.channel}
        rating={lecture.rating}
        views={lecture.views}
        link={lecture.link}
        />
      ))}
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