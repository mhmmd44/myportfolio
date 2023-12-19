import React, { useRef } from "react";
import "./Contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "xxxxxx",//your service id 
        "yyyyyy",//your template id
        form.current,
        "zzzzzz"//your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email send");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div className="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientsDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eos
          recusandae quod tempora expedita maxime illo assumenda eligendi eum
          reiciendis nihil unde consectetur, illum quaerat, est quidem et itaque
          ea.
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="Client" className="clientImg" />
          <img src={Adobe} alt="Client" className="clientImg" />
          <img src={Microsoft} alt="Client" className="clientImg" />
          <img src={Facebook} alt="Client" className="clientImg" />
        </div>
      </div>
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Plaese fillout the form below the discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your e-mail"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="facebook" className="link" />
            <img src={TwitterIcon} alt="twitter" className="link" />
            <img src={YouTubeIcon} alt="youtube" className="link" />
            <img src={InstagramIcon} alt="instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
