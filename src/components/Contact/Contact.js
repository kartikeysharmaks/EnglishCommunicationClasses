import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-heading">Contact Us</div>
      <div className="contact">
        <div className="contact-image">
          <img
            src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg"
            alt=""
          />
        </div>
        <div className="contact-info">
        <div className="message">
          <div className="messageimage">
            <img
              src="https://media.istockphoto.com/vectors/chat-messages-notification-on-smartphone-vector-illustration-flat-vector-id1026973286?k=6&m=1026973286&s=612x612&w=0&h=ua4XDcaKY48J9oXoiWiKjXkSAPSBFB1hn7x4EFwvfAE="
              alt=""
            />
            <a href="mailto:tanushi1120@gmail.com">tanushi1120@gmail.com</a>
          </div>
        </div>
        <div className="message">
          <div className="messageimage">
            <img
              src="https://media.istockphoto.com/vectors/incoming-call-on-smartphone-screen-vector-id1056955604?k=6&m=1056955604&s=170667a&w=0&h=kWW8gt-9AiQiHoWP0GyFjrjhVxW7bPTww18m1TsBwAU="
              alt=""
            />
            <a href="tel:+91 9760338812">+91 9760338812</a>
          </div>
        </div>
        </div>
      </div>
      <div className="dropmessage">
       <div className="dropmessage1"> Write to us / Drop a message / Give a feedback </div>
        <div className="dropmessage2">On the above handles with a valid email, your full name, and contact details</div>
      </div>
    </div>
  );
};

export default Contact;
