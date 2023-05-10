import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.static("build"));

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
