import React, { useState, useRef } from "react";
import "./Contact.css";
import "./Success.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  //name state
  const [name, setname] = useState("");
  //email state
  const [email, setemail] = useState("");
  //message state
  const [message, setmessage] = useState("");

  //submitted
  const [submitted, setsubmit] = useState(false);

  //emailjs
  const form = useRef();

  //clear input
  const clearinput = () => {
    setname("");
    setemail("");
    setmessage("");
  }

  //change 'submitted' state
  const changesub = () => { setsubmit(!submitted); }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('', '', form.current, '')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    changesub();
    clearinput();
    console.log({ name, email, message });
  }

  return submitted ? (
    <div className="success">
      <div className="successcontents">
        <div className="checkcircle suc">
          <FontAwesomeIcon icon={faCheck} size={"3x"} className="check"> </FontAwesomeIcon>
        </div>
        <h3 className="submit suc">Success </h3>
        <p className="suc successmessage">Your message has been recieved. I’ll be in touch soon!</p>
        <button onClick={changesub} className="continue suc"> Continue </button>
      </div>
    </div>

  ) : (

    <div className="contact">
      <div className="contactcontents">
        <form ref={form} onSubmit={sendEmail}>
          <div className="contactmobile">
            <div className="formitem">
              <label className="section"> Name </label>

              <input
                type="text"
                className="inputvalue"
                name="name"
                value={name}
                onChange={(e) => setname(e.target.value)}>
              </input>

            </div>
            <div className="formitem">
              <label className="section"> Email </label>

              <input
                type="email"
                className="inputvalue"
                value={email}
                name="email"
                onChange={(e) => setemail(e.target.value)}>
              </input>
            </div>
          </div>

          <div className="formitem">
            <label className="section"> Message </label>
            <textarea
              className="inputvalue message"
              value={message}
              name="message"
              onChange={(e) => setmessage(e.target.value)}>
            </textarea>
          </div>

          <div className="formitem buttons">
            <button className="send button" type="submit"> Send</button>
            <div className="clear button" onClick={clearinput}> Clear </div>
          </div>

        </form>

        <div className="email">
          <div className="mailicon">
            <FontAwesomeIcon icon={faEnvelope} className="icons"> </FontAwesomeIcon>
          </div>
          <p className="emailtext">karuna.adh18@gmail.com</p>
        </div>
      </div>
    </div>

  );
}

export default Contact
