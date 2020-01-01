import React from "react";
import CardImage from "../../assets/CardImage.png";
import "./articleCard.css";
import { Link } from "react-router-dom";

const ArticleCard = () => {
  return (
    <div className="articleCard_main">
      <div className="articlCard-head">
        <h3 className="articlCard-head-batchName">
          Batch Name Larger to check how it looks
        </h3>
        <h3 className="articleCard-head-time">6 mins read</h3>
      </div>
      <div className="articleCard-img-container">
        {/* <div className="articleCard-overlay">
          <div className="articlCard-overlay-foot"> */}
            <div className="articleCard-overlay">
              <h4 className="articleCard-reads">56 reads</h4>
            </div>
          {/* </div>
        </div> */}
        <img
          className="articleCard-img-container articleCard-img"
          src={CardImage}
        />
        <h2 className="articleCard-title">
          5: Creating mutations from Apollo-Client
        </h2>
        <div className="articleCard-footer">
          <h5 className="articleCard-footer-name">Kunal Gupta</h5>
          <h5 className="articleCard-footer-articleAge">3 Days ago</h5>
        </div>
      </div>
      {/* <div className="articleCard_image">
        <Link to={`./article/#`}>
          <img src="/" />
        </Link>
      </div>
      <div className="articleCard_name_div">
        <Link to={`./article/#`}>
          <h5 className="articleCard_name_link">"none"</h5>
        </Link>
      </div> */}
    </div>
  );
};

export default ArticleCard;
