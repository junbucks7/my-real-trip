import React from "react";
import CategoryCard from "../layouts/CategoryCard";
import TourCategoryDB from "../../categoryModelsDB";
import ActionCategoryDB from "../../detailCategoryModelsDB";
import { Link } from "react-router-dom";

const CategoryContainer = ({ className, type = "tour" }) => {
  const categoryModel = [
    {
      name: "tour",
      db: TourCategoryDB
    },
    {
      name: "action",
      db: ActionCategoryDB
    }
  ];
  const selectCategory = target => {
    return categoryModel.find(model => model.name === target);
  };
  const createCategory = () => {
    return selectCategory(type).db.map((data, index) => {
      return (
        <Link to={data.link}>
          <CategoryCard
            categoryImage={data.categoryImage}
            categoryName={data.categoryName}
            key={index}
          />
        </Link>
      );
    });
  };

  return <div className={className}>{createCategory()}</div>;
};

export default CategoryContainer;
