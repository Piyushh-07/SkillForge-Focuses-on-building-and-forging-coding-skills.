const express = require("express");
const router = express.Router();

router.post("/order", (req, res) => {
  res.json({ success: true, message: "Payments disabled" });
});

router.post("/verify", (req, res) => {
  res.json({ success: true, message: "Payment verification disabled" });
});

module.exports = router;
