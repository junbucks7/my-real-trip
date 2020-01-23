import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
// import CityContaier from "../../components/containers/CategoryContainer";
import TripCardContainer from "../../components/containers/TripCardContainer";
import CategoryContainer from "../../components/containers/CategoryContainer";
import DB from "../../cityModelsDB";
// import PromotionSlider from "../../components/containers/PromotionSlider";

const Home = ({ history }) => {
  console.log(history);
  const createCities = () =>
    DB.map(data => (
      //링크 > Detail?name=paris
      //동적 라우팅 = dynamic routing
      <Link
        to={`/Detail?name=${encodeURIComponent(data.cityName)}`}
        className={style["cities-wrapper"]}
      >
        <div className={style["city-name-wrapper"]}>
          <span className={style["city-name"]}>{data.cityName}</span>
        </div>
        <img className={style["city-image"]} src={data.image} />
      </Link>
    ));

  return (
    <div>
      <div className={style["header"]}>
        <div className={style["input-search-wrapper"]}>
          <input
            className={style["input-search"]}
            type="text"
            placeholder="여행지나 상품을 검색해보세요."
          />
        </div>
      </div>
      <div className={style["cities-container"]}>{createCities()}</div>
      <div>
        <CategoryContainer className={style["create-category-container"]} />
      </div>
      {/* <div className={style["promotion-image-wrapper"]}>
        <img
          className={style["promotion-image"]}
          src="https://d2ur7st6jjikze.cloudfront.net/cms/479_original_1577953842.jpg?1577953842"
        />
      </div> */}
      {/* <div>
        <PromotionSlider />
      </div> */}
      <div className={style["nav-subject"]}>
        <span>가이드라이브 패키지</span>
      </div>
      <div>
        <TripCardContainer className={style["create-trip-card"]} />
        {/* <TripCardContainer className={style["create-trip-card"]} /> */}
      </div>
      <div className={style["nav-subject"]}>
        <span>겨울에도 꿀잼 보장</span>
        <img src="https://image.flaticon.com/icons/svg/517/517565.svg" />
      </div>
      <div>
        <TripCardContainer
          type="tourTicket"
          className={style["create-winter-card"]}
        />
      </div>
    </div>
  );
};

export default Home;
