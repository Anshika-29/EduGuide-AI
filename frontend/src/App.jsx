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
      return topicMatch && branchMatch&&yearMatch&&subjectMatch&&learningGoalMatch;
  }
  );
  return(
    <div>
      <Navbar />
      <Hero />
      <SearchForm setSearchTopic={setSearchTopic}
      setSearchBranch={setSearchBranch}
      setSearchYear={setSearchYear}
      setSearchSubject={setSearchSubject}
      setSearchLearningGoal={setSearchLearningGoal}
      />
      <div className="results">
        <h3>
          Showing {filteredLectures.length} Lecture
          {filteredLectures.length !==1 ? "s":""}
        </h3>
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
          <p>Try changing your filters or search another topic.</p>
    </div>
  )
}
</div>
  );
}
export default App;