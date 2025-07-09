import Path from "path";

import express from "express";
const homeRouter = express.Router();

import rootDir from "../utils/pathUtil.js";

homeRouter.get("/", (req, res, next) => {
  console.log(req.url);
  res.sendFile(Path.join(rootDir, "views", "home.html"));
});

export default homeRouter;
