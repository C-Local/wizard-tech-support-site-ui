import { useState } from "react";

import "./Contact.css";

function Contact() {
  const [firstName, setFirstName] = useState(``);

  const [lastName, setLastName] = useState(``);

  const [emailAddress, setEmailAddress] = useState(``);

  const [phoneNumber, setPhoneNumber] = useState(``);

  const [submissionStatus, setSubmissionStatus] = useState("Unsubmitted");

  function submitForm() {
    if (
      firstName !== "" &&
      lastName !== "" &&
      emailAddress !== "" &&
      phoneNumber !== ""
    ) {
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
            id="first-name-input"
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
            id="last-name-input"
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
            id="email-address-input"
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
            id="phone-number-input"
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
      ) : submissionStatus === "Successful" ? (
        <div className="form-output">
          Thank you for submitting! A copy of the submitted form will appear in
          the console and be available for your review, if you have the mystical
          insight on what that is.
        </div>
      ) : submissionStatus === "Rejected" ? (
        <div className="form-output submit-error">
          Submit failed. One or more of the required fields are blank. Please
          fill in the rest of the requested info and try submitting again.
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
