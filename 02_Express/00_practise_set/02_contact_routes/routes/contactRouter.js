import Path from "path";

import express from "express";
const contactRouter = express.Router();

import rootDir from "../utils/pathUtil.js";

contactRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(Path.join(rootDir, "views", "contactForm.html"));
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(Path.join(rootDir, "views", "contactDone.html"));
});

export default contactRouter;
