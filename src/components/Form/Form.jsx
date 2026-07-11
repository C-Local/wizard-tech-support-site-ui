import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { dataB } from "../../lib/firebase.js";
import "./Form.css";

function Form(props) {
  const [submissionStatus, setSubmissionStatus] = useState("Unsubmitted");

  const fields = [
    props.firstField,
    props.secondField,
    props.thirdField,
    props.fourthField,
    props.fifthField,
  ];

  async function submitForm() {
    if (
      props.firstField.value !== "" &&
      props.secondField.value !== "" &&
      props.thirdField.value !== "" &&
      props.fourthField.value !== "" &&
      props.fifthField.value !== ""
    ) {
      try {
        setSubmissionStatus("Submitting");

        await addDoc(collection(dataB, props.collection), props.fieldsObj);

        console.log(props.fieldsObj);

        props.firstField.setter("");
        props.secondField.setter("");
        props.thirdField.setter("");
        props.fourthField.setter("");
        props.fifthField.setter("");

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
    <div className="form-body-container">
      {props.formTitle}
      <div className="form-messager">
        {fields.map((el, i) => (
          <div
            className={
              el.type !== "text area"
                ? "form-messager__field"
                : "form-messager__field text-area-field"
            }
            key={i}
          >
            <label className="form-messager__label">{el.text}</label>
            {el.type === "text area" ? (
              <textarea
                className={
                  submissionStatus === "Rejected" && el.value === ""
                    ? "form-messager__input text-area-input submit-error"
                    : "form-messager__input text-area-input"
                }
                placeholder={el.placeholder}
                onChange={(e) => {
                  el.setter(e.target.value);

                  if (e.target.value !== "") {
                    setSubmissionStatus("Unsubmitted");
                  }
                }}
                value={el.value}
              ></textarea>
            ) : (
              <input
                className={
                  submissionStatus === "Rejected" && el.value === ""
                    ? "form-messager__input submit-error"
                    : "form-messager__input"
                }
                type="text"
                placeholder={el.placeholder}
                onChange={(e) => {
                  el.setter(e.target.value);

                  if (e.target.value !== "") {
                    setSubmissionStatus("Unsubmitted");
                  }
                }}
                value={el.value}
              ></input>
            )}
          </div>
        ))}
      </div>

      <button className="submit-button" onClick={submitForm}>
        Submit
      </button>

      {(props.firstField.value === "" || props.firstField.value === null) &&
      submissionStatus === "Unsubmitted" ? (
        ""
      ) : submissionStatus === "Submitting" ? (
        <div className="form-output">{props.outputs.submitting}</div>
      ) : submissionStatus === "Successful" ? (
        <div className="form-output">{props.outputs.submitted}</div>
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
        <div className="form-output">{props.outputs.greeting}</div>
      )}
    </div>
  );
}

export default Form;
