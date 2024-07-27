import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <h2>Welcome to Bookify</h2>
        <p>
          Our app is designed to help you manage your book collection with ease.
          Whether you are an avid reader, a librarian, or just someone who loves
          books, our app provides all the tools you need to keep your collection
          organized.
        </p>
        <p>
          With features like book tracking, reviews, ratings, and
          recommendations, you can easily keep track of what you've read, what
          you want to read, and share your thoughts with others.
        </p>
      </div>
    </div>
  );
};

export default About;
