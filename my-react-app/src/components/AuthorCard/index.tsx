import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";

const AuthorCard = (props) => {
  console.log(props);
  const { item } = props;

  return (
    <div className="author-card">
      <div className="author-image">
        <img src={item.Avatar} alt="" />
      </div>
      <div className="author-card-introduction">
        <h3>{item.Name}</h3>
        <p className="position">{item.Position}</p>
        <div className="list-social-connect">
          <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
          <FontAwesomeIcon className="social-icon" icon={faPinterestP} />
          <FontAwesomeIcon className="social-icon" icon={faTwitter} />
          <FontAwesomeIcon className="social-icon" icon={faInstagram} />
        </div>
        <p className="author-url">Read Articles</p>
      </div>
    </div>
  );
};

export default AuthorCard;
