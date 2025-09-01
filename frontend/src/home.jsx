import React from 'react'
import { Box, Stack } from '@chakra-ui/react';
import Card from './Card'
import axios from "axios"


const home = () => {

  const checkoutHandler =async (amount ) => {

    const {data: {key}} = await axios.get("https://razorpay-payment-gateway-server.onrender.com/api/getkey")

    const {data:{order}} = await axios.post(
      'https://razorpay-payment-gateway-server.onrender.com/api/checkout', {
        amount
      })

      const options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Abhay Singh",
        description: "A Software Engineer",
        image: "https://avatars.githubusercontent.com/u/128255771?v=4",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "https://razorpay-payment-gateway-server.onrender.com/api/paymentverification",
        prefill: {
            name: "Your Name",
            email: "yourmail@example.com",
            contact: "999999999"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#3399cc"
        }
    };
    const razor = new window.Razorpay(options);
      razor.open();

  }

  return (
    <Box>

    <h1 style={{ textAlign: "center", marginTop: "30px", fontSize:"35px" }}>
      <b>Welcome to the Razorpay accepting payment (Designed by Abhay)</b>
    </h1>
    <h3 style={{ textAlign: "center", marginTop: "30px", fontSize:"25px", color:"red" }}>
      <b>Test Mode</b>
    </h3>
      <Stack  alignItems="center" justifyContent="center" direction={["column", "row"]}>
        
        <Card amount={9} img={"https://m.media-amazon.com/images/G/31/img18/Lawn_Garden/Ud/2024/GIF/Halo/1._CB563620586_.jpg"} checkoutHandler={checkoutHandler} />
        <Card amount={7} img={"https://m.media-amazon.com/images/I/61oCISLE+PL._SX679_.jpg"} checkoutHandler={checkoutHandler} />
        <Card amount={5} img={"https://m.media-amazon.com/images/I/61giwQtR1qL._SX679_.jpg"} checkoutHandler={checkoutHandler} />
        <Card amount={1} img={"https://m.media-amazon.com/images/I/51fbmWdbOfL._AC_SY400_.jpg"} checkoutHandler={checkoutHandler} />
        
      </Stack>

      <h2 style={{ textAlign: "center", marginTop: "35px", fontSize:"20px" , color:"green"}}>
          <b>Feel free to buy any product, this is actually designed for dummy payment</b>
      </h2>
      <h2 style={{ textAlign: "center", marginTop: "10px", fontSize:"20px" , color:"green"}}>
          Use Card number: 4111111111111111
      </h2>
    
    </Box>
    
  )
  

}
export default home;
