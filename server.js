const { createServer } = require("http");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const sendMail = require("./mailgun");

const app = express();
const port = process.env.PORT || 80;
app.use(cors());

//configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

//CONTACT PAGE ROUTE

app.route("/api/sendmail").post((req, res) => {
  let { email, message, name } = req.body;
  message = `from: ${name} \n ${message}`;
  sendMail(email, message, function(error, data) {
    console.log(error);
    if (error) {
      return res
        .status(500)
        .json({ message: error.message || "Internal Error" });
    }
    return res.json({ message: "Email sent!" });
  });
});

const server = createServer(app);

server.listen(port, () => {
  console.log(`Server running at ${port}!`);
});
