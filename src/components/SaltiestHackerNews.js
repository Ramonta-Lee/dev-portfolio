import React from 'react';
import Arrow from '../assets/icons8-right-35.svg';

const SaltiestHackerNews = () => {
  return (
    <section className="project">
      <div className="projectDescription">
        <h2 className="projectHeader">Saltiest Hacker News</h2>
        <p className="projectParagraph">
          Saltiest Hacker News is an informed newsfeed app. This application leverages machine learning to analyze Reddit posts to find the "saltiest" comments for your fun and amusement. Users can cultivate a collection of their favorite comments and share them to Twitter.
        </p>
        <ul className="projectUl">
          <li>
            Built from scratch in one week, with cross discipline teams of web and data science students
          </li>
          <li>
            Implemented cross-functionality with data science flask API 
          </li>
        </ul>
        <a
          href="https://github.com/Build-Week-Saltiest-Hacker-News-1/Front-End"
          target="blank"
        >
          <p className="projectParagraphLink">
            Checkout the code{' '}
            <img className="projectImage" src={Arrow} alt="arrow pointing right" />
          </p>
        </a>
        <a href="https://saltmine.netlify.app/" target="blank">
          <p className="projectParagraphLink">
            Checkout the app{' '}
            <img className="projectImage" src={Arrow} alt="arrow pointing right" />
          </p>
        </a>
      </div>
      <div className="projectPhotos"></div>
    </section>
  );
};

export default SaltiestHackerNews;