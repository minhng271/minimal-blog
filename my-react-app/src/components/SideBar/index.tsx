import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Category from "../Category";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="widget-text">
        <div className="about-me section-margin-bottom">
          <h3 className="title">
            <span className="widget-head-text">About Me</span>
            <span className="widget-head-divider"></span>
          </h3>
          <div className="widget-image">
            <img src="../../public/images/about-image.png" alt="" />
          </div>
          <p className="description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated.
          </p>
          <p className="read-more">
            <span>more about me</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </p>
        </div>
        <div className="widget-form section-margin-bottom">
          <h3 className="widget-form-title">Follow Us</h3>
          <div className="list-social-network">
            <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
            <FontAwesomeIcon className="social-icon" icon={faPinterestP} />
            <FontAwesomeIcon className="social-icon" icon={faSkype} />
            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
          </div>
          <h3 className="widget-form-title">Newsletter</h3>
          <p> Fill your email below to subscribe to my newsletter</p>
          <form className="subscription-minimal">
            <input className="email" type="email" placeholder="Email" />
            <input className="submit" type="submit" value="Subscribe" />
          </form>
        </div>
        <div className="popular-post-widget section-margin-bottom">
          <h3 className="title">
            <span className="widget-head-text">Popular Post</span>
            <span className="widget-head-divider"></span>
          </h3>
          <div className="popular-post-widget-wrap">
            <div className="popular-post-widget-content">
              <div className="popular-post-image">
                <img src="../../public/images/background-post.jpg" alt="" />
              </div>
              <div className="popular-post-content">
                <p className="title">The Most Beautiful Green Field on Earth</p>
                <p className="information">
                  <span className="author">Paul Newman</span>
                  <span className="date">July 25, 2019</span>
                </p>
              </div>
            </div>
            <div className="popular-post-widget-content">
              <div className="popular-post-image">
                <img src="../../public/images/background-post.jpg" alt="" />
              </div>
              <div className="popular-post-content">
                <p className="title">The Most Beautiful Green Field on Earth</p>
                <p className="information">
                  <span className="author">Paul Newman</span>
                  <span className="date">July 25, 2019</span>
                </p>
              </div>
            </div>
            <div className="popular-post-widget-content">
              <div className="popular-post-image">
                <img src="../../public/images/background-post.jpg" alt="" />
              </div>
              <div className="popular-post-content">
                <p className="title">The Most Beautiful Green Field on Earth</p>
                <p className="information">
                  <span className="author">Paul Newman</span>
                  <span className="date">July 25, 2019</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-banner section-margin-bottom">
          <img src="../../public/images/banner-600.jpg" alt="" />
        </div>
        <div className="category-wrapper section-margin-bottom">
          <h3 className="title">
            <span className="widget-head-text">Category</span>
            <span className="widget-head-divider"></span>
          </h3>
          <Category />
        </div>
        <div className="tags section-margin-bottom">
          <h3 className="title">
            <span className="widget-head-text">Tags</span>
            <span className="widget-head-divider"></span>
          </h3>
          <ul className="tag-list">
            <li className="tag-item">
              <a>Beach</a>
            </li>
            <li className="tag-item">
              <a>Dress</a>
            </li>
            <li className="tag-item">
              <a>Fashion</a>
            </li>
            <li className="tag-item">
              <a>Food</a>
            </li>
            <li className="tag-item">
              <a>Gadget</a>
            </li>
            <li className="tag-item">
              <a>Holiday</a>
            </li>
            <li className="tag-item">
              <a>Nature</a>
            </li>
            <li className="tag-item">
              <a>Ocean</a>
            </li>
            <li className="tag-item">
              <a>Post Format</a>
            </li>
            <li className="tag-item">
              <a>Style</a>
            </li>
            <li className="tag-item">
              <a>Tech</a>
            </li>
            <li className="tag-item">
              <a>Tips</a>
            </li>
            <li className="tag-item">
              <a>Travel</a>
            </li>
          </ul>
        </div>
        <div className="widget-banner section-margin-bottom">
          <img src="../../public/images/banner-250.jpg" alt="" />
        </div>
        <div className="recent-post-widget section-margin-bottom">
          <h3 className="title">
            <span className="widget-head-text">Recent Post</span>
            <span className="widget-head-divider"></span>
          </h3>
          <div className="recent-post-widget-wrap">
            <div className="recent-post">
              <div className="recent-post-image">
                <img src="../../../public/images/post-background.jpg" alt="" />
                <span className="recent-post-image-tag">Trending</span>
              </div>
              <div className="recent-post-content">
                <p className="title">The Most Beautiful Green Field on Earth</p>
                <p className="information">
                  <span className="author">Paul Newman</span>
                  <span className="date">July 25, 2019</span>
                </p>
              </div>
            </div>
            <div className="recent-post">
              <div className="recent-post-image">
                <img src="../../../public/images/post-background.jpg" alt="" />
                <span className="recent-post-image-tag">Trending</span>
              </div>
              <div className="recent-post-content">
                <p className="title">The Most Beautiful Green Field on Earth</p>
                <p className="information">
                  <span className="author">Paul Newman</span>
                  <span className="date">July 25, 2019</span>
                </p>
              </div>
            </div>
            <div className="recent-post">
              <div className="recent-post-image">
                <img src="../../../public/images/post-background.jpg" alt="" />
                <span className="recent-post-image-tag">Trending</span>
              </div>
              <div className="recent-post-content">
                <p className="title">The Most Beautiful Green Field on Earth</p>
                <p className="information">
                  <span className="author">Paul Newman</span>
                  <span className="date">July 25, 2019</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="instagram ">
          <h3 className="title">
            <span className="widget-head-text">Instagram</span>
            <span className="widget-head-divider"></span>
          </h3>
          <div className="images-list">
            <div className="instagram-image">
              <img src="../../../public/images/instagram-image.jpg" alt="" />
            </div>
            <div className="instagram-image">
              <img src="../../../public/images/instagram-image.jpg" alt="" />
            </div>
            <div className="instagram-image">
              <img src="../../../public/images/instagram-image.jpg" alt="" />
            </div>
            <div className="instagram-image">
              <img src="../../../public/images/instagram-image.jpg" alt="" />
            </div>
            <div className="instagram-image">
              <img src="../../../public/images/instagram-image.jpg" alt="" />
            </div>
            <div className="instagram-image">
              <img src="../../../public/images/instagram-image.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
