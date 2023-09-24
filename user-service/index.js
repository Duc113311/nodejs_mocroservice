const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const www = process.env.WWW || "./";

app.use(express.static(www));
console.log(`serving ${www}`);

app.get("/user", (req, res) => {
  console.log("Hello");
  res.send("Message from user");
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
