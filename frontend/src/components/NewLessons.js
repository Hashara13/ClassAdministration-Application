import React, { useState } from "react";
import axios from "axios";

function NewLessons() {
  const [file, setFile] = useState(null);
  const [academicYear, setAcademicYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // use form data for send formated form data since file upload use here, they cant upload via json
    const formData = new FormData();
    formData.append("file", file);
    formData.append("academicYear", academicYear);

    axios
      .post("http://localhost:5000/lesson/new", formData, {

        // send files with other form data & Set the content type for file uploads
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("New Lesson added!");
        setFile(null);
        setAcademicYear("");
      })
      .catch((err) => {
        alert(`Error: ${err.response ? err.response.data.error : err.message}`);
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="academicYear" className="form-label">
            Academic Year
          </label>
          <input
            type="text"
            className="form-control"
            id="academicYear"
            onChange={(e) => setAcademicYear(e.target.value)}
            placeholder="Enter Academic Year"
          />
        </div>

        <label className="form-label" htmlFor="file">
          Select Lesson File
        </label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="form-control"
          id="file"
        />

        <div className="d-flex justify-content-center mt-3 align-items-center">
          <button type="button" className="btn btn-subtle me-2" onClick={() => { setFile(null); setAcademicYear(""); }}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewLessons;
