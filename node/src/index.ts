import express from "express";

import {BODY_SIZE_LIMIT, PORT} from "./constants";

const app = express();
app.use(express.json({ limit: BODY_SIZE_LIMIT }));

app.post("/", (req, res) => {
  // TODO
  res.send({success: true});
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
