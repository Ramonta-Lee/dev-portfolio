import React from "react";
import Arrow from "../assets/icons8-right-35.svg";

const BucketList = () => {
  return (
    <section className="labs">
      <div className="labsDescription">
        <h2 className="labsHeader">BucketList</h2>
        <p className="labsParagraph">
          Bucket List is an app that makes it easy to plan and organize your
          dreams and aspirations for travel or accomplishments. You can add
          photos, journal entries, voice recordings and videos - memories of
          your adventures that you can share with friends and family.
        </p>
        <ul className="labsUl">
          <li>
            Built from scratch in less than 1 week, with cross discipline teams
            (UX/UI, IOS) in an agile environment
          </li>
          <li>Built responsive site for all devices</li>
        </ul>
        <a
          href="https://github.com/Build-week-bucket-list-3/Marketing"
          target="blank"
        >
          <p className="labsParagraphLink">
            Checkout the code{" "}
            <img className="labsImage" src={Arrow} alt="arrow pointing right" />
          </p>
        </a>
        <a href="https://bucket-list-marketing.netlify.app" target="blank">
          <p className="labsParagraphLink">
            Checkout the app{" "}
            <img className="labsImage" src={Arrow} alt="arrow pointing right" />
          </p>
        </a>
      </div>
      <div className="labsPhotos"></div>
    </section>
  );
};

export default BucketList;
