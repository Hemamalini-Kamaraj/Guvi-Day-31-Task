import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditStudentById() {
  const id = useParams().id;

  const [teacherData, setTeacherData] = useState("");

  const [studentName, setstudentName] = useState("");
  const [studentBatch, setstudentBatch] = useState("");
  const [studentCourse, setstudentCourse] = useState("");
  const [studentEmail, setstudentEmail] = useState("");
  const [studentMentor, setstudentMentor] = useState("");

  const studentNameRef = useRef(null);

  const mentors = [];

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
      .get(`https://64a7ce3ddca581464b84cf38.mockapi.io/students/${id}`)
      .then((student) => {
        setstudentName(student.data.name);
        setstudentBatch(student.data.batch);
        setstudentCourse(student.data.course);
        setstudentEmail(student.data.email);
        setstudentMentor(student.data.mentor);
      });
  }, [id]);

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

  let handleMentorChange = (event) => {
    setstudentMentor(event.target.value);
  };

  const handleUpdateClick = (event) => {
    event.preventDefault();

    let studentObject = {
      id: Number(id),
      name: studentName,
      batch: studentBatch,
      course: studentCourse,
      email: studentEmail,
      mentor: studentMentor,
    };

    axios.put(
      `https://64a7ce3ddca581464b84cf38.mockapi.io/students/${id}`,
      studentObject
    );

    alert("Student details Updated.. Please click View Student to view!");
    setstudentName("");
    setstudentBatch("");
    setstudentCourse("");
    setstudentEmail("");
    setstudentMentor("");
    studentNameRef.current.focus();
  };

  return (
    <div className="editUser">
      <form>
        <div className="col-sm-6">
          <label form="studentName">Enter Name</label>
          <input
            id="studentName"
            ref={studentNameRef}
            type="text"
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
          <select value={studentMentor} onChange={handleMentorChange}>
            <option value="">Select Mentor</option>
            {mentors.length > 0
              ? mentors.map((men) => <option key={men}>{men}</option>)
              : ""}
          </select>
        </div>
        <br />
        <div className="col-sm-6">
          <button type="submit" onClick={handleUpdateClick}>
            Update Student
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditStudentById;
