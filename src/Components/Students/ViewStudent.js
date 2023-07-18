import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import StudentTable from "./StudentTable";

function ViewStudent() {
  const [studentData, setstudentData] = useState("");

  useEffect(() => {
    axios
      .get("https://64a7ce3ddca581464b84cf38.mockapi.io/students")
      .then((response) => setstudentData(response.data));
  }, []);

  return (
    <div className="tableDiv">
      {studentData.length > 0 ? <StudentTable stuData={studentData} /> : ""}
    </div>
  );
}

export default ViewStudent;
