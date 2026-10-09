import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import LectureSearch from "./pages/LectureSearch";
import LectureResults from"./pages/LectureResults";
import QuizModal from "./components/QuizModal";
import SummaryModal from "./components/SummaryModal";
import NotesModal from "./components/NotesModal";
import"./App.css";
import {useState,useEffect,useRef} from"react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchForm from "./components/SearchForm";
import LectureModal from"./components/LectureModal";
import LectureCard from"./components/LectureCard";
function App(){
  const [searchTopic,setSearchTopic]=useState("");
  const[searchBranch,setSearchBranch]=useState("");
  const[searchYear,setSearchYear]=useState("");
  const[searchSubject,setSearchSubject]=useState("");
  const[searchLearningGoal,setSearchLearningGoal]=useState("");
  const[searchDifficulty,setSearchDifficulty]=useState("");
  const[searchLanguage,setSearchLanguage]=useState("");
  const[selectedLecture,setSelectedLecture]=useState(null);
  const[selectedQuizLecture,setSelectedQuizLecture]=useState(null);
  const [selectedSummaryLecture,setSelectedSummaryLecture]=useState(null);
  const[selectedNotesLecture,setSelectedNotesLecture]=useState(null);
  const[favoriteLectures,setFavoriteLectures]=useState([]);
  const [showResults, setShowResults] = useState(false);
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
  const[lectureData,setLectureData]=useState([]);
  useEffect(()=>{
    async function fetchLectures(){
      try{
        const response=await fetch(`${import.meta.env.VITE_API_URL}/api/lectures`);
        const data=await response.json();
        console.log(data);
        setLectureData(data);
      }
      catch(error){
        console.error("Error fetching lectures:",error);
      }
    }
    fetchLectures();
  },[]);
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
    const alreadyFavorite=favoriteLectures.some((favLecture=>favLecture._id===lecture._id));
    if(alreadyFavorite){
      return;
    }
    setFavoriteLectures([
      ...favoriteLectures,
      lecture
    ]);
  }
  function removeFromFavorites(id){
    const updatedFavorites=favoriteLectures.filter((lecture)=>lecture._id!==id);
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
  const filteredLectures=lectureData.filter((lecture) =>
  {
    const topicMatch=
    lecture.topic
      .toLowerCase()
      .includes(searchTopic.toLowerCase());
      const branchMatch=
      searchBranch==="" ||
      lecture.branches.includes(searchBranch);
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
const totalViews = filteredLectures.reduce((sum, lecture) => {
    const viewsText = String(lecture.views).trim().toUpperCase();

    let views = 0;

    if (viewsText.endsWith("B")) {
        views = parseFloat(viewsText) * 1000000000;
    } else if (viewsText.endsWith("M")) {
        views = parseFloat(viewsText) * 1000000;
    } else if (viewsText.endsWith("K")) {
        views = parseFloat(viewsText) * 1000;
    } else {
        views = parseFloat(viewsText) || 0;
    }

    return sum + views;
}, 0);

const formattedViews =
    totalViews >= 1000000000
        ? (totalViews / 1000000000).toFixed(1) + "B"
        : totalViews >= 1000000
        ? (totalViews / 1000000).toFixed(1) + "M"
        : totalViews >= 1000
        ? (totalViews / 1000).toFixed(1) + "K"
        : totalViews.toLocaleString();
 
return ( <BrowserRouter basename="EduGuide-AI"> <Routes>
<Route
path="/"
element={<Home />}
/>


    <Route
      path="/lectures/search"
      element={
        <LectureSearch
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
          onSearch={() => setShowResults(true)}
        />
      }
    />

    <Route
      path="/lectures"
      element={
        <LectureResults
          lectureData={lectureData}
          filteredLectures={filteredLectures}
          favoriteLectures={favoriteLectures}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          totalRating={totalRating}
          averageRating={averageRating}
          formattedAverage={formattedAverage}
          formattedViews={formattedViews}
          searchTopic={searchTopic}
          searchBranch={searchBranch}
          searchYear={searchYear}
          searchSubject={searchSubject}
          searchLearningGoal={searchLearningGoal}
          searchDifficulty={searchDifficulty}
          searchLanguage={searchLanguage}
          clearFilters={clearFilters}
          setSelectedLecture={setSelectedLecture}
          setSelectedNotesLecture={setSelectedNotesLecture}
          setSelectedSummaryLecture={setSelectedSummaryLecture}
          setSelectedQuizLecture={setSelectedQuizLecture}
          selectedLecture={selectedLecture}
          selectedNotesLecture={selectedNotesLecture}
          selectedSummaryLecture={selectedSummaryLecture}
          selectedQuizLecture={selectedQuizLecture}
        />
      }
    />
  </Routes>
</BrowserRouter>


);

}

export default App;