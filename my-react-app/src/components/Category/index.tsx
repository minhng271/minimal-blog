import React, { useEffect, useState } from "react";
import getData from "../../helper/getData";
import { CATEGORY_API } from "../../constants/api";

const Category = () => {
  const [dataCategory, setDataCategory] = useState([] as any);

  useEffect(() => {
    getData(CATEGORY_API, setDataCategory);
  }, []);

  return (
    <ul className="list-category">
      {dataCategory &&
        dataCategory.map((item) => (
          <li className="category-item">
            <p className="category-information">
              <span className="name">{item.Name}</span>
              <span className="number">{item.NumberOfPost}</span>
            </p>
          </li>
        ))}
    </ul>
  );
};

export default Category;
