import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isChatOpen, toggleChatWindow] = useState(false);

  const [userInput, updateUserInput] = useState("");

  const [userMessages, updateUserMessages] = useState([]);

  const [isChatEnabled, toggleChatAbility] = useState(true);

  const botMessages = [
      "Sorry, I don't understand - can you repeat that request?",
      "I wasn't able to hear that - please increase the volume on your microphone and try again.",
      "I am unable to answer that - would you like me to connect you to a human representative?",
      "Hello! I am Wilbur, a human support agent powered by coffee and donuts - how can I help you? :)",
      "Sorry, I apologize. I attempted to impersonate a human representative instead of connecting you to one - do you want me to connect you to a real human representative now?",
      "Unfortunately, I am not actually able to reach out to human support - would you like me to help you draft an email to the human support team?",
      'Ok, here is an email address format to use for the subject line, once you find the correct contact information: "supportteamname@domainaddresshere". Make sure to include as much detail pertaining to the problem as possible within the body of the message. The sign-off should be professional and precede a signature block with your contact details.',
      "I'm sorry, but I have to end this conversation. You have violated interaction policies. To learn more about interaction policies and steps to take after incurring violations, visit this link: https://google.com",
      ];

  return (
    <>
      <div className="header-container">
        <NavLink className="logo" to="/" onClick={() => {
                toggleChatWindow(false);
                updateUserMessages([]);
                toggleChatAbility(true);
                updateUserInput("");
                document.getElementById("hero-card")
                ? document.getElementById("hero-card").classList.remove("flip")
                : "";
            }

            }></NavLink>

        <nav className="header-nav">
          <NavLink className="header-nav__link" to="/">
            Home
          </NavLink>
          <NavLink className="header-nav__link" to="/contact">
            Contact
          </NavLink>
          <NavLink className="header-nav__link" to="/about-us">
            About Us
          </NavLink>

          <a
            className="fake-chatbot-button"
            onClick={() => toggleChatWindow(!isChatOpen)}
          >
            &#129302;
          </a>
        </nav>
      </div>

      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-greeting__container">
            <p className="chat-greeting">
              Hello! I am Wizzly, a digital support agent powered by the Flame
              of Andier - how can I help you? {":)"}
            </p>
          </div>
          <div className="chat-dialogue">{userMessages.map((el, i) => (
            <div className="chat-section" key={i}>
              <p className="chat-section__request">{el}</p>
              <p className="chat-section__response">{botMessages[i]}</p>
            </div>
          ))}</div>
          <div className="chat-window__bottom">
            <input
              id="chat-input"
              className="chat-window__input"
              value={userInput}
              onChange={e => updateUserInput(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {

                    if (event.target.value !== "" && event.target.value !== null) {

                        updateUserMessages(u => [...u, event.target.value]);

                        if (userMessages.length <= 7) {

                            updateUserInput("");
                            
                        }
                        
                        if (userMessages.length === 7) {

                            toggleChatAbility(false);
                        }

                        }

                }
              }}
              disabled={isChatEnabled ? false : true}
              placeholder={
                isChatEnabled ? "Enter a message..." : "Chat disabled."
              }
            ></input>
            <button
              className="chat-window__submit"
              onClick={() => {
                if (userInput !== "" && userInput !== null) {

                        updateUserMessages(u => [...u, userInput]);

                        if (userMessages.length <= 7) {

                            updateUserInput("");
                            
                        }
                        
                        if (userMessages.length === 7) {

                            toggleChatAbility(false);
                        }

                        }
              }}
              disabled={isChatEnabled ? false : true}
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Header;
