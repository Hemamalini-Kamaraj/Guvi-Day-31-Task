import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function UpdateForm({ selectedOption }) {
  const [teacherName, setTeacherName] = useState("");
  const [teacherBatch, setTeacherBatch] = useState("");
  const [teacherJoiningDate, setTeacherJoiningDate] = useState("");

  const teacherNameRef = useRef(null);

  useEffect(() => {
    axios
      .get(
        `https://64a7ce3ddca581464b84cf38.mockapi.io/teachers/${selectedOption}`
      )
      .then((student) => {
        setTeacherName(student.data.name);
        setTeacherBatch(student.data.batch_assigned);
        setTeacherJoiningDate(student.data.joining_date);
      });
  }, [selectedOption]);

  let handleNameChange = (event) => {
    setTeacherName(event.target.value);
  };

  let handleBatchChange = (event) => {
    setTeacherBatch(event.target.value);
  };

  let handleDOJChange = (event) => {
    setTeacherJoiningDate(event.target.value);
  };

  const handleUpdateClick = (event) => {
    event.preventDefault();

    axios.delete(
      `https://64a7ce3ddca581464b84cf38.mockapi.io/teachers/${selectedOption}`
    );

    alert("Teacher details Deleted.. Please click View teacher to view!");
    setTeacherName("");
    setTeacherBatch("");
    setTeacherJoiningDate("");
    teacherNameRef.current.focus();
  };

  return (
    <div>
      <form>
        <div className="col-sm-6">
          <label form="teacherName">Enter Name</label>
          <input
            id="teacherName"
            ref={teacherNameRef}
            type="text"
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
          <button type="submit" onClick={handleUpdateClick}>
            Delete Teacher
          </button>
        </div>
      </form>
    </div>
  );
}

function DeleteTeacher() {
  const [teacherData, setTeacherData] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const selectOptionRef = useRef(null);

  const teachers = [];

  for (let i = 0; i < teacherData.length; i++) {
    teachers.push({ id: teacherData[i].id, name: teacherData[i].name });
  }

  useEffect(() => {
    axios
      .get("https://64a7ce3ddca581464b84cf38.mockapi.io/teachers")
      .then((response) => setTeacherData(response.data));
  }, []);

  let selectHandler = (event) => {
    setSelectedOption(event.target.value.replace(/\D/g, ""));
  };

  return (
    <div className="editUser">
      <h1>Delete Teacher</h1>

      <label>
        Select Teacher to Edit &nbsp;&nbsp;
        <select
          ref={selectOptionRef}
          onChange={selectHandler}
          value={selectedOption}
        >
          <option value="">Select Teacher</option>
          {teachers.map((teacher) => (
            <option key={teacher.id}>
              {teacher.id}-{teacher.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <br />
      {selectedOption && <UpdateForm selectedOption={selectedOption} />}
    </div>
  );
}

export default DeleteTeacher;
