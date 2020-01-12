import React from "react";
import style from "./style.module.css";

const CategoryCard = ({ categoryImage, categoryName }) => {
  return (
    // style.default
    <div className={style["category-card-container"]}>
      <div className={style["category-card-wrapper"]}>
        <img className={style["category-card"]} src={categoryImage} />
      </div>
      <div className={style["category-name-wrapper"]}>
        <span className={style["category-name"]}>{categoryName}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
