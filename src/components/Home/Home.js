import React from "react";
import Navbar from "../Navbar/Navbar";
import ScreenText from "../ScreenText/ScreenText";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <Navbar />
      <div className="home">
        <div className="home-element">
          <ScreenText
            heading="Learn Anywhere. Learn Anytime."
            subheading="With Experts English Trainers."
          />
          <div className="home-page-image">
            <img
              src="https://media.istockphoto.com/vectors/online-school-education-at-home-quarantine-concept-tiny-student-vector-id1285857854?k=20&m=1285857854&s=612x612&w=0&h=ytDl4GMgCwiVIfc0qNqG9KCaYbNk1485up_1cFxILaU="
              alt=""
            />
          </div>
        </div>
        <div className="right-image">
          <img src="https://media.istockphoto.com/vectors/online-digital-educational-technologies-virtual-study-elearning-tiny-vector-id1281356049?k=20&m=1281356049&s=612x612&w=0&h=QjwxRDiArmqGE2FnaAhs6q6obKRdh6Iu4lns_e8-B7I=" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
