const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// add student route

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;
  const address = req.body.address;
  const year = Number(req.body.year);
  const academicYear = Date(req.body.academicYear);

  //create new object from student model
  // initialize attributes here
  const newStudent = new Student({
    name,
    age,
    gender,
    year,
    address,
    academicYear,
  });

  // Insert data and send to database
  newStudent
    .save()
    .then(() => {
      res.json("Added Success!"); // exception handeling
    })
    .catch((err) => {
      console.log(err);
    });
});

// retrieve studenet routers

router.route("/").get((req, res) => {
    
  // for get all student details use find keyword
  Student.find()
    .then((students) => {
      res.json(students); // get students details as json format
    })
    .catch((err) => {
      console.log(err);
    });

});

// update a student details
// use async await for background run requests
router.route("/update/:id").put(async (req, res) => {
  // fetch ids in URL to var through params keyword > get student id for get each student details
  let userId = req.params.id;

  // get values & structure them in request body as D structure o object
  const { name, age, gender, address, academicYear,year } = req.body;
  // create new object for pass values
  const updateStudent = {
    name,
    age,
    year,
    gender,
    address,
    academicYear,
  };

  // update values through new object by id and values objects
  const update = await Student.findByIdAndUpdate(userId, updateStudent)
    .then(() => {
      // send updated values to front-end
      res.status(200).send({ status: "user update done" });
    })
    .catch((err) => {
      console.log(err);
      // send error message to frontend
      res.status(500).send({ status: "user update Error", error: err.message });
    });

});

// delete a student details
router.route("/delete/:id").delete(async (req, res) => {

  // fetch ids in URL to var through params keyword > get student id for get each student details
  let userId = req.params.id;

  // delete by id
  await Student.findByIdAndDelete(userId)
    .then(() => {
      // send updated values to front-end
      res.status(200).send({ status: "user delete done" });
    })
    .catch((err) => {
      console.log(err.message);
      // send error message to frontend
      res.status(500).send({ status: "user delete Error", error: err.message });
    });

});


// retrieve 1 studenet routers
router.route("/get/:id").get(async(req, res) => {
  let userId = req.params.id;

  // One student find by id and pass to an object
  const user=await Student.findById(userId)
  .then((student) => {
    res.status(200).send({ status: "user find  done",student });
  })
  .catch((err) => {
    console.log(err.message);
    res.status(500).send({ status: "user find Error", error: err.message });
  });

});
module.exports = router;
