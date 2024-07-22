import React, { useState, useEffect } from "react";
import axios from "axios";
import { Ripple, initMDB } from "mdb-ui-kit";
import "../css/AllStudent.css";
initMDB({ Ripple });
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
    <div>
      <ul class="list-group list-group-dark">
        <li class="list-group-item px-3 border-0 active" aria-current="true">
          Student Details
        </li>
      </ul>

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
      <ul class="list-group list-group-dark mt-4">
    <li class="list-group-item px-3 border-0 active" aria-current="true">
      Lessons Details
    </li>
    </ul>
    <div className="container">

    <div class="card">
  <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="img-fluid"/>
    <a href="#!">
    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
    </a>
  </div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
  </div>
</div>
    </div>
    </div>
  );
}
