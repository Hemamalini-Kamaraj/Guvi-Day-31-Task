import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Home = () => {
  const [teacherData, setTeacherData] = useState("");
  const [studentData, setstudentData] = useState("");

  useEffect(() => {
    axios
      .get("https://64a7ce3ddca581464b84cf38.mockapi.io/teachers")
      .then((response) => setTeacherData(response.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://64a7ce3ddca581464b84cf38.mockapi.io/students")
      .then((response) => setstudentData(response.data));
  }, []);

  const teachers = teacherData.length;
  const students = studentData.length;

  return (
    <div className="home">
      <div className="d-sm-flex align-items-center justify-content-center mb-4">
        <h1 className="mt-4">Dashboard</h1>
      </div>
      <div>
        <Card teachers={teachers} students={students} />
      </div>
    </div>
  );
};

export default Home;
