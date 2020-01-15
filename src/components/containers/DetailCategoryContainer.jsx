import React from "react";
import CategoryCard from "../layouts/CategoryCard";
import DB from "../../detailCategoryModelsDB";

const DetailCategoryContainer = ({ className }) => {
  const createDetailCategory = () => {
    return DB.map((data, index) => {
      return (
        <CategoryCard
          categoryImage={data.categoryImage}
          categoryName={data.categoryName}
          key={index}
        />
      );
    });
  };

  return <div className={className}>{createDetailCategory()} </div>;
};

export default DetailCategoryContainer;
