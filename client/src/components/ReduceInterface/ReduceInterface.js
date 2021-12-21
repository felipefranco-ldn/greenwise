import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ReduceInterface.scss';
import pointerIcon from '../../assets/images/icons/pointer-icon.png';
import worldIcon from '../../assets/images/icons/world-icon.svg';

export default class ReduceInterface extends Component {
  state = {
    tv: false,
    dishwasher: false,
    kettle: false,
    dryer: false,
    heating: false,
    bulbs: false,
    meat: false,
  };

  handleChange = (event) => {
    if (event.target.checked) {
      this.setState({
        [event.target.name]: true,
      });
    } else {
      this.setState({
        [event.target.name]: false,
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
      <div className="re-container">
        <div className="re-top-box">
          <div className="re-top-box__left">
            <h1 className="re-title">
              <span className="span">{'>>'}</span> Useful tips to start reducing{' '}
              <br />
              your carbon footprint
            </h1>
            <p className="re-text">
              You can start helping the environment from home. <br />
              And remember: every action counts, big or small!
              <br />
              <br />
              Have a look at the suggestions below. Select those you would like
              to follow and check how much your CO2 emissions would go down (and
              how much money you could save too!):
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
                  The selected suggestions allow <br />
                  you to reduce your emissions
                  <br />
                  by{' '}
                  <span className="span--bold span--green-bkgrd">
                    {this.addCo2Saving()} kilograms of CO2
                  </span>{' '}
                  every year. <br />
                  Besides helping the evironment, you would also save{' '}
                  <span className="span--bold span--green-bkgrd">
                    £{this.addMoneySaving()}
                  </span>
                  . Sweet!
                </div>
                <div className="re-content__button-box re-content__button-box--top">
                  <div className="re-content__button">
                    Save estimate in dashboard
                    <span className="span"> {'>>'} </span>
                  </div>
                  <Link className="re-content__link" to="/compensate">
                    <div className="re-content__button re-content__button--next">
                      Go to Next Step <span className="span"> {'>>'} </span>
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

        <article className="re-article">
          <input
            className="re-article__check"
            type="checkbox"
            id="tv"
            name="tv"
            value="true"
            onChange={this.handleChange}
          />
          <label className="re-article__container" htmlFor="tv">
            <div className="re-article__number-box">
              <p className="re-article__number">1</p>
            </div>
            <div className="re-article__main-box">
              <p className="re-article__title">
                Turn off your TV instead <br />
                of putting it on standby
              </p>
              <div className="re-article__details">
                <div className="re-article__savings">
                  <span className="span--bold">£2 saved</span> <br />
                  per year
                </div>
                <div className="re-article__reduction">
                  Reduction of
                  <br /> <span className="span--bold">5kg of CO2</span> a year
                </div>
              </div>
            </div>
          </label>
        </article>
        <article className="re-article">
          <input
            className="re-article__check"
            type="checkbox"
            id="dishwasher"
            name="dishwasher"
            value="true"
            onChange={this.handleChange}
          />
          <label className="re-article__container" htmlFor="dishwasher">
            <div className="re-article__number-box">
              <p className="re-article__number">2</p>
            </div>

            <div className="re-article__main-box">
              <p className="re-article__title">
                Turn your dishwasher down <br />
                from 65⁰C to 55⁰C{' '}
              </p>
              <div className="re-article__details">
                <div className="re-article__savings">
                  <span className="span--bold"> £9 saved</span>
                  <br /> per year
                </div>
                <div className="re-article__reduction">
                  Reduction of
                  <br /> <span className="span--bold">25kg of CO2 </span> a year
                </div>
              </div>
            </div>
          </label>
        </article>
        <article className="re-article">
          <input
            className="re-article__check"
            type="checkbox"
            id="kettle"
            name="kettle"
            value="[23, 72]"
            onChange={this.handleChange}
          />
          <label className="re-article__container" htmlFor="kettle">
            <div className="re-article__number-box">
              <p className="re-article__number">3</p>
            </div>

            <div className="re-article__main-box">
              <p className="re-article__title">
                When using your kettle, <br />
                only boil the water you need
              </p>
              <div className="re-article__details">
                <div className="re-article__savings">
                  <span className="span--bold">£23 saved</span> <br />
                  per year
                </div>
                <div className="re-article__reduction">
                  Reduction of
                  <br /> <span className="span--bold">72kg of CO2 </span> a year
                </div>
              </div>
            </div>
          </label>
        </article>
        <article className="re-article">
          <input
            className="re-article__check"
            type="checkbox"
            id="dryer"
            name="dryer"
            value="[52, 153]"
            onChange={this.handleChange}
          />
          <label className="re-article__container" htmlFor="dryer">
            <div className="re-article__number-box">
              <p className="re-article__number">4</p>
            </div>

            <div className="re-article__main-box">
              <p className="re-article__title">
                Stop using your tumble dryer,
                <br /> hang your washing instead
              </p>
              <div className="re-article__details">
                <div className="re-article__savings">
                  <span className="span--bold">£42 saved </span>
                  <br />
                  per year
                </div>
                <div className="re-article__reduction">
                  Reduction of <br />{' '}
                  <span className="span--bold">153kg of CO2 </span> a year
                </div>
              </div>
            </div>
          </label>
        </article>
        <article className="re-article">
          <input
            className="re-article__check"
            type="checkbox"
            id="heating"
            name="heating"
            value="[42, 184]"
            onChange={this.handleChange}
          />
          <label className="re-article__container" htmlFor="heating">
            <div className="re-article__number-box">
              <p className="re-article__number">5</p>
            </div>

            <div className="re-article__main-box">
              <p className="re-article__title">
                Turn down the heating by 1⁰C <br />
                and wear warmer clothes at home
              </p>
              <div className="re-article__details">
                <div className="re-article__savings">
                  <span className="span--bold"> £52 saved</span> <br />
                  per year
                </div>
                <div className="re-article__reduction">
                  Reduction of <br />
                  <span className="span--bold">184kg of CO2 </span> a year
                </div>
              </div>
            </div>
          </label>
        </article>
        <article className="re-article">
          <input
            className="re-article__check"
            type="checkbox"
            id="bulbs"
            name="bulbs"
            value="[60, 260]"
            onChange={this.handleChange}
          />
          <label className="re-article__container" htmlFor="bulbs">
            <div className="re-article__number-box">
              <p className="re-article__number">6</p>
            </div>

            <div className="re-article__main-box">
              <p className="re-article__title">
                Replace 5 traditional lightbulbs
                <br /> with long-lasting LED lightbulbs
              </p>
              <div className="re-article__details">
                <div className="re-article__savings">
                  <span className="span--bold">£60 saved </span>
                  <br />
                  per year
                </div>
                <div className="re-article__reduction">
                  Reduction of <br />
                  <span className="span--bold">260kg of CO2</span> a year
                </div>
              </div>
            </div>
          </label>
        </article>
        <article className="re-article">
          <input
            className="re-article__check"
            type="checkbox"
            id="meat"
            name="meat"
            value="[75, 331]"
            onChange={this.handleChange}
          />
          <label className="re-article__container" htmlFor="meat">
            <div className="re-article__number-box">
              <p className="re-article__number">7</p>
            </div>

            <div className="re-article__main-box">
              <p className="re-article__title">
                Swap 1 portion of beef for <br /> 1 portion of chicken each week
              </p>
              <div className="re-article__details">
                <div className="re-article__savings">
                  <span className="span--bold">£75 saved</span> <br />
                  per year
                </div>
                <div className="re-article__reduction">
                  Reduction of <br />
                  <span className="span--bold">331kg of CO2 </span> a year
                </div>
              </div>
            </div>
          </label>
        </article>

        <h1 className="re-title re-title--bottom">
          <span className="span">{'>>'}</span> For more tips visit the links
          below:{' '}
        </h1>

        <div className="re-content__button-box re-content__button-box--bottom">
          <a
            className="re-content__link re-content__link--half-width"
            href="https://footprint.wwf.org.uk/#/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="re-content__button re-content__button--half-length">
              WWF - Environmental footprint
              <span className="span"> {'>>'} </span>
            </div>
          </a>

          <a
            className="re-content__link re-content__link--half-width"
            href="https://www.futurelearn.com/info/blog/how-to-reduce-your-carbon-footprint-tips"
            target="_blank"
            rel="noreferrer"
          >
            <div className="re-content__button ">
              Future Learn - 20 tips to reduce your CO2{' '}
              <span className="span"> {'>>'} </span>
            </div>
          </a>

          <a
            className="re-content__link re-content__link--half-width"
            href="https://www.bbc.co.uk/news/science-environment-46459714"
            target="_blank"
            rel="noreferrer"
          >
            <div className="re-content__button re-content__button--half-length">
              BBC - Climate change food calculator
              <span className="span"> {'>>'} </span>
            </div>
          </a>

          <a
            className="re-content__link re-content__link--half-width"
            href="https://ourworldindata.org/grapher/food-emissions-supply-chain?country=Beef+%28beef+herd%29~Cheese~Poultry+Meat~Milk~Eggs~Rice~Pig+Meat~Peas~Bananas~Wheat+%26+Rye~Fish+%28farmed%29~Lamb+%26+Mutton~Beef+%28dairy+herd%29~Shrimps+%28farmed%29~Tofu~Maize"
            target="_blank"
            rel="noreferrer"
          >
            <div className="re-content__button ">
              Our World in Data - Food gas emissions{' '}
              <span className="span"> {'>>'} </span>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
