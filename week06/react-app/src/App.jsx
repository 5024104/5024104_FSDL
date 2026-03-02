import { useState } from "react";
import Student from "./components/Student";

function App() {
  const studentName = "Samuel";

  const subjectOptions = ["HTML", "CSS", "JavaScript", "React", "Bootstrap"];

  const [selectedSubjects, setSelectedSubjects] = useState([]);

  function handleCheckboxChange(event) {
    const value = event.target.value;

    if (event.target.checked) {
      setSelectedSubjects([...selectedSubjects, value]);
    } else {
      setSelectedSubjects(
        selectedSubjects.filter((subject) => subject !== value)
      );
    }
  }

  function handleClick() {
    alert("Selected Subjects: " + selectedSubjects.join(", "));
  }

  return (
    <div className="container">
      <h1>React Experiment 6</h1>

      <h2>Hello, {studentName}</h2>

      <h3>Select Subjects:</h3>

      {subjectOptions.map((sub, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={sub}
            onChange={handleCheckboxChange}
          />
          <label> {sub}</label>
        </div>
      ))}

      <h3>Selected Subjects:</h3>
      <ul>
        {selectedSubjects.map((sub, index) => (
          <li key={index}>{sub}</li>
        ))}
      </ul>

      <Student name="Samuel Alva" course="B.Tech CSE" />

      <button onClick={handleClick}>Show Selected</button>
    </div>
  );
}

export default App;