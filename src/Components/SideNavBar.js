import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateStudent from "./Students/CreateStudent";
import ViewStudent from "./Students/ViewStudent";
import EditStudent from "./Students/EditStudent";
import DeleteStudent from "./Students/DeleteStudent";
import EditStudentById from "./Students/EditStudentById";
import ViewTeacher from "./Teachers/ViewTeacher";
import CreateTeacher from "./Teachers/CreateTeacher";
import EditTeacher from "./Teachers/EditTeacher";
import DeleteTeacher from "./Teachers/DeleteTeacher";
import EditTeacherById from "./Teachers/EditTeacherById";
import Home from "./Home";

function SideNavBar() {
  return (
    <Router>
      <div>
        <div id="wrapper">
          <ul
            className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <div className="sidebar-brand d-flex align-items-center justify-content-center">
              <div className="sidebar-brand-text mx-3">CRUD TASK</div>
            </div>
            <hr className="sidebar-divider my-0"></hr>

            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-dashboard"></i>
                <span className="fs-6 text-center">Dashboard</span>
              </Link>
            </li>

            <br />
            <hr className="sidebar-divider"></hr>

            <div className="sidebar-heading fs-6">
              <i className="fa-solid fa-graduation-cap"></i>
              <span>Student Interface</span>
            </div>

            <li className="nav-item">
              <Link className="nav-link collapsed" to="/create-student">
                <i className="fas fa-fw fa-plus"></i>
                <span>Create Student</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link collapsed" to="/view-student">
                <i className="fas fa-fw fa-eye"></i>
                <span>View Student</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link collapsed" to="/edit-student">
                <i className="fas fa-fw fa-edit"></i>
                <span>Edit Student</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link collapsed" to="/delete-student">
                <i className="fas fa-fw fa-trash"></i>
                <span>Delete Student</span>
              </Link>
            </li>

            <br />
            <hr className="sidebar-divider"></hr>

            <div className="sidebar-heading fs-6">
              <i className="fa-solid fa-person-chalkboard"></i>
              <span> Teacher Interface</span>
            </div>

            <li className="nav-item">
              <Link className="nav-link collapsed" to="/create-teacher">
                <i className="fas fa-fw fa-plus"></i>
                <span>Create Teacher</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link collapsed" to="/view-teacher">
                <i className="fas fa-fw fa-eye"></i>
                <span>View Teacher</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link collapsed" to="/edit-teacher">
                <i className="fas fa-fw fa-edit"></i>
                <span>Edit Teacher</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link collapsed" to="/delete-teacher">
                <i className="fas fa-fw fa-trash"></i>
                <span>Delete Teacher</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-student" element={<CreateStudent />} />
        <Route path="/view-student" element={<ViewStudent />} />
        <Route path="/edit-student" element={<EditStudent />} />
        <Route path="/edit-student/:id" element={<EditStudentById />} />
        <Route path="/delete-student" element={<DeleteStudent />} />

        <Route path="/create-teacher" element={<CreateTeacher />} />
        <Route path="/view-teacher" element={<ViewTeacher />} />
        <Route path="/edit-teacher" element={<EditTeacher />} />
        <Route path="/edit-teacher/:id" element={<EditTeacherById />} />
        <Route path="/delete-teacher" element={<DeleteTeacher />} />
      </Routes>
    </Router>
  );
}

export default SideNavBar;
