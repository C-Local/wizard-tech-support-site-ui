import { useState } from "react"

import "./Contact.css"

function Contact() {

    const [greeting, setGreeting] = useState(``);

    function greetWhileContacting(e) {
        if (e.target.value !== null && e.target.value !== "") {
            setGreeting((<div className="greeting">Hello, {e.target.value}! Free pro tip: don't forget to finish the form with the fields below</div>))
        }
        else {
            setGreeting((<></>))
        }

    }

    function submitForm() {

        const firstName = document.getElementById("first-name-input").value;

        if (firstName !== "" && firstName !== null) {
        
            setGreeting((<div className="greeting">Thank you for submitting, {firstName}! A copy of the submitted form will appear in the console and be available for your review, if you have the mystical insight on what that is.</div>))
        } else {
            setGreeting((<div className="greeting">Thank you for submitting! It appears that you forgot or we lost the first name and possibly more information somehow - a copy of the submitted form will appear in the console and be available for your review, if you have the mystical insight on what that is.</div>))
        }
        
        const fieldsObj = {
            firstName: (firstName) ? firstName : "",
            lastName: (document.getElementById("last-name-input").value) ? document.getElementById("last-name-input").value : "",
            email: document.getElementById("email-address-input").value ? document.getElementById("email-address-input").value : "",
            phone: document.getElementById("phone-number-input").value ? document.getElementById("phone-number-input").value : "",

        }

        document.getElementById("first-name-input").value = "";
        document.getElementById("last-name-input").value = "";
        document.getElementById("email-address-input").value = "";
        document.getElementById("phone-number-input").value = "";

        console.log(fieldsObj)
    }


return(<div className="contact-body-container">
    <h2 className="contact-section-title">Contact the Elder Masters</h2>
    <div className="contact-messager-part-one">

        <div className="contact-messager__field">
        <label className="contact-messager__label">First Name</label>
        <input id="first-name-input" className="contact-messager__input" type="text" placeholder="Enter your first name..." onChange={() => greetWhileContacting(event)}></input>
        </div>

        <div className="contact-messager__field">
        <label className="contact-messager__label">Last Name</label>
        <input id="last-name-input" className="contact-messager__input" type="text" placeholder="Enter your last name..."></input>
        </div>

    </div>

    {greeting}

    <div className="contact-messager-part-two">
    
        <div className="contact-messager__field">
        <label className="contact-messager__label">Email</label>
        <input id="email-address-input" className="contact-messager__input" type="text" placeholder="Enter your email address..."></input>
        </div>

        <div className="contact-messager__field">
        <label className="contact-messager__label">Phone</label>
        <input id="phone-number-input" className="contact-messager__input" type="text" placeholder="Enter your phone number..."></input>
        </div>

    </div>

    <button className="submit-button" onClick={submitForm}>Submit</button>
</div>)
}

export default Contact