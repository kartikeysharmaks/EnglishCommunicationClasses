import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container" id="about">
        <div className="about">
          <div className="about-heading">Who are we?</div>
          <div className="about-details">
           EnglishGo is an innovative online platform, which is setup to create the most
            efficient English courses. We always think outside the box and we
            strive to make online learning on par or even higher quality than
            traditional English classes. Our mission is to make studying English
            very easy and fun process. The Academy provides year-round intensive
            Language instruction to youth, international students, working
            executives, professionals, businessmen and women, and visitors who
            wish to improve communication skills in english language. The
            combination of a thriving research environment and teaching
            excellence makes this a great place to study. Increased global
            economic and cultural integration has created a growing demand for
            good english communication skills. In response, offers Intensive
            English language courses that will prepare you to communicate in
            this language within a short period of time. Our programs are
            designed for groups at all levels.
          </div>
          <div className="key-features">Key Features</div>
          <div className="about-images">
            <div className="about-image">
              <img
                src="https://ouch-cdn2.icons8.com/sxEWs88UsJIaYvxhKt02oZWPVQLgI-4gZR3dGHDxKs0/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjM4/LzhhZDk5OTcyLTQ4/MWEtNGNiNC04OTlh/LTgxYzJiYjBjZWU1/OS5wbmc.png"
                alt=""
              />
              <p>Proper Guidance & Counselling</p>
            </div>
            
            <div className="about-image">
              <img
                src="https://ouch-cdn2.icons8.com/KIuf6hOE8e44ymy9B06qVhB_2kRVBItPLnBD6PobOx8/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNTU0/LzhiYTljMTA0LTFk/ZWYtNDU0Ni1iMjVi/LTQ2YjFkOGMwOTU1/OC5zdmc.png"
                alt=""
              />
              <p>Excellent Study Material</p>
            </div>
           
            <div className="about-image">
              <img
                src="https://ouch-cdn2.icons8.com/9KY-Mxm620GzN8JCVPBdc_0_DmsRxtpqTzVL2IVBWDA/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzEv/OGE2YTZiZTEtZGY2/Yy00ODJlLThmMDUt/MmUwODlhYjA4M2Y1/LnN2Zw.png"
                alt=""
              />
              <p>Strict and Disciplined Mentors</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AboutUs;
