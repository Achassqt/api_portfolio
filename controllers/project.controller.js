const Project = require("../models/project.model");

exports.findAll = (req, res) => {
  Project.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occured while retrieving project.",
      });
    else res.send(data);
  });
};

// exports.getAllProjects = (req, res) => {

// }
