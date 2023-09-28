const express = require("express");
const app = express();
const port = 3000;
const myArray = require("./myArray");

const newArray = new myArray();
newArray.push(5);
newArray.push(5);
newArray.pop();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(newArray);
});
