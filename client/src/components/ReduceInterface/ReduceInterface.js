import React, { Component } from 'react';
import './ReduceInterface.scss';

export default class ReduceInterface extends Component {
  state = {
    tv: [0, 0],
    dishwasher: [0, 0],
    kettle: [0, 0],
    dryer: [0, 0],
    heating: [0, 0],
    bulbs: [0, 0],
    meat: [0, 0],
    totalMoneySavings: 0,
    totalCo2Savings: 0,
  };

  handleChange = (event) => {
    if (event.target.checked) {
      this.setState({
        [event.target.name]: event.target.value,
      });
    } else {
      this.setState({
        [event.target.name]: [0, 0],
      });
    }
    this.addMoneySaving();
    this.addCo2Saving();
  };

  addMoneySaving = () => {
    let sum =
      this.state.tv[0] +
      this.state.dishwasher[0] +
      this.state.kettle[0] +
      this.state.dryer[0] +
      this.state.heating[0] +
      this.state.bulbs[0] +
      this.state.meat[0];
    this.setState({ totalMoneySavings: sum });
  };

  addCo2Saving = () => {
    let sum =
      this.state.tv[1] +
      this.state.dishwasher[1] +
      this.state.kettle[1] +
      this.state.dryer[1] +
      this.state.heating[1] +
      this.state.bulbs[1] +
      this.state.meat[1];
    this.setState({ totalCo2Savings: sum });
  };

  // totalMoneySavings =
  //   this.state.tv[0] +
  //   this.state.dishwasher[0] +
  //   this.state.kettle[0] +
  //   this.state.dryer[0] +
  //   this.state.heating[0] +
  //   this.state.bulbs[0] +
  //   this.state.meat[0];

  // totalCo2Savings =
  //   this.state.tv[1] +
  //   this.state.dishwasher[1] +
  //   this.state.kettle[1] +
  //   this.state.dryer[1] +
  //   this.state.heating[1] +
  //   this.state.bulbs[1] +
  //   this.state.meat[1];

  render() {
    return (
      <div className="re-container">
        <h1 className="re-title">
          Interesting tips to reduce your carbon footprint
        </h1>
        <p className="re-text">
          You can start helping the environment from home: <br />
          every action counts, big or small!
          <br />
          <br />
          Have a look at the suggestions below. Select those you would like to
          follow and <br />
          check how much your CO2 emissions would go down (and how much money
          you could save too!):
        </p>
        <p className="re-text">
          Money savings:
          {+this.state.tv[0] +
            +this.state.dishwasher[0] +
            +this.state.kettle[0] +
            +this.state.dryer[0] +
            +this.state.heating[0] +
            +this.state.bulbs[0] +
            +this.state.meat[0]}
          <br />
          CO2 savings:
          {+this.state.tv[1] +
            +this.state.dishwasher[1] +
            +this.state.kettle[1] +
            +this.state.dryer[1] +
            +this.state.heating[1] +
            +this.state.bulbs[1] +
            +this.state.meat[1]}
        </p>
        <article className="re-article">
          <input
            className="re-article__check"
            type="checkbox"
            id="tv"
            name="tv"
            value={2}
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
            value="[9, 25]"
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
                  <br /> <span className="span--bold">25kg of CO2 </span>a year
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
                  <br /> <span className="span--bold">72kg of CO2 </span>a year
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
                  <span className="span--bold">£52 saved </span>
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
                  <span className="span--bold"> £42 saved</span> <br />
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
                  <span className="span--bold">331kg of CO2 </span>a year
                </div>
              </div>
            </div>
          </label>
        </article>
      </div>
    );
  }
}
