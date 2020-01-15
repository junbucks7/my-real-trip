import React from "react";
import style from "./style.module.css";
import DetailCategoryContainer from "../../components/containers/DetailCategoryContainer";
import DetailTripContainer from "../../components/containers/DetailTripContainer";

const Detail = () => {
  return (
    <div>
      {/* <div className={style["header-container"]}>{createHeaderCities()}</div> */}
      <div className={style["header"]}>
        <div className={style["header-image-wrapper"]}>
          <img
            className={style["header-image"]}
            src="https://s3-eu-west-2.amazonaws.com/enabled.deploy.bigfoot.tours/wp-content/uploads/2019/04/15111449/seine-in-paris-KTMQ5PG.jpg"
          />
        </div>
        <div className={style["header-icon-wrapper"]}>
          <div className={style["back-arrow-wrapper"]}>
            <img
              className={style["back-arrow"]}
              src="https://image.flaticon.com/icons/svg/130/130882.svg"
            />
          </div>
          <div className={style["search-wrapper"]}>
            <img
              className={style["search-icon"]}
              src="https://image.flaticon.com/icons/svg/467/467832.svg"
            />
          </div>
        </div>
        <div className={style["header-name-wrapper"]}>
          <div>
            <span className={style["country-name"]}>프랑스</span>
          </div>
          <div>
            <span className={style["header-city-name"]}>파리</span>
          </div>
        </div>
      </div>
      <div>
        <DetailCategoryContainer
          className={style["create-detail-category-wrapper"]}
        />
      </div>
      <div>
        <div className={style["recommend-sale-wrapper"]}>
          <span className={style["recommend-sale"]}>추천 상품</span>
        </div>
        <DetailTripContainer className={style["create-detail-card-model"]} />
      </div>
    </div>
  );
};

export default Detail;
