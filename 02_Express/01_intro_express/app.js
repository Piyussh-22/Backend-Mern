// external module
import express from "express";

// local module
import userRequestHandler from "./user.js";

const app = express();

app.get("/", (req, res, next) => {
  console.log("1st middleware", req.url, req.method);
  //res.send("<p>welcome 1st</p>");
  next();
});

// post and submit-datails same to same match
app.post("/submit-details", (req, res, next) => {
  console.log("3nd middleware", req.url, req.method);
  res.send("<p>welcome 3rd</p>");
});

// use me starting path wide card hota hai .

app.use("/", (req, res, next) => {
  console.log("2st middleware", req.url, req.method);
  res.send("<p>welcome 2nd</p>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🟢 server running on port ${PORT}`);
});
