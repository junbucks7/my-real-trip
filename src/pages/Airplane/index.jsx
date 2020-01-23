import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const Airplane = () => {
  return (
    <div>
      <div className={style["airplane-ticket-wrapper"]}>
        <Link to="/" className={style["airplane-back-arrow-wrapper"]}>
          <img
            className={style["airplane-back-arrow"]}
            src="https://image.flaticon.com/icons/svg/130/130882.svg"
          />
        </Link>
        <span className={style["airplane-ticket"]}>항공권</span>
      </div>
      <div className={style["airplane-wrapper"]}>
        <div className={style["airplane-way-wrapper"]}>
          <span className={style["airplane-2ways"]}>왕복</span>
          <span className={style["airplane-way"]}>편도</span>
          <span className={style["airplane-way"]}>다구간</span>
        </div>
        <div className={style["airplane-location"]}>
          <div className={style["start-wrapper"]}>
            <span className={style["start"]}>Seoul</span>
            <span>서울</span>
          </div>
          <div className={style["end-wrapper"]}>
            <span className={style["end"]}>도착지</span>
          </div>
        </div>
        <div>
          <div className={style["select"]}>
            <img
              className={style["select-image"]}
              src="https://image.flaticon.com/icons/svg/758/758827.svg"
            />
            <span className={style["select-name"]}>
              가는날 선택 - 오는날선택
            </span>
          </div>
          <div className={style["airplane-search-wrapper"]}>
            <span className={style["airplane-search"]}>항공권 검색</span>
          </div>
        </div>
        <div className={style["airplane-event-wrapper"]}>
          <img
            className={style["airplane-event-image"]}
            src="https://dimg.donga.com/wps/NEWS/IMAGE/2018/05/24/90236978.3.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Airplane;
