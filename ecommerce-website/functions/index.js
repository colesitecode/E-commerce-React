const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('sk_test_51IZSBnDexwACSOCg8gF3BEcpHFaK0pFHvRs2wRNHzmCWE6KqRSUDh4QnWnC5qTx7cdB7bF7TaeT863NtZnOBGASH00N0n2ATsX')

//SETUP API

// - App config
const app = express();

// - MIDDLEWARES
app.use(cors({ origin: true}));
app.use(express.json());

// - API ROUTES
app.get('/',( request, response) => response.status(200).send('hello world'))

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  // console.log('Payment request recieved BOOM!!!! for this amount', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  })
  //ok -created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// - LISTEN COMMAND
exports.api = functions.https.onRequest(app);

//example endpoint
// http://localhost:5001/ecommerce-project-561b9/us-central1/api