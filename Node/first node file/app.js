import { createServer } from "http";

const server = createServer((req, res) => {
  console.log(req);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
