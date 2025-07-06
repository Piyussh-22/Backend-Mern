import { createServer } from "http";
import fs from "fs";

const server = createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url.toLowerCase() === "/submit-details" && req.method == "POST") {
    fs.writeFileSync("user.txt", "piyush raj");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node</title></head>");
  res.write("<body>");

  if (req.url === "/") {
    res.write("<h1>Piyush Raj Home Page</h1>");

    res.write("<form action='/submit-details' method='POST'>");

    res.write('<input type="text" name="username" placeholder="name" /> <br>');
    res.write('<input type="number" name="userage" placeholder="age" /> <br>');

    res.write('<label for="male"> male </label>');
    res.write(
      "<input type='radio' id='male' name='gender' value='male' /> <br>"
    );
    res.write('<label for="female"> female </label>');
    res.write(
      "<input type='radio' id='female' name='gender' value='female' /> <br>"
    );

    res.write('<input type="submit" value="submit" />');
    res.write("</form>");
  } else if (req.url === "/product") {
    res.write("<h1>Product Page</h1>");
  } else {
    res.write("<h1>Follow for more</h1>");
  }

  res.write("</body>");
  res.write("</html>");
  return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🟢 server running on port ${PORT}`);
});
