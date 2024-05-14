import express from "express";
import cors from "cors";
import moment from "moment";
import fs from "fs/promises";

import ordersRouter from "./routs/api/orders.js";

const app = express();

app.use(cors());

app.use(async (req, _, next) => {
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile(
    "./public/server.log",
    `${method} ${url} ${date}`,
    null,
    2
  );
  next();
});

app.use("/api/frames/orders", ordersRouter);

app.use(async (_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(3001, () => console.log("Server running 3001"));
