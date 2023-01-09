import React from "react";
import ScreenText from "../ScreenText/ScreenText";
import "./Tagline.css";

const Tagline = () => {
  return (
    <div className="tagline-container">
      <div className="tagline-components">
        <div className="tagline-element">
          <ScreenText
            heading="Beautifully crafted English online courses."
            subheading="By Special Faculties"
          />
          <div className="tagline-image">
            <img
              src="https://yi-files.s3.eu-west-1.amazonaws.com/products/910000/910230/1544246-full.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="whatyoulearn">
          <p>What you'll learn</p>
          <ul>
            <li>
              You will learn over 1000 vital English words, expressions and
              idioms, and how to use them in real life.
            </li>
            <li>
              You will learn to think in English and to speak English fluently.
              (in Intermediate level)
            </li>
            <li>
              You will learn to read in English and to spell English words
              intuitively.
            </li>
            <li>
              You will learn to understand movies and TV shows in English.
            </li>
            <li>
              After the course, you can travel the world freely, without a
              language barrier
            </li>
            <li>
              You will learn the most important English grammar with tons of
              English-speaking practice.
            </li>
            <li>
              After the course, you can start preparing for English language
              tests like TOEFL, IELTS, GMAT etc.
            </li>
          </ul>
        </div>

        <div className="tagline">
          “Language is not a genetic gift, it is a social gift. Learning a new
          language is becoming a member of the club- the community of speakers
          of that language.” - Frank Smith.
        </div>
      </div>
    </div>
  );
};

export default Tagline;
