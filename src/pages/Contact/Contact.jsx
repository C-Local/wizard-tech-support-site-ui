import { useState } from "react";
import "./Contact.css";
import Form from "../../components/Form/Form.jsx";
import "../../components/Form/Form.css";

function Contact() {
  const [firstName, setFirstName] = useState(``);

  const [lastName, setLastName] = useState(``);

  const [emailAddress, setEmailAddress] = useState(``);

  const [phoneNumber, setPhoneNumber] = useState(``);

  const [request, setRequest] = useState(``);

  return (
    <Form
      firstField={{
        type: "text",
        text: "First Name",
        value: firstName,
        setter: setFirstName,
        placeholder: "Enter your first name...",
      }}
      secondField={{
        type: "text",
        text: "Last Name",
        value: lastName,
        setter: setLastName,
        placeholder: "Enter your last name...",
      }}
      thirdField={{
        type: "text",
        text: "Email",
        value: emailAddress,
        setter: setEmailAddress,
        placeholder: "Enter your email address...",
      }}
      fourthField={{
        type: "text",
        text: "Phone",
        value: phoneNumber,
        setter: setPhoneNumber,
        placeholder: "Enter your phone number...",
      }}
      fifthField={{
        type: "text area",
        text: "Request",
        value: request,
        setter: setRequest,
        placeholder: "Enter your request...",
      }}
      fieldsObj={{
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
        request: request,
      }}
      formTitle={
        <h2 className="form-section-title">Contact the Elder Masters</h2>
      }
      collection={import.meta.env.VITE_FIREBASE_CONTACT_FORM_COLLECTION}
      outputs={{
        submitting: "Sending your message to the high masters...",
        submitted:
          "Thank you for your submission! A copy of the submitted form will appear in the console and be available for your review, if you have the mystical insight on what that is.",
        greeting: `Hello, ${firstName}! Free pro tip: don't forget to finish the form.`,
      }}
    ></Form>
  );
}

export default Contact;
