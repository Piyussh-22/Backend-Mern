import { createServer } from "http";

const server = createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Myntra</title></head>");
  res.write("<body>");

  if (req.url === "/") {
    res.write(
      "<a href='/Home'><button>Home</button></a> <a href='/Men'><button>Men</button></a> <a href='/Women'><button>Women</button></a> <a href='/Kids'><button>Kids</button></a> <a href='/Cart'><button>Cart</button></a>"
    );
  } else if (req.url === "/Home") {
    res.write("<h1>Welcome to Home Page</h1>");
  } else if (req.url === "/Men") {
    res.write("<h1>Welcome to Men section</h1>");
  } else if (req.url === "/Women") {
    res.write("<h1>Welcome to Women section</h1>");
  } else if (req.url === "/Kids") {
    res.write("<h1>Welcome to Kids section</h1>");
  } else if (req.url === "/Cart") {
    res.write("<h1>Welcome to Cart section</h1>");
  }

  res.write("</body>");
  res.write("</html>");
  return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🟢 server running on port ${PORT}`);
});
