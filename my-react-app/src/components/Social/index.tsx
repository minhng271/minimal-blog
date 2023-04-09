import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faPinterestP,
  faTwitter,
  faVimeo,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";

const Social = () => {
  return (
    <div>
      <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
      <FontAwesomeIcon className="social-icon" icon={faGooglePlusG} />
      <FontAwesomeIcon className="social-icon" icon={faPinterestP} />
      <FontAwesomeIcon className="social-icon" icon={faTwitter} />
      <FontAwesomeIcon className="social-icon" icon={faVimeo} />
    </div>
  );
};

export default Social;
