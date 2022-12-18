import { Component } from "react";
import { Link } from "react-router-dom";
import "./ReduceInterface.scss";
import pointerIcon from "../../assets/images/icons/pointer-icon.png";
import worldIcon from "../../assets/images/icons/world-icon.svg";
import reductionSuggestions from "../../data/reduce-co2.json";
import SuggestionCard from "../SuggestionCard/SuggestionCard";
export default class ReduceInterface extends Component {
  state = {
    tv: false,
    dishwasher: false,
    kettle: false,
    dryer: false,
    heating: false,
    bulbs: false,
    meat: false
  };

  // @ts-ignore
  handleChange = event => {
    if (event.target.checked) {
      this.setState({
        [event.target.name]: true
      });
    } else {
      this.setState({
        [event.target.name]: false
      });
    }
  };

  addMoneySaving = () => {
    const state = this.state;
    let sum = 0;
    sum += state.tv ? 2 : 0;
    sum += state.dishwasher ? 9 : 0;
    sum += state.kettle ? 23 : 0;
    sum += state.dryer ? 42 : 0;
    sum += state.heating ? 52 : 0;
    sum += state.bulbs ? 60 : 0;
    sum += state.meat ? 75 : 0;
    return sum;
  };

  addCo2Saving = () => {
    const state = this.state;
    let sum = 0;
    sum += state.tv ? 5 : 0;
    sum += state.dishwasher ? 25 : 0;
    sum += state.kettle ? 72 : 0;
    sum += state.dryer ? 153 : 0;
    sum += state.heating ? 184 : 0;
    sum += state.bulbs ? 260 : 0;
    sum += state.meat ? 331 : 0;
    return sum;
  };

  render() {
    return (
      <>
        <div className="re-container">
          <div className="re-top-box">
            <div className="re-top-box__left">
              <h1 className="re-title">
                <span className="span">{">>"}</span> Useful tips to start
                reducing your carbon footprint
              </h1>
              <p className="re-text">
                You can start helping the environment from home. And remember:
                every action counts, big or small!
                <br />
                <br />
                Have a look at the suggestions below. Select those you would
                like to follow and check how much your CO2 emissions would go
                down (and how much money you could save too!):
              </p>
            </div>

            <div className="re-top-box__right">
              {this.state.tv ||
              this.state.dishwasher ||
              this.state.kettle ||
              this.state.dryer ||
              this.state.heating ||
              this.state.bulbs ||
              this.state.meat ? (
                <>
                  <div className="re-summary__text">
                    <div className="re-summary__info-icon">i</div>
                    The selected suggestions allow you to reduce your emissions
                    by{" "}
                    <span className="span--bold span--green-bkgrd">
                      {this.addCo2Saving()} kilograms of CO2
                    </span>{" "}
                    every year. <br />
                    Besides helping the evironment, you would also save{" "}
                    <span className="span--bold span--green-bkgrd">
                      £{this.addMoneySaving()}
                    </span>
                    . Sweet!
                  </div>
                  <div className="re-content__button-box re-content__button-box--top">
                    <div className="re-content__button">
                      Save estimate in dashboard
                      <span className="span"> {">>"} </span>
                    </div>
                    <Link className="re-content__link" to="/compensate">
                      <div className="re-content__button re-content__button--next">
                        Go to Next Step <span className="span"> {">>"} </span>
                      </div>
                    </Link>
                  </div>
                </>
              ) : (
                <div className="re-summary__intro">
                  <p className="re-summary__intro-text">
                    Select from the <br />
                    suggestions below
                  </p>
                  <img
                    className="re-summary__intro-icon"
                    alt="world icon"
                    src={pointerIcon}
                  />
                  <img
                    className="re-summary__intro-image"
                    alt="world icon"
                    src={worldIcon}
                  />
                </div>
              )}
            </div>
          </div>
          {reductionSuggestions.map(suggestion => (
            <SuggestionCard
              key={suggestion.number}
              number={suggestion.number}
              name={suggestion.name}
              description={suggestion.description}
              moneySaving={suggestion.moneySaving}
              co2Saving={suggestion.co2Saving}
              handleChange={this.handleChange}
            />
          ))}
        </div>
        <div className="re-container">
          <h1 className="re-title re-title--bottom">
            <span className="span">{">>"}</span> For more tips visit the links
            below:{" "}
          </h1>

          <a
            className="re-content__link re-content__link--half-width"
            href="https://footprint.wwf.org.uk/#/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="re-content__button">
              WWF - How big is <br />
              you environmental footprint?
              <span className="span"> {">>"} </span>
            </div>
          </a>

          <a
            className="re-content__link re-content__link--half-width"
            href="https://www.futurelearn.com/info/blog/how-to-reduce-your-carbon-footprint-tips"
            target="_blank"
            rel="noreferrer"
          >
            <div className="re-content__button ">
              Future Learn - 20 top tips <br />
              to reduce your CO2 <span className="span"> {">>"} </span>
            </div>
          </a>

          <a
            className="re-content__link re-content__link--half-width"
            href="https://www.bbc.co.uk/news/science-environment-46459714"
            target="_blank"
            rel="noreferrer"
          >
            <div className="re-content__button">
              BBC - Climate change <br />
              food and diet calculator
              <span className="span"> {">>"} </span>
            </div>
          </a>

          <a
            className="re-content__link re-content__link--half-width"
            href="https://ourworldindata.org/grapher/food-emissions-supply-chain?country=Beef+%28beef+herd%29~Cheese~Poultry+Meat~Milk~Eggs~Rice~Pig+Meat~Peas~Bananas~Wheat+%26+Rye~Fish+%28farmed%29~Lamb+%26+Mutton~Beef+%28dairy+herd%29~Shrimps+%28farmed%29~Tofu~Maize"
            target="_blank"
            rel="noreferrer"
          >
            <div className="re-content__button ">
              Our World in Data - <br />
              Food greenhouse gas emissions{" "}
              <span className="span"> {">>"} </span>
            </div>
          </a>
        </div>
      </>
    );
  }
}
