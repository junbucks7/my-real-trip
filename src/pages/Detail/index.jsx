import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import CategoryContainer from "../../components/containers/CategoryContainer";
import TripcardContainer from "../../components/containers/TripCardContainer";
import detailHeaderModelsDB from "../../detailHeaderModelsDB";
import TripCardContainer from "../../components/containers/TripCardContainer";

const Detail = ({ history }) => {
  console.log(
    history.location.search.split("=")[1] === encodeURIComponent("파리")
  );

  const selectModel = () => {
    return detailHeaderModelsDB.find(
      city =>
        encodeURIComponent(city.cityName) ===
        history.location.search.split("=")[1]
    );
  };

  return (
    <div>
      {/* <div className={style["header-container"]}>{createHeaderCities()}</div> */}
      <div className={style["header"]}>
        <div className={style["header-image-wrapper"]}>
          <img className={style["header-image"]} src={selectModel().image} />
        </div>
        <div className={style["header-icon-wrapper"]}>
          <Link to="/" className={style["back-arrow-wrapper"]}>
            <img
              className={style["back-arrow"]}
              src="https://image.flaticon.com/icons/svg/130/130882.svg"
            />
          </Link>
          <div className={style["search-wrapper"]}>
            <img
              className={style["search-icon"]}
              src="https://image.flaticon.com/icons/svg/467/467832.svg"
            />
          </div>
        </div>
        <div className={style["header-name-wrapper"]}>
          <div>
            <span className={style["country-name"]}>
              {selectModel().countryName}
            </span>
          </div>
          <div>
            <span className={style["header-city-name"]}>
              {selectModel().cityName}
            </span>
          </div>
        </div>
      </div>
      <div>
        <CategoryContainer
          type="action"
          className={style["create-detail-category-wrapper"]}
        />
      </div>
      <div>
        <div className={style["recommend-sale-wrapper"]}>
          <span className={style["recommend-sale"]}>추천 상품</span>
        </div>
        <TripcardContainer
          type="detail"
          className={style["create-detail-card-model"]}
        />
        <TripCardContainer
          type="footerCard"
          className={style["create-winter-card"]}
        />
      </div>
    </div>
  );
};

export default Detail;
