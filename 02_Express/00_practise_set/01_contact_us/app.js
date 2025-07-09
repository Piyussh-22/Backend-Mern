import express from "express";
const app = express();

app.use("/", (req, res, next) => {
  console.log("root");
  next();
});

//dummy middleware start
app.use((req, res, next) => {
  console.log("dummy 1", req.url);
  next();
});
app.use((req, res, next) => {
  console.log("dummy 2", req.method);
  next();
});
//above is dummy

// app.use((req, res, next) => {
//   res.send("<p>hello</p>");
// });

app.get("/", (req, res, next) => {
  console.log("handel / for get");
  res.send(`<h1>hello</h1>`);
});
app.get("/contact-us", (req, res, next) => {
  console.log("handel contact-us");
  res.send(`<h1>give your deatils</h1>
    <form action="/contact-us" method="POST">
    <input type="text" placeholder="enter name" name="name" />
    <input type="email" placeholder="enter email" name="email" />
    <input type="submit"/>
    </form>
    `);
});
app.post("/contact-us", (req, res, next) => {
  console.log("handel contact-us for Post");
  res.send("<h1> thanks for details <h1>");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🟢 live at ${PORT}`);
});
