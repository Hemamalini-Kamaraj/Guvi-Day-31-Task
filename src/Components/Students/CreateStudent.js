import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function CreateStudent() {
  const [teacherData, setTeacherData] = useState("");

  const [studentData, setstudentData] = useState("");
  const [studentName, setstudentName] = useState("");
  const [studentBatch, setstudentBatch] = useState("");
  const [studentCourse, setstudentCourse] = useState("");
  const [studentEmail, setstudentEmail] = useState("");
  const [studentMentor, setstudentMentor] = useState("");

  const mentors = [];

  const studentNameRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://64a7ce3ddca581464b84cf38.mockapi.io/teachers")
      .then((response) => setTeacherData(response.data));
  }, []);

  for (let i = 0; i < teacherData.length; i++) {
    mentors.push(teacherData[i].name);
  }

  useEffect(() => {
    axios
      .get("https://64a7ce3ddca581464b84cf38.mockapi.io/students")
      .then((response) => setstudentData(response.data));
  }, []);

  let addstudent = (event) => {
    event.preventDefault();

    let studentObject = {
      id: studentData.length + 1,
      name: studentName,
      batch: studentBatch,
      course: studentCourse,
      mentor: studentMentor,
      email: studentEmail,
    };

    console.log(studentObject);

    axios.post(
      "https://64a7ce3ddca581464b84cf38.mockapi.io/students",
      studentObject
    );

    alert("Student details Created.. Please click View student to view!");
    setstudentName("");
    setstudentBatch("");
    setstudentCourse("");
    setstudentEmail("");
    setstudentMentor("");
    studentNameRef.current.focus();
  };

  let handleNameChange = (event) => {
    setstudentName(event.target.value);
  };

  let handleBatchChange = (event) => {
    setstudentBatch(event.target.value);
  };

  let handleCourseChange = (event) => {
    setstudentCourse(event.target.value);
  };

  let handleEmailChange = (event) => {
    setstudentEmail(event.target.value);
  };

  let selectHandler = (event) => {
    setstudentMentor(event.target.value);
  };

  return (
    <div className="createUser">
      <h1>Create Student</h1>
      <form onSubmit={addstudent}>
        <div className="col-sm-6">
          <label form="studentName">Enter Name</label>
          <input
            id="studentName"
            type="text"
            ref={studentNameRef}
            value={studentName}
            onChange={handleNameChange}
          ></input>
        </div>
        <br />
        <div className="col-sm-6">
          <label form="studentBatch">Enter Batch</label>
          <input
            id="studentBatch"
            type="text"
            value={studentBatch}
            onChange={handleBatchChange}
          ></input>
        </div>
        <br />
        <div className="col-sm-6">
          <label form="studentCourse">Enter Course</label>
          <input
            id="studentCourse"
            type="text"
            value={studentCourse}
            onChange={handleCourseChange}
          ></input>
        </div>
        <br />
        <div className="col-sm-6">
          <label form="studentEmail">Enter Email</label>
          <input
            id="studentEmail"
            type="text"
            value={studentEmail}
            onChange={handleEmailChange}
          ></input>
        </div>
        <br />
        <div className="col-sm-6">
          <label form="studentMentor">Select Mentor</label>
          <select value={studentMentor} onChange={selectHandler}>
            <option value="">Select Mentor</option>
            {mentors.length > 0
              ? mentors.map((men) => <option key={men}>{men}</option>)
              : ""}
          </select>
        </div>
        <br />
        <div className="col-sm-6">
          <button type="submit">Add Student</button>
        </div>
      </form>
    </div>
  );
}

export default CreateStudent;
