import React, { useState } from "react";
import axios from "axios";

const ActivityLog = () => {
  const [log, setLog] = useState({
    waterIntake: "",
    steps: "",
    caloriesIntake: "",
    caloriesBurnt: "",
    sleepDuration: "",
  });

  const handleChange = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/logs", log);
    alert("Log added successfully!");
  };

  return (
    <div>
      <h2>Activity & Nutrition Log</h2>
      <input type="number" name="waterIntake" placeholder="Water Intake" onChange={handleChange} />
      <input type="number" name="steps" placeholder="Steps" onChange={handleChange} />
      <input type="number" name="caloriesIntake" placeholder="Calories Intake" onChange={handleChange} />
      <input type="number" name="caloriesBurnt" placeholder="Calories Burnt" onChange={handleChange} />
      <input type="number" name="sleepDuration" placeholder="Sleep Duration" onChange={handleChange} />
      <button onClick={handleSubmit}>Log Data</button>
    </div>
  );
};

export default ActivityLog;
