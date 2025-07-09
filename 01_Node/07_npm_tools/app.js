import { createServer } from "http";

const server = createServer((req, res) => {
  console.log("hello");
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`🟢 server live at ${PORT}`);
});
