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
    return sum;
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
    return sum;
  };

  totalMoneySavings =
    this.state.tv[0] +
    this.state.dishwasher[0] +
    this.state.kettle[0] +
    this.state.dryer[0] +
    this.state.heating[0] +
    this.state.bulbs[0] +
    this.state.meat[0];

  totalCo2Savings =
    this.state.tv[1] +
    this.state.dishwasher[1] +
    this.state.kettle[1] +
    this.state.dryer[1] +
    this.state.heating[1] +
    this.state.bulbs[1] +
    this.state.meat[1];

  render() {
    return (
      <div className="re-container">
        <h1 className="re-title">
          Interesting tips to reduce your carbon footprint
        </h1>
        <p className="re-text">
          You can start helping the environment from home: <br />
          Every action counts, big or small!
          <br />
          <br />
          Have a look at the suggestions below. Select those you would like to
          follow and <br />
          check how much your CO2 emissions would go down (and how much money
          you could save too!):
        </p>
        {this.totalMoneySavings}
        {this.totalCo2Savings}
        <article className="re-article">
          <input
            className="re-article__check"
            type="checkbox"
            id="tv"
            name="tv"
            value="[2, 5]"
            onChange={this.handleChange}
          />
          <label className="re-article__container" htmlFor="tv">
            <div className="re-article__number-box">
              <p className="re-article__number">1</p>
              <div className="re-article__main-box">
                <p className="re-article__title">
                  Turn off your TV instead of putting it on standby
                </p>
                <div className="re-article__details">
                  <div className="re-article__savings">£2 saved per year</div>
                  <div className="re-article__reduction">
                    Reduction of 5kg of CO2 a year
                  </div>
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
              <div className="re-article__main-box">
                <p className="re-article__title">
                  Turn your dishwasher down from 65⁰C to 55⁰C{' '}
                </p>
                <div className="re-article__details">
                  <div className="re-article__savings">£9 saved per year</div>
                  <div className="re-article__reduction">
                    Reduction of 25kg of CO2 a year
                  </div>
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
              <div className="re-article__main-box">
                <p className="re-article__title">
                  When using your kettle, only boil the water you need
                </p>
                <div className="re-article__details">
                  <div className="re-article__savings">£23 saved per year</div>
                  <div className="re-article__reduction">
                    Reduction of 72kg of CO2 a year
                  </div>
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
              <div className="re-article__main-box">
                <p className="re-article__title">Stop using tumble dryer </p>
                <div className="re-article__details">
                  <div className="re-article__savings">£52 saved per year</div>
                  <div className="re-article__reduction">
                    Reduction of 153kg of CO2 a year
                  </div>
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
              <div className="re-article__main-box">
                <p className="re-article__title">
                  Turn down the heating by 1⁰C
                </p>
                <div className="re-article__details">
                  <div className="re-article__savings">£42 saved per year</div>
                  <div className="re-article__reduction">
                    Reduction of 184kg of CO2 a year
                  </div>
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
              <div className="re-article__main-box">
                <p className="re-article__title">
                  Change 5 traditional lightbulbs to LED
                </p>
                <div className="re-article__details">
                  <div className="re-article__savings">£60 saved per year</div>
                  <div className="re-article__reduction">
                    Reduction of 260kg of CO2 a year
                  </div>
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
              <div className="re-article__main-box">
                <p className="re-article__title">
                  Swap 1 portion of beef for chicken each week
                </p>
                <div className="re-article__details">
                  <div className="re-article__savings">£75 saved per year</div>
                  <div className="re-article__reduction">
                    Reduction of 331kg of CO2 a year
                  </div>
                </div>
              </div>
            </div>
          </label>
        </article>
      </div>
    );
  }
}
