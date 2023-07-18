import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function CreateTeacher() {
  const [teacherData, setTeacherData] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherBatch, setTeacherBatch] = useState("");
  const [teacherJoiningDate, setTeacherJoiningDate] = useState("");

  const teacherNameRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://64a7ce3ddca581464b84cf38.mockapi.io/teachers")
      .then((response) => setTeacherData(response.data));
  }, []);

  let addTeacher = (event) => {
    event.preventDefault();

    let teacherObject = {
      id: teacherData.length + 1,
      name: teacherName,
      batch_assigned: teacherBatch,
      joining_date: teacherJoiningDate,
    };

    axios.post(
      "https://64a7ce3ddca581464b84cf38.mockapi.io/teachers",
      teacherObject
    );

    alert("Teacher details Created.. Please click View teacher to view!");
    setTeacherName("");
    setTeacherBatch("");
    setTeacherJoiningDate("");
    teacherNameRef.current.focus();
  };

  let handleNameChange = (event) => {
    setTeacherName(event.target.value);
  };

  let handleBatchChange = (event) => {
    setTeacherBatch(event.target.value);
  };

  let handleDOJChange = (event) => {
    setTeacherJoiningDate(event.target.value);
  };

  return (
    <div className="createUser">
      <h1>Create Teacher</h1>
      <form onSubmit={addTeacher}>
        <div className="col-sm-6">
          <label form="teacherName">Enter Name</label>
          <input
            id="teacherName"
            type="text"
            ref={teacherNameRef}
            value={teacherName}
            onChange={handleNameChange}
          ></input>
        </div>
        <br />
        <div className="col-sm-6">
          <label form="teacherBatch">Enter Batch</label>
          <input
            id="teacherBatch"
            type="text"
            value={teacherBatch}
            onChange={handleBatchChange}
          ></input>
        </div>
        <br />
        <div className="col-sm-6">
          <label form="teacherJoiningDate">Enter Joining Date</label>
          <input
            id="studentCourse"
            type="text"
            value={teacherJoiningDate}
            onChange={handleDOJChange}
          ></input>
        </div>
        <br />
        <div className="col-sm-6">
          <button type="submit">Add Teacher</button>
        </div>
      </form>
    </div>
  );
}

export default CreateTeacher;
