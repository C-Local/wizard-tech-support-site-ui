import { useState, useContext } from "react";
import "./Apply.css";
import Form from "../../components/Form/Form.jsx";
import "../../components/Form/Form.css";
import { AuthContext } from "../../components/App/App.jsx";

function Apply() {
  const [firstName, setFirstName] = useState(``);

  const [lastName, setLastName] = useState(``);

  const [emailAddress, setEmailAddress] = useState(``);

  const [phoneNumber, setPhoneNumber] = useState(``);

  const [coverLetter, setCoverLetter] = useState(``);

  const { applicationCount } = useContext(AuthContext);

  return (
    <div className="apply-body-container">
      {applicationCount !== null && (
        <p className="application-count-display">
          Total Applications: {applicationCount}
        </p>
      )}
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
          text: "Cover Letter",
          value: coverLetter,
          setter: setCoverLetter,
          placeholder: "Enter your cover letter...",
        }}
        fieldsObj={{
          firstName: firstName,
          lastName: lastName,
          emailAddress: emailAddress,
          phoneNumber: phoneNumber,
          coverLetter: coverLetter,
        }}
        formTitle={
          <h2 className="form-section-title">
            You Passed the Test!<br></br>You May Now Apply to Join the Order
          </h2>
        }
        collection={import.meta.env.VITE_FIREBASE_APPLY_FORM_COLLECTION}
        outputs={{
          submitting: "Sending your letter to the supreme spellcasters...",
          submitted:
            "Thank you for applying! A copy of what you sent to the elders will appear in the console and be available for your review.",
          greeting: `Most high greetings, ${firstName}! Free pro tip: don't forget to finish the application.`,
        }}
      ></Form>
    </div>
  );
}

export default Apply;
