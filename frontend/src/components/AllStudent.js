import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/AllStudent.css";

export default function AllStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const viewStudent = () => {
      axios
        .get("http://localhost:5000/student/")
        .then((res) => {
          setStudents(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };

    viewStudent();
  }, []);

  return (
    <div className="container">
      {students.map((student, index) => (
        <div className="card" key={index}>
          <div className="card-header d-flex align-items-center border-bottom">
            <span className="avatar text-bg-primary avatar-lg fs-5">R</span>
            <div className="ms-3">
              <h6 className="mb-0 fs-sm">{student.name}</h6>
            </div>
            <button className="btn text-muted ms-auto" type="button">
              <span className="mb-0 fs-sm">{student.year}</span>

              <i className="fas fa-ellipsis-v"></i>
            </button>
          </div>
          <div className="card-body">
            <p className="text-muted fs-sm">Age: {student.age}</p>
            <p className="text-muted fs-sm">Gender: {student.gender}</p>
            <p className="text-muted fs-sm">Address: {student.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
