const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url.toLowerCase() === "/submit-details" && req.method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node</title></head>");
  res.write("<body>");

  if (req.url === "/") {
    res.write(`
      <h1>Piyush Raj Home Page</h1>
      <form action='/submit-details' method='POST'>
        <input type="text" name="userName" placeholder="name" /> <br>
        <input type="number" name="userAge" placeholder="age" /> <br>
    
        <label for="male"> male </label>
        <input type='radio' id='male' name='gender' value='male' /> <br>
    
        <label for="female"> female </label>
        <input type='radio' id='female' name='gender' value='female' /> <br>
    
        <input type="submit" value="submit" />
      </form>
    `);
  } else if (req.url === "/product") {
    res.write("<h1>Product Page</h1>");
  } else {
    res.write("<h1>Follow for more</h1>");
  }

  res.write("</body>");
  res.write("</html>");
  return res.end();
};

export default userRequestHandler;
