import React from "react";
import direct from "../../../../assets/images/direct.png";

const PublishModal = () => {
  const navigate = () => {
    window.location.reload();
  };

  return (
    <div className="publish-modal">
      <div className="logo">
        <img src={direct} alt="direct" />
      </div>
      <h2 className="title">Your topic was successfully submitted!</h2>
      <p className="paragraph">
        We are very thankful that you are our community active member. It will
        appear in community forum as soon as we have an overview look at it
      </p>
      <button className="G-button" onClick={navigate}>
        ok
      </button>
    </div>
  );
};

export default PublishModal;
