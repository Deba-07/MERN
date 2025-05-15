// const express = require('express')
// const app = express()

// app.use('/', (req, res) => {
//     res.send("Hello!, Welcome Home")
// })

// app.listen(5000, () => {
//     console.log("Server is running on http://localhost:5000")
// })

const express = require("express");
const app = express();
const bodyParser = require('body-parser')
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/contact", (req, res) => {
  res.send("Contact Us");
});

app.get("/app/api", (req, res) => {
  const user = [
    { id: 1, name: "Ashutosh" },
    { id: 2, name: "Debasis" },
    { id: 3, name: "Subham" },
    { id: 4, name: "Himanshu" },
    { id: 5, name: "Sridhar" },
  ];
  res.json(user);
});

app.get("/app/api:id", (req, res) => {
  const user = [
    { id: 1, name: "Ashutosh" },
    { id: 2, name: "Debasis" },
    { id: 3, name: "Subham" },
    { id: 4, name: "Himanshu" },
    { id: 5, name: "Sridhar" },
  ];

  const find_user = user.find((u) => u.id == req.params.id);
  if (!find_user) return res.status(404).send("User not found");

  res.json(user);
});

app.get("/", (req, res) => {
  res.render("home", { title: "Home page" });
});

app.get("/users", (req, res) => {
  res.render("user", { title: "User page", user });
});

app.post('/submit', (req, res) => {
    const {email, name, mobile} = req.body;
    res.render("response", {email, name, mobile})
})

app.listen(5500, () => {
  console.log("Server is running on port 5500");
});
