import React from "react";
import style from "./style.module.css";

const TripCard = ({ tripImage, tripLocation, tripName, tripPrice }) => {
  return (
    <div className={style["trip-wrapper"]}>
      <img className={style["trip-image"]} src={tripImage} />
      <div className={style["description-wrapper"]}>
        <div className={style["location-wrapper"]}>
          <span className={style["location"]}>{tripLocation}</span>
        </div>
        <div className={style["name-wrapper"]}>
          <span className={style["name"]}>{tripName}</span>
        </div>
        <div className={style["price-wrapper"]}>
          <span className={style["price"]}>{tripPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
