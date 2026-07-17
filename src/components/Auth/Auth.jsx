import { useState, useContext } from "react";
import { AuthPageContext } from "../App/App.jsx";
import "./Auth.css";

function Auth() {
  const { authPageStatus, setAuthPageStatus } = useContext(AuthPageContext);

  return (
    <>
      {authPageStatus ? (
        <div className="auth-body-container">
          <div className="auth-prompt">
            <p className="auth-prompt__title">Authenticate</p>
            <p className="auth-prompt__subtitle">
              Please sign in below using your credentials.
            </p>
            <form className="auth-prompt__form">
              <div className="auth-prompt__form--field">
                <label className="auth-prompt__form--field-label">
                  Username:
                </label>
                <input
                  className="auth-prompt__form--field-input"
                  type="text"
                  placeholder="Enter your username..."
                />
              </div>
              <div className="auth-prompt__form--field">
                <label className="auth-prompt__form--field-label">
                  Password:
                </label>
                <input
                  className="auth-prompt__form--field-input"
                  type="password"
                  placeholder="Enter your password..."
                />
              </div>
              <button
                className="auth-submit"
                onClick={() => setAuthPageStatus(!authPageStatus)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        ``
      )}
    </>
  );
}

export default Auth;
