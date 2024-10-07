import React, { useContext } from "react";
import "./UserTable.scss";
import { Link } from "react-router-dom";
import { TeachersContext } from "../../context/TeachersContext";

const statusClasses = {
  Active: "status-active",
  Inactive: "status-inactive",
  Blocked: "status-blocked",
  Suspended: "status-suspended",
};

const UserTable = () => { 

const {paginatedTeachers} = useContext(TeachersContext)
  const teachersArray = paginatedTeachers   //==>>allFilterd teahers ARray

  return (
    <div className="userTable_container">
      <div className="teacher-table-container">
        <table className="teacher-table">
          <thead>
            <tr>
              <th>Record ID</th>
              <th>Teacher Name</th>
              <th>Teacher Id.</th>
              <th>Department</th>
              <th>Student</th>
              <th>Status</th>
              <th>All Details</th>
            </tr>
          </thead>
          <tbody>
            {teachersArray.map((item) => (
              <tr key={item.recordId}>
                <td data-label="Record ID">{item.recordId}</td>
                <td data-label="Teacher Name">{item.teacher.name}</td>
                <td data-label="Teacher Id.">{item.teacher.id}</td>
                <td data-label="Department">{item.teacher.department}</td>
                <td data-label="Student">{item.studentCount}</td>
                <td data-label="Status" className={statusClasses[item.status]}>
                  {item.status}
                  <span className="material-icons status_circle">
                    radio_button_checked
                  </span>
                </td>
                <td data-label="All Details">
                  <Link to="/teacher/teacher-Id" className="view-more">
                    View More &gt;
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
