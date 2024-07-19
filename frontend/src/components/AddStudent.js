import React, { useState } from "react";
import "../css/AddStudent.css";
import axios from "axios";

function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // create new student object for pass student details
    const newStudent = {
      name,
      age,
      gender,
      address,
      year,
    };

    // pass student to server first post URl,and object
    axios
      .post("http://localhost:5000/student/add", newStudent)
      .then(() => {
        alert("New Student Added !");
        setName("");
        setGender("");
        setAge("");
        setAddress("");
        setYear("");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="form-container">
      <form className="styled-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Student Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Student Name"
              // once type a value assign a value for setName
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              className="form-control"
              id="age"
              placeholder="Enter Age here"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Your gender</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            placeholder="Enter Gender here"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter Address here"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Academic Year</label>
          <input
            type="Date"
            className="form-control"
            id="academicYear"
            placeholder="Enter Academic Year (A/l Year)"
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Student{" "}
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
