import * as jobApps from "../controllers/jobApps.controller.js";
import express from "express";
 
export default (app) => {
    let router = express.Router();
 
    // Create a new jobApps
    router.post("/", jobApps.create);
 
    // Retrieve all jobApps
    router.get("/", jobApps.findAll);
 
    // Retrieve a single jobApps with id
    router.get("/:id", jobApps.findOne);
 
    // Update a jobApps with id
    router.put("/:id", jobApps.update);
 
    // Delete a jobApps with id
    router.delete("/:id", jobApps.deleteOne);
 
    // Delete all jobApps
    router.delete("/", jobApps.deleteAll);
 
    // Find all published jobApps
    router.get("/published", jobApps.findAllPublished);
 
    app.use("/api/jobApps", router);
};