//const express = require('express')
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const port = process.env.PORT;
//console.log(port)

app.get("/", (req, res) => {
  res.send("This is Home page");
});

app.get("/sign-up", (req, res) => {
  res.send("This is sign-up page");
});

app.get("/sign-in", (req, res) => {
  res.send("This is a sign-in page");
});

app.listen(port, () => {
  console.log(`Example app listening on : http://localhost:${port}`);
});
