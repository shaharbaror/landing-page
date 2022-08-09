import emailjs from "@emailjs/browser";
import { useState } from "react";

const useEmail = () => {
  const [returnText, setReturnText] = useState("Email Sent!");


  const sendEmail = async (name, email, phone, message) => {

    const emailData = {
        fullname: name,
        email: email,
        phone: phone,
        message: message,
      };

    try {
      const response = await emailjs.send('service_lctjydq','template_wvsdbsc',emailData,'W2mZdSJLNFmz9ZDQu');
      //const response = await console.log("HI");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      setReturnText(error.message);
    }
  };

  return {
    returnText,
    sendEmail
  };
};

export default useEmail;
