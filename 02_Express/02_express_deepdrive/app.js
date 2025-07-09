import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use("/", (req, res, next) => {
  console.log("root");
  next();
});

/*
//dummy middleware start
app.use((req, res, next) => {
  console.log("dummy 1", req.url);
  next();
});
app.use((req, res, next) => {
  console.log("dummy 2", req.method);
  next();
});
//dummy end
*/

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
  console.log("1st handel contact-us for Post", req.body);
  next();
});
//new middleware which parse the body and add it to req.

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
  console.log("2nd handel contact-us for Post", req.body);
  res.send(
    `<h1> thanks for details <h1> <h2> ${req.body.name} </h2> <h2> ${req.body.email} </h2>`
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🟢 live at ${PORT}`);
});
