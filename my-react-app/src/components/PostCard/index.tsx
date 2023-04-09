import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";

const PostCard = (props) => {
  const { item } = props;
  // console.log(item.Category);

  return (
    <div className="post-card">
      <div className="post-banner">
        <img src={item.Banner} alt="" />
      </div>
      <div className="post-content">
        <h3 className="post-title">{item.Title}</h3>
        <div className="information">
          <div className="author-avatar">
            <img src="../../public/images/post-avatar-author.jpeg" alt="" />
          </div>
          <span className="post-information">{item.AuthorName}</span>
          <span className="post-information">{item.CreateAt}</span>
          {item.Category.map((cate) => (
            <span className="post-information">{cate}</span>
          ))}
        </div>
        <p className="post-text">{item.Content}</p>
        <div className="social-share-post">
          <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
          <FontAwesomeIcon className="social-icon" icon={faGooglePlusG} />
          <FontAwesomeIcon className="social-icon" icon={faPinterestP} />
          <FontAwesomeIcon className="social-icon" icon={faTwitter} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
