import React from "react";
import TripCard from "../layouts/TripCard";
import DB from "../../DetailTripCardModelsDB";

const DetailTripContainer = ({ className }) => {
  const createDetailTripCard = () => {
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

  return <div className={className}>{createDetailTripCard()}</div>;
};

export default DetailTripContainer;
