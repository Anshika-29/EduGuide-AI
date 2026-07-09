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
      lecture.year===searchYear
      return topicMatch && branchMatch&&yearMatch;
  }
  );
  return(
    <div>
      <Navbar />
      <Hero />
      <SearchForm setSearchTopic={setSearchTopic}
      setSearchBranch={setSearchBranch}
      setSearchYear={setSearchYear}
      />
      {filteredLectures.map((lecture,index) => 
      (<LectureCard
        key={lecture.id}
        title={lecture.topic}
        subject={lecture.subject}
        branch={lecture.branch}
        year={lecture.year}
        channel={lecture.channel}
        rating={lecture.rating}
        views={lecture.views}
        link={lecture.link}
        />
      )
      )}
    </div>
  );
}
export default App;