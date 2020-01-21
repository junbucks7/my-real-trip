import React from "react";
import TripCard from "../layouts/TripCard";
import HomeTripCardDB from "../../tripCardModelsDB";
import DetailTripCardDB from "../../DetailTripCardModelsDB";

const TripCardContainer = ({ className, type = "home" }) => {
  const tripModel = [
    {
      name: "home",
      db: HomeTripCardDB
    },
    {
      name: "detail",
      db: DetailTripCardDB
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
