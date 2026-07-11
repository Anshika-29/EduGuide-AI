import {useState } from "react";
import subjectsByBranch from"../data/subjects";
function SearchForm({ setSearchTopic,setSearchBranch,setSearchYear,setSearchSubject,setSearchLearningGoal}){
    const [topic,setTopic]=useState("");
    const [branch,setBranch]=useState("");
    const [year,setYear]=useState("");
    const [semester,setSemester]=useState("");
    const [subject,setSubject]=useState("");
    const [learningGoal,setLearningGoal]=useState("");
    const availableSubjects=subjectsByBranch[branch]||[];
   console.log("subjectsByBranch =", subjectsByBranch);
console.log("branch =", branch);
console.log("subjectsByBranch[branch] =", subjectsByBranch[branch]);
console.log("availableSubjects =", availableSubjects);
    const searchLecture= () =>{
        setSearchTopic(topic);
        setSearchBranch(branch);
        setSearchYear(year);
        setSearchSubject(subject);
        setSearchLearningGoal(learningGoal);
    }
    return(
        <div className="search-box">
            <input type="text"
            placeholder="Search any B.Tech topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            />
            <select value={branch}
            onChange={(e) => setBranch(e.target.value)}>
                <option value="">Select Branch</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="Mechanical">Mechanical</option>
            </select>
            <select value={year}
            onChange={(e) => setYear(e.target.value)}>
                <option value="">Select Year</option>
                <option value="First Year">First Year</option>
                <option value="Second Year">Second Year</option>
                <option value="Third Year">Third Year</option>
                <option value="Fourth Year">Fourth Year </option>
                
            </select>
      <select
    value={subject}
    onChange={(e) => setSubject(e.target.value)}
>
    <option value="">Select Subjects</option>

    {availableSubjects.map((sub) => {
        console.log("Rendering:", sub);
        return (
            <option key={sub} value={sub}>
                {sub}
            </option>
        );
    })}
</select>
     
    
           
            <select value={learningGoal}
            onChange={(e)=>setLearningGoal(e.target.value)}>
                <option value="">Learning Goal</option>
                <option value="Detailed">Detailed</option>
                <option value="Revision">Revision</option>
            </select>
            <button onClick={searchLecture}>
                Search Lecture
            </button>
        </div>
    );
}
export default SearchForm;