import db from "../models/index.js";
 
const Op = db.Sequelize.Op;
const jobApps = db.jobApps;
 
// Create and Save a new JobApp
export const create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
 
    // Create a JobApp
    const jobApp = {
        id: req.body.id,
        company: req.body.company,
        position: req.body.position,
        dateApplied: req.body.dateApplied,
        status: req.body.status
    };
 
    // Save jobApp in the database
    jobApp.create(jobApp)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Job App.",
            });
        });
};
 
// Retrieve all Job Apps
export const findAll = (req, res) => {
    // Allow a filter condition via query parameter
    const id = req.query.id
    const condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
 
    jobApps.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving job apps.",
            });
        });
};
 
// Find a single jobapps by ID
export const findOne = (req, res) => {
    const id = req.params.id;
 
    // Find jobApps by primary key
    jobApps.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find job app with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving job app with id=" + id,
            });
        });
};
 
// Update a job app by ID
export const update = (req, res) => {
    const id = req.params.id;
 
    // Update the job app with the specified ID
    jobApps.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num === 1) {
                res.send({
                    message: "Job app was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update job app with id=${id}. Maybe job app was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating job app with id=" + id,
            });
        });
};
 
// Delete a job app by ID
export const deleteOne = (req, res) => {
    const id = req.params.id;
 
    // Delete the jobApps with the specified ID
    jobApps.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num === 1) {
                res.send({
                    message: "Job app was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete job app with id=${id}. Maybe job app was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete job app with id=" + id,
            });
        });
};
 
// Delete all jobApps
export const deleteAll = (req, res) => {
    // Delete all jobApps
    jobApps.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} jobApps were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all jobApps.",
            });
        });
};
 
// Find all published jobApps
export const findAllPublished = (req, res) => {
    // Find all jobApps with published = true
    jobApps.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving jobApps.",
            });
        });
};