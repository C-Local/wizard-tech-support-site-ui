import { useState, useContext } from "react";
import { AuthPageContext } from "../App/App.jsx";
import { AuthContext } from "../App/App.jsx";
import "./Auth.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase.js";

function Auth() {
  const { authPageStatus, setAuthPageStatus } = useContext(AuthPageContext);

  const [emailAddress, setEmailAddress] = useState(``);

  const [password, setPassword] = useState(``);

  const [signInStatus, setSignInStatus] = useState("signed-out");

  const { isAuth, setAuth } = useContext(AuthContext);

  async function signIn() {
    if (
      password !== null &&
      password !== "" &&
      emailAddress !== null &&
      emailAddress !== ""
    ) {
      try {
        setSignInStatus("signing-in");
        await signInWithEmailAndPassword(auth, emailAddress, password);

        setPassword("");
        setEmailAddress("");

        setSignInStatus("signed-in");
        setTimeout(() => setAuthPageStatus(false), 500);
      } catch (error) {
        console.error("Error: ", error);
        setSignInStatus("sign-in failed");
      }
    } else if (emailAddress === "" || password === "") {
      setSignInStatus("sign-in rejected");
    }
  }

  return (
    <>
      {authPageStatus ? (
        <div className="auth-body-container">
          <div className="auth-prompt">
            <button
              className="close-button"
              onClick={() => {
                setAuthPageStatus(false);
                setSignInStatus("signed-out");
              }}
            >
              x
            </button>
            <p className="auth-prompt__title">Authenticate</p>
            {signInStatus === "signed-out" ? (
              <p className="auth-prompt__directions">
                Please sign in below using your credentials.
              </p>
            ) : signInStatus === "signed-in" ? (
              <p className="auth-prompt__directions">Sign-in confirmed.</p>
            ) : signInStatus === "signing-in" ? (
              <p className="auth-prompt__directions">Attempting sign-in...</p>
            ) : signInStatus === "sign-in rejected" ? (
              <p className="auth-prompt__directions error">
                Sign-in rejected. Ensure both fields are filled and try again.
              </p>
            ) : (
              <p className="auth-prompt__directions error">
                Sign-in failed. Check possible issues and try again.
              </p>
            )}
            <div className="auth-prompt__form">
              <div className="auth-prompt__form--field">
                <label className="auth-prompt__form--field-label">
                  Email Address:
                </label>
                <input
                  className={
                    signInStatus === "sign-in rejected" && emailAddress === ""
                      ? "auth-prompt__form--field-input empty-auth-field-error"
                      : "auth-prompt__form--field-input"
                  }
                  type="text"
                  placeholder="Enter your email address..."
                  value={emailAddress}
                  onChange={(event) => setEmailAddress(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key == "Enter") {
                      signIn();
                    }
                  }}
                />
              </div>
              <div className="auth-prompt__form--field">
                <label className="auth-prompt__form--field-label">
                  Password:
                </label>
                <input
                  className={
                    signInStatus === "sign-in rejected" && password === ""
                      ? "auth-prompt__form--field-input empty-auth-field-error"
                      : "auth-prompt__form--field-input"
                  }
                  type="password"
                  placeholder="Enter your password..."
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key == "Enter") {
                      signIn();
                    }
                  }}
                />
              </div>
            </div>
            <button className="auth-submit" onClick={signIn}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        ``
      )}
    </>
  );
}

export default Auth;
