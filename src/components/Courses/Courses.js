import React from "react";
import "./Courses.css";

const Courses = () => {
  return (
    <div className="courses-container" id="courses">
      <div className="courses">
          <div className="courses-heading">Courses We Offer</div>
          <div className="courses-image">
            <img
              src="https://ouch-cdn2.icons8.com/fMH8EH4H7_q0uKvQLW-xh6imzKw6t1QuHikz6EQK6gY/rs:fit:256:171/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzk2/LzlhMTFlM2FjLWNk/YmYtNGYyMC1iNTQy/LTU4ZjMyMGE3MDky/Yy5zdmc.png"
              alt=""
            />
          </div>
          <div className="courses-subheading">English Language Program</div>
          <div className="courses-types">
            <div className="course-type">
              <div className="course-heading">Basic Level</div>
              <div className="course-details">
                Specially designed for students who have little or no background
                in English language. The course will provide a solid foundation
                for communicating in the language focusing on daily greetings,
                vocabulary, basic conversation, basic grammar and simple
                sentence writing as well.
              </div>
              <div className="course-duration">
                <span>
                  <div>Course Duration:</div>
                  <div>Approx 6 weeks(20 sessions 1.5 hrs each)</div>
                </span>
              </div>
            </div>
            <div className="course-type">
              <div className="course-heading">Intermediate Level</div>
              <div className="course-details">
                Designed for students who have some prior knowledge of English
                language. Practice will facilitate focusing on communication,
                expressions, idioms, and how to use them in real life. More
                advanced grammar and vocabulary will be stressed through
                real-life activities that are relevant to the students' goals.
              </div>
              <div className="course-duration">
                <span>
                  <div>Course Duration:</div>
                  <div>Approx 6 weeks(20 sessions 1.5 hrs each)</div>
                </span>
              </div>
            </div>
            <div className="course-type">
              <div className="course-heading">Advance Level</div>
              <div className="course-details">
                Focuses on achieving highly effective communication in various
                situations through guided discussions and work targeted to the
                students' goals. Developing fluent accent while speaking is one
                of the objectives at this level. Proficiency is achieved through
                individualized attention that reduces and eliminates weaknesses
                in oral and written communication skills.
              </div>
              <div className="course-duration">
                <span>
                  <div>Course Duration:</div>
                  <div>Approx 6 weeks(20 sessions 1.5 hrs each)</div>
                </span>
              </div>
            </div>
          </div>
          <div className="courses-desc">
            Specially designed courses and contents with interactive components
            are delivered by Professional and most enthusiastic trainers to set
            a benchmark in language education. Our goal is to provide high
            quality, easy to follow, multi-device lesson plans that can be
            accessed from anywhere, anytime. We simply want to make learning
            more accessible and affordable.
          </div>
        </div>
    </div>
  );
};

export default Courses;
