import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import AuthorCard from "../../components/AuthorCard";
import { AUTHOR_API } from "../../constants/api";
import getData from "../../helper/getData";
import "./index.css";

const AboutPage = () => {
  const [dataAuthor, setDataAuthor] = useState([]);
  
  useEffect(() => {
    getData(AUTHOR_API, setDataAuthor);
  }, []);

  console.log(dataAuthor);

  return (
    <DefaultLayout>
      <div className="gdlr-core-pbf-wrapper ">
        <div className="container">
          <div className="title-item-caption">
            <h3>About Akea</h3>
            <p>Our Story</p>
          </div>
        </div>
      </div>
      <div className="author-wrapper">
        <div className="container">
          <div className="author-introduction">
            <h3 className="author-introduction-title">Meet Our Authors</h3>
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone.
            </p>
          </div>
          <div className="author-list">
            {dataAuthor.map((item) => (
              <AuthorCard item={item} />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AboutPage;
