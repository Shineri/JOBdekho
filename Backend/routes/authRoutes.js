import express from "express";

const router = express.Router();

//auth routes
router.get("/", (req, res) => {
  res.send("Hello from Node Js");
});

export default router;
