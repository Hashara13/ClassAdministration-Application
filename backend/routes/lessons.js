const multer = require("multer");
const express = require("express");
const router = express.Router();
const upload = multer({ dest: "uploads/" });
const Lesson = require("../models/Lesson");

router
  .route("/lessons/new", upload.array("photos", 12))
  .post(async (req, res, next) => {
    const originalName = req.body.originalName;
    const mimeType = req.body.mimeType;
    const size = Number(req.body.size);
    const uploadDate = Date(req.body.originalName);
    const academicYear = Date(req.body.academicYear);
    const expiredDate = Date(req.body.expiredDate);
    const currentDate = Date(req.body.expiredDate);

    const newLesson = new Lesson({
      originalName,
      mimeType,
      size,
      uploadDate,
      academicYear,
      currentDate,
      expiredDate,
    });

    newLesson
      .save()
      .then(() => {
        res, json("New Student added Successfull !");
      })
      .catch((err) => {
        console.log(err);
      });
  });

router.route("/lessons").get(async (req, res) => {
  Lesson.find()
    .then((lessons) => {
      res.json(lessons);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/lessons/update:id").put(async (req, res) => {
  const lessonId = req.params.id;
  const {
    originalName,
    mimeType,
    size,
    uploadDate,
    academicYear,
    currentDate,
    expiredDate,
  } = req.body;

  const updatedLesson = {
    originalName,
    mimeType,
    size,
    uploadDate,
    academicYear,
    currentDate,
    expiredDate,
  };

  const update = await Lesson.findByIdAndUpdate(lessonId, updatedLesson)
    .then(() => {
      res.status(200).send({ status: "Update Successfull !" });
    })
    .catch((err) => {
      res
        .status(200)
        .send({ status: "Update Successfull !", error: err.message });
    });
});

router.route("/lessons/delete:id").delete(async (req, res) => {
  if (currentDate == expiredDate) {
    const lessonId = req.params.id;

    await Lesson.findByIdAndDelete(lessonId)
      .then(() => {
        res.status(200).send({ status: "Delete Successfull !" });
      })
      .catch((err) => {
        res
          .status(200)
          .send({ status: "Update Successfull !", error: err.message });
      });
  }
});

router.route("/lessons/get:id").get(async (req, res) => {
  const lessonId = req.params.id;

  await Lesson.findById(lessonId)
    .then((lessons) => {
      res.status(200).send({ status: "Delete Successfull !", lessons });
    })
    .catch((err) => {
      res
        .status(200)
        .send({ status: "Update Successfull !", error: err.message });
    });
});

module.exports = router;
