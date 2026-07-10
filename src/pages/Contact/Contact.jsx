import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { dataB } from "../../lib/firebase.js";
import "./Contact.css";

function Contact() {
  const [firstName, setFirstName] = useState(``);

  const [lastName, setLastName] = useState(``);

  const [emailAddress, setEmailAddress] = useState(``);

  const [phoneNumber, setPhoneNumber] = useState(``);

  const [submissionStatus, setSubmissionStatus] = useState("Unsubmitted");

  async function submitForm() {
    if (
      firstName !== "" &&
      lastName !== "" &&
      emailAddress !== "" &&
      phoneNumber !== ""
    ) {
      try {
        setSubmissionStatus("Submitting");

        await addDoc(
          collection(
            dataB,
            import.meta.env.VITE_FIREBASE_CONTACT_FORM_COLLECTION,
          ),
          {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
          },
        );

        console.log({
          firstName: firstName,
          lastName: lastName,
          emailAddress: emailAddress,
          phoneNumber: phoneNumber,
        });

        setFirstName("");
        setLastName("");
        setEmailAddress("");
        setPhoneNumber("");

        setSubmissionStatus("Successful");
      } catch (error) {
        console.error("Error: ", error);

        setSubmissionStatus("Failed");
      }
    } else {
      setSubmissionStatus("Rejected");
    }
  }

  return (
    <div className="contact-body-container">
      <h2 className="contact-section-title">Contact the Elder Masters</h2>
      <div className="contact-messager">
        <div className="contact-messager__field">
          <label className="contact-messager__label">First Name</label>
          <input
            className={
              submissionStatus === "Rejected" && firstName === ""
                ? "contact-messager__input submit-error"
                : "contact-messager__input"
            }
            type="text"
            placeholder="Enter your first name..."
            onChange={(e) => {
              setFirstName(e.target.value);

              if (e.target.value !== "") {
                setSubmissionStatus("Unsubmitted");
              }
            }}
            value={firstName}
          ></input>
        </div>

        <div className="contact-messager__field">
          <label className="contact-messager__label">Last Name</label>
          <input
            className={
              submissionStatus === "Rejected" && lastName === ""
                ? "contact-messager__input submit-error"
                : "contact-messager__input"
            }
            type="text"
            placeholder="Enter your last name..."
            onChange={(e) => {
              setLastName(e.target.value);

              if (e.target.value !== "") {
                setSubmissionStatus("Unsubmitted");
              }
            }}
            value={lastName}
          ></input>
        </div>

        <div className="contact-messager__field">
          <label className="contact-messager__label">Email</label>
          <input
            className={
              submissionStatus === "Rejected" && emailAddress === ""
                ? "contact-messager__input submit-error"
                : "contact-messager__input"
            }
            type="text"
            placeholder="Enter your email address..."
            onChange={(e) => {
              setEmailAddress(e.target.value);

              if (e.target.value !== "") {
                setSubmissionStatus("Unsubmitted");
              }
            }}
            value={emailAddress}
          ></input>
        </div>

        <div className="contact-messager__field">
          <label className="contact-messager__label">Phone</label>
          <input
            className={
              submissionStatus === "Rejected" && phoneNumber === ""
                ? "contact-messager__input submit-error"
                : "contact-messager__input"
            }
            type="text"
            placeholder="Enter your phone number..."
            onChange={(e) => {
              setPhoneNumber(e.target.value);

              if (e.target.value !== "") {
                setSubmissionStatus("Unsubmitted");
              }
            }}
            value={phoneNumber}
          ></input>
        </div>
      </div>

      <button className="submit-button" onClick={submitForm}>
        Submit
      </button>

      {(firstName === "" || firstName === null) &&
      submissionStatus === "Unsubmitted" ? (
        ""
      ) : submissionStatus === "Submitting" ? (
        <div className="form-output">
          Sending your message to the high masters...
        </div>
      ) : submissionStatus === "Successful" ? (
        <div className="form-output">
          Thank you for your submission! A copy of the submitted form will
          appear in the console and be available for your review, if you have
          the mystical insight on what that is.
        </div>
      ) : submissionStatus === "Rejected" ? (
        <div className="form-output submit-error">
          Submit failed. One or more of the required fields are blank. Please
          fill in the rest of the requested info and try submitting again.
        </div>
      ) : submissionStatus === "Failed" ? (
        <div className="form-output submit-error">
          Your submission was lost in transit. Please make sure there aren't
          international web restrictions or network issues happening in the area
          and try submitting again.
        </div>
      ) : (
        <div className="form-output">
          Hello, {firstName}! Free pro tip: don't forget to finish the form.
        </div>
      )}
    </div>
  );
}

export default Contact;
