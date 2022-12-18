import "./EstimateOptions.scss";
import electricityIcon from "../../assets/images/icons/electricity-icon.png";
import flightsIcon from "../../assets/images/icons/flights-icon.png";
import vehiclesIcon from "../../assets/images/icons/vehicles-icon.png";
import OptionsTab from "../OptionsTab/OptionsTab";

export default function EstimateOptions() {
  return (
    <aside className="aside">
      <OptionsTab
        linkTo="/estimate/electricity"
        cardTitle="Electricity"
        imgAlt="home electricity icon"
        imgSrc={electricityIcon}
      />

      <OptionsTab
        linkTo="/estimate/flights"
        cardTitle="Flights"
        imgAlt="flights icon"
        imgSrc={flightsIcon}
      />

      <OptionsTab
        linkTo="/estimate/vehicles"
        cardTitle="Vehicles"
        imgAlt="vehicles icon"
        imgSrc={vehiclesIcon}
      />
    </aside>
  );
}
