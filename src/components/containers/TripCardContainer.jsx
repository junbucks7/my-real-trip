import React from "react";
import TripCard from "../layouts/TripCard";
import HomeTripCardDB from "../../tripCardModelsDB";
import SkiCardDB from "../../skiCardModelsDB";
import DetailTripCardDB from "../../DetailTripCardModelsDB";
import DetailFooterCardDB from "../../detailFooterModelsDB";

const TripCardContainer = ({ className, type = "home" }) => {
  const tripModel = [
    {
      name: "home",
      db: HomeTripCardDB
    },
    {
      name: "detail",
      db: DetailTripCardDB
    },
    {
      name: "tourTicket",
      db: SkiCardDB
    },
    {
      name: "footerCard",
      db: DetailFooterCardDB
    }
  ];
  const selectTripcard = target => {
    return tripModel.find(model => model.name === target);
  };
  const createTripCard = () => {
    return selectTripcard(type).db.map((data, index) => {
      return (
        <TripCard
          tripImage={data.tripImage}
          tripLocation={data.tripLocation}
          tripName={data.tripName}
          tripPrice={data.tripPrice}
          key={index}
        />
      );
    });
  };

  return <div className={className}>{createTripCard()}</div>;
};

export default TripCardContainer;
