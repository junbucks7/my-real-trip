import React from "react";
import CategoryCard from "../layouts/CategoryCard";
import DB from "../../categoryModelsDB";

const CategoryContainer = ({ className }) => {
  const createCategory = () => {
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

  return <div className={className}>{createCategory()}</div>;
};

export default CategoryContainer;
