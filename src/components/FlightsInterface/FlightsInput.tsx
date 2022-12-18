// @ts-ignore
export default function FlightsInput({ handleChange, handleClassChange }) {
  return (
    <div className="fl-input">
      <form className="fl-input__form">
        <div className="fl-input__form-question">
          <label className="fl-input__form-label">
            <span className="span">{">>"} </span> How long was your flight?
          </label>

          <div className="fl-input__form-duration-box">
            <input
              className="fl-input__form-radio"
              type="radio"
              id="domestic"
              name="flightDuration"
              value="domestic"
              onChange={handleChange}
            />
            <label className="fl-input__form-duration" htmlFor="domestic">
              <h3 className="fl-input__form-label-title">Regional</h3>
              <p className="fl-input__form-label-info">
                Up to 1:40h or <br />
                950km / 590mi
              </p>
              <p className="fl-input__form-label-example">
                e.g. London - Berlin
              </p>
            </label>

            <input
              className="fl-input__form-radio"
              type="radio"
              id="short"
              name="flightDuration"
              value="short"
              onChange={handleChange}
            />
            <label className="fl-input__form-duration" htmlFor="short">
              <h3 className="fl-input__form-label-title">Short Haul</h3>
              <p className="fl-input__form-label-info">
                Up to 3:20h or 2200km / 1370mi
              </p>
              <p className="fl-input__form-label-example">e.g. London - Kiev</p>
            </label>
          </div>

          <div className="fl-input__form-duration-box">
            <input
              className="fl-input__form-radio"
              type="radio"
              id="medium"
              name="flightDuration"
              value="medium"
              onChange={handleChange}
            />
            <label className="fl-input__form-duration" htmlFor="medium">
              <h3 className="fl-input__form-label-title">Medium Haul</h3>
              <p className="fl-input__form-label-info">
                Up to 6:40h or 5300km / 3300mi
              </p>
              <p className="fl-input__form-label-example">
                e.g. London - Boston
              </p>
            </label>

            <input
              className="fl-input__form-radio"
              type="radio"
              id="long"
              name="flightDuration"
              value="long"
              onChange={handleChange}
            />
            <label className="fl-input__form-duration" htmlFor="long">
              <h3 className="fl-input__form-label-title">Long Haul</h3>
              <p className="fl-input__form-label-info">
                Up to 11:30h or 9600km / 5970mi
              </p>
              <p className="fl-input__form-label-example">
                e.g. London - Bangkok
              </p>
            </label>
          </div>

          <div className="fl-input__form-duration-box">
            <input
              className="fl-input__form-radio"
              type="radio"
              id="extraLong"
              name="flightDuration"
              value="extraLong"
              onChange={handleChange}
            />
            <label className="fl-input__form-duration" htmlFor="extraLong">
              <h3 className="fl-input__form-label-title">Extra-long Haul</h3>
              <p className="fl-input__form-label-info">
                Up to 16:40h or 14500km / 9000mi
              </p>
              <p className="fl-input__form-label-example">
                e.g. London - Perth
              </p>
            </label>

            <input
              className="fl-input__form-radio"
              type="radio"
              id="ultraLong"
              name="flightDuration"
              value="ultraLong"
              onChange={handleChange}
            />
            <label className="fl-input__form-duration" htmlFor="ultraLong">
              <h3 className="fl-input__form-label-title">Ulta-long Haul</h3>
              <p className="fl-input__form-label-info">
                Up to 24:00h or 18400km / 11370mi
              </p>
              <p className="fl-input__form-label-example">
                e.g. London - Auckland
              </p>
            </label>
          </div>
        </div>

        <div className="fl-input__break"></div>

        <div className="fl-input__form-question">
          <label className="fl-input__form-label">
            <span className="span">{">>"} </span> What class did you fly in?
          </label>

          <div className="fl-input__form-class-box">
            <input
              className="fl-input__form-radio"
              type="radio"
              id="economy"
              name="flightClass"
              value="Economy"
              onChange={handleClassChange}
            />
            <label className="fl-input__form-class" htmlFor="economy">
              <h3 className="fl-input__form-label-title-class">
                🌱 Economy
                <br /> Class
              </h3>
            </label>

            <input
              className="fl-input__form-radio"
              type="radio"
              id="premiumEconomy"
              name="flightClass"
              value="PremiumEconomy"
              onChange={handleClassChange}
            />
            <label className="fl-input__form-class" htmlFor="premiumEconomy">
              <h3 className="fl-input__form-label-title-class">
                💸 Premium
                <br /> Economy{" "}
              </h3>
            </label>
          </div>

          <div className="fl-input__form-class-box">
            <input
              className="fl-input__form-radio"
              type="radio"
              id="Business"
              name="flightClass"
              value="Business"
              onChange={handleClassChange}
            />
            <label className="fl-input__form-class" htmlFor="Business">
              <h3 className="fl-input__form-label-title-class">
                💰 Business
                <br /> Class
              </h3>
            </label>

            <input
              className="fl-input__form-radio"
              type="radio"
              id="first"
              name="flightClass"
              value="First"
              onChange={handleClassChange}
            />
            <label className="fl-input__form-class" htmlFor="first">
              <h3 className="fl-input__form-label-title-class">
                🧐 First <br />
                Class
              </h3>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
