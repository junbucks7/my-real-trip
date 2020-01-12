import React from "react";
import Home from "../../pages/Home";
import TripCard from "../layouts/TripCard";
import DB from "../../tripCardModelsDB";

class TripCardContainer extends React.Component {
  createTripCard = () => {
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

  render() {
    return (
      <div className="create-trip-card-model">{this.createTripCard()}</div>
    );
  }
}

export default TripCardContainer;
