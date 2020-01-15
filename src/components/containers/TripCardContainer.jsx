import React from "react";
import TripCard from "../layouts/TripCard";
import DB from "../../tripCardModelsDB";

const TripCardContainer = ({ className }) => {
  const createTripCard = () => {
    return DB.map((data, index) => {
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
