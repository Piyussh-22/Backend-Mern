import { createServer } from "http";
import userRequestHandler from "./user.js";

const server = createServer(userRequestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🟢 server running on port ${PORT}`);
});
