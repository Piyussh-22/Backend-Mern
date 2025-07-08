import sumReqHandler from "./sum.js";

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/calculator-result" && req.method === "POST") {
    return sumReqHandler(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><title>Calculator</title></head><body>");

  if (req.url === "/") {
    res.write("<h1>Welcome to calculator Home Page</h1>");
    res.write(
      '<a href="/calculator"> <button> Go to Calculator </button> </a>'
    );
  } else if (req.url.toLowerCase() === "/calculator") {
    res.write("<form action='/calculator-result' method='POST'>");
    res.write('<input type="number" name="num1" placeholder="num1" /> <br>');
    res.write('<input type="number" name="num2" placeholder="num2" /> <br>');
    res.write('<input type="submit" value="sum" />');
    res.write("</form>");
  } else {
    res.write(
      "<h1>404 page not found <a href='/'> <button> Go home </button> </a></h1>"
    );
  }

  res.write("</body></html>");
  res.end();
};

export default requestHandler;
