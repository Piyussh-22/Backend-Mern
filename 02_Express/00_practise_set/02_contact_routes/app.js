//core
import path from "path";
//external
import express from "express";

//local
import homeRouter from "./routes/homeRouter.js";
import contactRouter from "./routes/contactRouter.js";
import rootDir from "./utils/pathUtil.js";

const app = express();
app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404page.html"));
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🟢 live at ${PORT}`);
});
