import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { dataB } from "../../lib/firebase.js";

import "./Apply.css";

function Apply() {
  const [firstName, setFirstName] = useState(``);

  const [lastName, setLastName] = useState(``);

  const [emailAddress, setEmailAddress] = useState(``);

  const [phoneNumber, setPhoneNumber] = useState(``);

  const [coverLetter, setCoverLetter] = useState(``);

  const [submissionStatus, setSubmissionStatus] = useState("Unsubmitted");

  async function submitForm() {
    if (
      firstName !== "" &&
      lastName !== "" &&
      emailAddress !== "" &&
      phoneNumber !== "" &&
      coverLetter !== ""
    ) {
      try {
        setSubmissionStatus("Submitting");

        await addDoc(
          collection(
            dataB,
            import.meta.env.VITE_FIREBASE_APPLY_FORM_COLLECTION,
          ),
          {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
            coverLetter: coverLetter,
          },
        );

        console.log({
          firstName: firstName,
          lastName: lastName,
          emailAddress: emailAddress,
          phoneNumber: phoneNumber,
          coverLetter: coverLetter,
        });

        setFirstName("");
        setLastName("");
        setEmailAddress("");
        setPhoneNumber("");
        setCoverLetter("");

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
    <div className="apply-body-container">
      <h2 className="apply-section-title">
        You Passed the Test!<br></br>You May Now Apply to Join the Order
      </h2>
      <div className="apply-messager">
        <div className="apply-messager__field">
          <label className="apply-messager__label">First Name</label>
          <input
            className={
              submissionStatus === "Rejected" && firstName === ""
                ? "apply-messager__input submit-error"
                : "apply-messager__input"
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

        <div className="apply-messager__field">
          <label className="apply-messager__label">Last Name</label>
          <input
            className={
              submissionStatus === "Rejected" && lastName === ""
                ? "apply-messager__input submit-error"
                : "apply-messager__input"
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

        <div className="apply-messager__field">
          <label className="apply-messager__label">Email</label>
          <input
            className={
              submissionStatus === "Rejected" && emailAddress === ""
                ? "apply-messager__input submit-error"
                : "apply-messager__input"
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

        <div className="apply-messager__field">
          <label className="apply-messager__label">Phone</label>
          <input
            className={
              submissionStatus === "Rejected" && phoneNumber === ""
                ? "apply-messager__input submit-error"
                : "apply-messager__input"
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

        <div className="apply-messager__field cover-letter-field">
          <label className="apply-messager__label">Cover Letter</label>
          <textarea
            className={
              submissionStatus === "Rejected" && coverLetter === ""
                ? "apply-messager__input cover-letter-input submit-error"
                : "apply-messager__input cover-letter-input"
            }
            placeholder="Enter your cover letter..."
            onChange={(e) => {
              setCoverLetter(e.target.value);

              if (e.target.value !== "") {
                setSubmissionStatus("Unsubmitted");
              }
            }}
            value={coverLetter}
          ></textarea>
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
          Sending your letter to the high masters...
        </div>
      ) : submissionStatus === "Successful" ? (
        <div className="form-output">
          Thank you for applying! A copy of what you sent to the elders will
          appear in the console and be available for your review.
        </div>
      ) : submissionStatus === "Rejected" ? (
        <div className="form-output submit-error">
          Submit failed. One or more of the required fields are blank. Please
          fill in the rest of the required info and try submitting again.
        </div>
      ) : submissionStatus === "Failed" ? (
        <div className="form-output submit-error">
          Your submission was lost in transit. Please make sure there aren't
          international web restrictions or network issues happening in the area
          and try submitting again.
        </div>
      ) : (
        <div className="form-output">
          Most high greetings, {firstName}! Free pro tip: don't forget to finish
          the application.
        </div>
      )}
    </div>
  );
}

export default Apply;
