const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQWQGKSR1rfXVHWX9A8zpILBtdWziYiVC6dZ3eVTCWIOkkumBxEf5dOpd3QAmcJxhcd0it9D22zx7gCdCyQNMhL00HV36Mjua"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));
//Listen command
exports.api = functions.htts.onRequest(app);
