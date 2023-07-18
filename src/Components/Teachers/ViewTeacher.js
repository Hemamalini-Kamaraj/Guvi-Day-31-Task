import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import TeacherTable from "./TeacherTable";

function ViewTeacher() {
  const [teacherData, setTeacherData] = useState("");

  useEffect(() => {
    axios
      .get("https://64a7ce3ddca581464b84cf38.mockapi.io/teachers")
      .then((response) => setTeacherData(response.data));
  }, []);

  return (
    <div className="tableDiv">
      {teacherData.length > 0 ? <TeacherTable teachData={teacherData} /> : ""}
    </div>
  );
}

export default ViewTeacher;
