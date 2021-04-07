const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe") ('sk_test_51HQrchGKUryRfOQYZXxBCiRaEAbF1LqFr6Y3zFOvmX7FMSfTIzEWjgc4gh0bFaNkdFljiRtq00fihN1R7eq5ruhO00FM38cKHK')


//API 
// App Config
const app = express();

// Middlewares
app.use(cors({origin:true}));
app.use(express.json());
//API routes
app.get('/' ,(request,response)=> response.status(200).send('Hello World    '))
app.post('/payments/create',async(request,response)=>{
    const total = request.query.total;
    console.log('Payment Request Received', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount :total,
        currency :"usd",
    })
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})
// Listen Command
exports.api= functions.https.onRequest(app)