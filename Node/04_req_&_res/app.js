import { createServer } from "http";

const server = createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title> Node </title></head>");
  res.write("<body>");
  if (req.url === "/") {
    res.write("<h1> Piyush Raj Home Page </h1>");
    return res.end();
  } else if (req.url === "/product") {
    res.write("<h1> Product Page </h1>");
    return res.end();
  } else {
    res.write("<h1>follow for more </h1>");
  }
  res.write("</body>");
  res.write("</html>");
  return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🟢 server running on port ${PORT}`);
});
