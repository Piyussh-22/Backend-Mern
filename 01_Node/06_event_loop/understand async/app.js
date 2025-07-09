import { createServer } from "http";
import requestHandler from "./handler.js";

const server = createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🟢 server live at ${PORT}`);
});
