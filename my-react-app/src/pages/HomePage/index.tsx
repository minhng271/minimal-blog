import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import SideBar from "../../components/SideBar";
import PostCard from "../../components/PostCard";
import PostList from "../../components/PostList";

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon className="icon" icon={faAngleRight} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon color="black" icon={faAngleLeft} />
    </div>
  );
};

const images = [
  {
    src: "../../public/images/slideshow1.jpg",
    text: "Top Amazing Places to Go in Summer",
    date: "November 6, 2019",
    author: "Paul Newman",
  },
  {
    src: "../../public/images/slideshow2.jpg",
    text: "10 Most Awesome Breathtaking Places",
    date: "October 18, 2019",
    author: "Paul Newman",
  },
  {
    src: "../../public/images/slideshow3.jpg",
    text: "5 Dessert Menus To Make In The Party",
    date: "June 11, 2019",
    author: "Paul Newman",
  },
];

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const HomePage = () => {
  return (
    <DefaultLayout>
      <div className="container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="image-slide">
              <img src={image.src} alt={`Slide ${index}`} />
              <div className="information">
                <p className="title">{image.text}</p>
                <p className="introduction">
                  <span>{image.date}</span>
                  <span className="strikethrough">-</span>
                  <span>{image.author}</span>
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="content">
          <div className="list-post">
            {/* <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard /> */}
            <PostList />
          </div>
          <SideBar />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
