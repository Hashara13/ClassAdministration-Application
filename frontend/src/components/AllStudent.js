import React, { useState, useEffect } from "react";
import axios from "axios";
import { Ripple, initMDB } from "mdb-ui-kit";
import "../css/AllStudent.css";
initMDB({ Ripple });
export default function AllStudent() {
  const [students, setStudents] = useState([]);
  const [lessons, setLessons] = useState([]);

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

  useEffect(() => {
    const viewLesson = () => {
      axios
        .get("http://localhost:5000/lesson/")
        .then((res) => {
          setLessons(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    viewLesson();
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
        {lessons.map((lesson, index) => (
          <div class="card" key={index}>
            <div
              class="bg-image hover-overlay"
              data-mdb-ripple-init
              data-mdb-ripple-color="light"
            >
              <img
                src="https://media.istockphoto.com/id/521809456/photo/conceptual-keyboard-pdf.jpg?s=1024x1024&w=is&k=20&c=FzODK-eG-tYY04dG9YUU_ks_rtR7WM3FVWtiv2x9Eis="
                class="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">{lesson.title}</h5>
              <p class="card-text">{(lesson.size / 1048576).toFixed(2)} MB</p>
              <p class="card-text">
                {new Date(lesson.academicYear).toLocaleDateString("en-GB", {
                  year: "numeric",
                })}{" "}
                A/L{" "}
              </p>
              <a href="#!" class="btn btn-primary" data-mdb-ripple-init>
                View
              </a>
              <p class="card-text">
               Will be Expired in : {new Date(lesson.expiredDate).toLocaleDateString("en-GB", {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit'
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
