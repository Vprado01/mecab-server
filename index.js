const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 9292;

app.post("/api", (req, res) => {
    console.log("asdasdsad")
  const sentence = req.body.sentence;
  if (!sentence) {
    return res.status(400).json({ error: "Request body field 'sentence' is empty" });
  }

  exec(`echo "${sentence}" | mecab`, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({ result: stdout });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
