import React from 'react';
import Arrow from '../assets/icons8-right-35.svg';

const MiracleMessages = () => {
  return (
    <section className="project">
      <div className="projectDescription">
        <h2 className="projectHeader">Miracle Messages</h2>
        <p className="projectParagraph">
          Miracle Messages is a web application that helps reconnect the
          homeless with their loved ones. This application utilizes a Postgres
          database to store volunteer information in order to connect volunteers
          with local chapters. Users can join local chapters, and connect with
          other volunteers in effort to help reunite the homeless with their
          loved ones.
        </p>
        <ul className="projectUl">
          <li>
            Created database schema and built database utilizing PostgreSQL
          </li>
          <li>
            Automated 100% of the volunteer sign-up process
          </li>
        </ul>
        <a
          href="https://github.com/Ramonta-Lee/miracle-messages-be"
          target="blank"
        >
          <p className="projectParagraphLink">
            Checkout the code{" "}
            <img
              className="projectImage"
              src={Arrow}
              alt="arrow pointing right"
            />
          </p>
        </a>
        <a
          href="https://production.d1v4uoi0wi2hmy.amplifyapp.com/"
          target="blank"
        >
          <p className="projectParagraphLink">
            Checkout the app{" "}
            <img
              className="projectImage"
              src={Arrow}
              alt="arrow pointing right"
            />
          </p>
        </a>
      </div>
      <div className="projectPhotos"></div>
    </section>
  );
};

export default MiracleMessages;