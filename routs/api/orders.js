import express from "express";

const ordersRouter = express.Router();

ordersRouter.get("/", (req, res) => {
  console.log("test");
  res.json({ res: "success" });
});

export default ordersRouter;
