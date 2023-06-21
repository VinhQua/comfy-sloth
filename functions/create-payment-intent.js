//domain/.netlify/functions/hello/create-payment-intent
require("dotenv").config();

const stripe = require("stripe")(process.env.VITE_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  console.log(event);
  //   console.log(context);
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);

    const calculateOrderAmount = (items) => {
      // Replace this constant with a calculation of the order's amount
      // Calculate the order total on the server to prevent
      // people from directly manipulating the amount on the client
      return shipping_fee + total_amount;
    };
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "usd",
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(cart),
    };
  }
  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
};
