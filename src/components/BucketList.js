import React from 'react';
import Arrow from '../assets/icons8-right-35.svg';

const BucketList = () => {
  return (
    <section className="labs">
      <div className="labsDescription">
        <h2 className="labsHeader">BucketList</h2>
        <p className="labsParagraph">
          A social media 
        </p>
        <ul className="labsUl">
          <li>
            Built from scratch in less than 8 weeks, with cross discipline teams
            (UX/UI, Data Science) in an agile enviornment
          </li>
          <li>
            Implemented Twitter's API enabling users to draft, schedule and post
            tweets to any of their linked accounts
          </li>
          <li>
            Led consultations with product stakeholders and real-world users in
            a SCRUM enviornment
          </li>
        </ul>
        <a
          href="https://github.com/Lambda-School-Labs/social-media-strategy-fe#readme"
          target="blank"
        >
          <p className="labsParagraphLink">
            Checkout the code{' '}
            <img className="labsImage" src={Arrow} alt="arrow pointing right" />
          </p>
        </a>
        <a href="https://www.so-me.net/" target="blank">
          <p className="labsParagraphLink">
            Checkout the app{' '}
            <img className="labsImage" src={Arrow} alt="arrow pointing right" />
          </p>
        </a>
      </div>
      <div className="labsPhotos"></div>
    </section>
  );
};

export default BucketList;
