const express = require("express");
const Razorpay = require("razorpay");

// const instance = require("../index.js")

const paymentRouter = express.Router();

// rezorpay instance
const instance = new Razorpay({
  key_id: process.env.razorpay_api_key,
  key_secret: process.env.razorpay_api_secret,
});
paymentRouter.post("/checkout", async (req, res) => {
  // console.log(req.body)
  try {
    const options = {
      amount: Number(req.body.amount * 100), // amount in the smallest currency unit
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    //   console.log(order)
    res.status(200).send({ msg: "ok", order });
  } catch (err) {
    res.status(400).send(err);
  }
});

paymentRouter.post("/check", async (req, res) => {
    console.log(req)
  res.status(200).send({ msg: "ok" });
});

paymentRouter.get("/getKey", async (req, res) => {
    res.status(200).send({ key:process.env.razorpay_api_key});
  });


// export
module.exports = {
  paymentRouter,
};
