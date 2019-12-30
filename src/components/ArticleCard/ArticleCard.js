import React from "react";
import CardImage from "../../assets/Rectangle.png";
import "./articleCard.css";
import { Link } from "react-router-dom";

const ArticleCard = ({ articleData }) => {
  return (
    <div className="articleCard_main">
      <div className="articleCard_image">
        <Link to={`./article/${articleData._id}`}>
          <img src={CardImage} />
        </Link>
      </div>
      <div className="articleCard_name_div">
        <Link to={`./article/${articleData._id}`}>
          <h5 className="articleCard_name_link">{articleData.title}</h5>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
