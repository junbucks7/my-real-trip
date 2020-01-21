import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import DB from "../../cityModelsDB";
import TripCardContainer from "../../components/containers/TripCardContainer";

const TourTicket = () => {
  const createCities = () =>
    DB.map(data => (
      <Link
        to={`/Detail?name=${encodeURIComponent(data.cityName)}`}
        className={style["tour-ticket-cities-wrapper"]}
      >
        <div className={style["tour-ticket-city-name-wrapper"]}>
          <span className={style["tour-ticket-city-name"]}>
            {data.cityName}
          </span>
        </div>
        <img className={style["tour-ticket-city-image"]} src={data.image} />
      </Link>
    ));

  return (
    <div>
      <div className={style["tour-ticket-header"]}>
        <div>
          <img
            className={style["header-image"]}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgPYU5HyV3YEa1uBfdRkbtAdWaN0ZRrO6BV9zAp5KzyxlnR0_&s"
          />
        </div>
        <Link to="/" className={style["tour-ticket-back-arrow-wrapper"]}>
          <img
            className={style["tour-ticket-back-arrow"]}
            src="https://image.flaticon.com/icons/svg/130/130882.svg"
          />
        </Link>
        <div className={style["tour-ticket-name-wrapper"]}>
          <span className={style["tour-ticket-name"]}>투어&티켓</span>
        </div>
        <div className={style["tour-ticket-input-search-wrapper"]}>
          <input
            className={style["tour-ticket-input-search"]}
            type="text"
            placeholder="'엔텔롭 캐년' 보러 가보실래요?"
          />
        </div>
        <div className={style["popular-container"]}>
          <div className={style["popular-location-wrapper"]}>
            <span className={style["popular-location"]}>인기 여행지</span>
          </div>
          <div className={style["tour-ticket-cities-container"]}>
            {createCities()}
          </div>
        </div>
        <div className={style["tour-ticket-promotion-image-wrapper"]}>
          <img
            className={style["tour-ticket-promotion-image"]}
            src="http://www.ktnbm.co.kr/news/photo/201808/26466_37066_5040.jpg"
          />
        </div>
        <div className={style["tour-ticket-nav-subject"]}>
          <span>겨울에도 꿀잼 보장</span>
          <img src="https://image.flaticon.com/icons/svg/517/517565.svg" />
        </div>
        <div>
          <TripCardContainer
            className={style["tour-ticket-create-trip-card"]}
          />
        </div>
      </div>
    </div>
  );
};

export default TourTicket;
