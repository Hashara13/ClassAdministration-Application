import React, { useState, useEffect } from "react";
import axios from "axios";
import './AllStudent.css';  

export default function AllStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const viewStudent = () => {
      axios.get("http://localhost:5000/student/")
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
      <h1 className="title">Students List</h1>
      <ul className="students-list">
        {students.map((student, index) => (
          <li key={index} className="student-item">
            <div className="student-info">
              <h2>{student.name}</h2>
              <p>Age: {student.age}</p>
              <p>Gender: {student.gender}</p>
              <p>Address: {student.address}</p>
              <p>Year: {student.year}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
