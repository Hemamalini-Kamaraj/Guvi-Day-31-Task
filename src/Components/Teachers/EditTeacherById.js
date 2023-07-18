import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditTeacherById() {
  const id = useParams().id;

  const [teacherName, setTeacherName] = useState("");
  const [teacherBatch, setTeacherBatch] = useState("");
  const [teacherJoiningDate, setTeacherJoiningDate] = useState("");

  const teacherNameRef = useRef(null);

  useEffect(() => {
    axios
      .get(`https://64a7ce3ddca581464b84cf38.mockapi.io/teachers/${id}`)
      .then((teacher) => {
        setTeacherName(teacher.data.name);
        setTeacherBatch(teacher.data.batch_assigned);
        setTeacherJoiningDate(teacher.data.joining_date);
      });
  }, [id]);

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

    let teacherObject = {
      id: Number(id),
      name: teacherName,
      batch_assigned: teacherBatch,
      joining_date: teacherJoiningDate,
    };

    axios.put(
      `https://64a7ce3ddca581464b84cf38.mockapi.io/teachers/${id}`,
      teacherObject
    );

    alert("Teacher details Updated.. Please click View teacher to view!");
    setTeacherName("");
    setTeacherBatch("");
    setTeacherJoiningDate("");
    teacherNameRef.current.focus();
  };

  return (
    <div className="editUser">
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
            Update Teacher
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTeacherById;
