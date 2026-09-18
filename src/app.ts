import express from "express";
const app = express();

app.get("/", (req, res) => {
  return res.send("welcome to auth server");
});

export default app;
