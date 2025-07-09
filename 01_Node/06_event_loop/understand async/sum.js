const sumReqHandler = (req, res) => {
  console.log(req.url, req.method);
  let result;
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    result = Number(bodyObj.num1) + Number(bodyObj.num2);
    console.log(result);
  });
  res.setHeader("Content-type", "text/html");
  res.write(`
  <html>
  <head><title>calculator</title></head>
  <body>
  <h1> sum is ${result}
  </body>
  </html>
  `);
  return res.end();
};

export default sumReqHandler;
