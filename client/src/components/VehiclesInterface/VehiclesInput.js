import React from 'react';
import cityCarIcon from '../../assets/images/icons/city-car.png';
import compactCarIcon from '../../assets/images/icons/compact.png';
import fullSizeCarIcon from '../../assets/images/icons/full-size.png';
import minivanIcon from '../../assets/images/icons/minivan.png';
import cuvIcon from '../../assets/images/icons/cuv.png';
import suvIcon from '../../assets/images/icons/suv.png';
import pickupIcon from '../../assets/images/icons/pickup.png';
import otherIcon from '../../assets/images/icons/other.png';
import fuelIcon from '../../assets/images/icons/fuel.png';
import hybridIcon from '../../assets/images/icons/hybrid.png';
import electricIcon from '../../assets/images/icons/electric.png';
import RadioInput from '../RadioInput/RadioInput';

export default function VehiclesInput({ handleChange, handleSizeChange }) {
  return (
    <div className="ve-input">
      <form className="ve-input__form">
        <div className="ve-input__form-question">
          <label className="ve-input__form-label">
            <span className="span">{'>>'} </span> How long have you driven?
          </label>

          <div className="ve-input__form-distance-box">
            <input
              type="text"
              name="userDistance"
              className="ve-input__form-input"
              placeholder="Enter distance"
              onChange={handleChange}
              autoComplete="off"
            />
            <select
              name="userDistanceUnits"
              className="ve-input__form-select"
              onChange={handleChange}
            >
              <option value="">Units</option>
              <option value="km">Kilometres</option>
              <option value="mi">Miles</option>
            </select>
          </div>
        </div>

        <div className="ve-input__break"></div>

        <div className="ve-input__form-question">
          <label className="ve-input__form-label">
            <span className="span">{'>>'} </span> Select type of vehicle
          </label>
          <div className="ve-input__form-type-box">
            <RadioInput
              inputClass="ve-input__form-radio"
              value="micro"
              name="carSize"
              handleChange={handleSizeChange}
              labelClass="ve-input__form-size"
              labelTitleClass="ve-input__form-label-title"
              labelTitle="City car"
              imgBoxClass="ve-input__form-image-box"
              imgClass="ve-input__form-car-image"
              imgAlt="micro car example"
              imgSrc={cityCarIcon}
            />

            <RadioInput
              inputClass="ve-input__form-radio"
              value="compact"
              name="carSize"
              handleChange={handleSizeChange}
              labelClass="ve-input__form-size"
              labelTitleClass="ve-input__form-label-title"
              labelTitle="Compact"
              imgBoxClass="ve-input__form-image-box"
              imgClass="ve-input__form-car-image"
              imgAlt="compact car example"
              imgSrc={compactCarIcon}
            />
          </div>

          <div className="ve-input__form-type-box">
            <RadioInput
              inputClass="ve-input__form-radio"
              value="fullsize"
              name="carSize"
              handleChange={handleSizeChange}
              labelClass="ve-input__form-size"
              labelTitleClass="ve-input__form-label-title"
              labelTitle="Full-size"
              imgBoxClass="ve-input__form-image-box"
              imgClass="ve-input__form-car-image"
              imgAlt="full-size car example"
              imgSrc={fullSizeCarIcon}
            />

            <RadioInput
              inputClass="ve-input__form-radio"
              value="minivan"
              name="carSize"
              handleChange={handleSizeChange}
              labelClass="ve-input__form-size"
              labelTitleClass="ve-input__form-label-title"
              labelTitle="Minivan"
              imgBoxClass="ve-input__form-image-box"
              imgClass="ve-input__form-car-image"
              imgAlt="minivan example"
              imgSrc={minivanIcon}
            />
          </div>

          <div className="ve-input__form-type-box">
            <RadioInput
              inputClass="ve-input__form-radio"
              value="cuv"
              name="carSize"
              handleChange={handleSizeChange}
              labelClass="ve-input__form-size"
              labelTitleClass="ve-input__form-label-title"
              labelTitle="CUV"
              imgBoxClass="ve-input__form-image-box"
              imgClass="ve-input__form-car-image"
              imgAlt="cuv example"
              imgSrc={cuvIcon}
            />

            <RadioInput
              inputClass="ve-input__form-radio"
              value="suv"
              name="carSize"
              handleChange={handleSizeChange}
              labelClass="ve-input__form-size"
              labelTitleClass="ve-input__form-label-title"
              labelTitle="SUV"
              imgBoxClass="ve-input__form-image-box"
              imgClass="ve-input__form-car-image"
              imgAlt="suv example"
              imgSrc={suvIcon}
            />
          </div>

          <div className="ve-input__form-type-box">
            <RadioInput
              inputClass="ve-input__form-radio"
              value="pickup"
              name="carSize"
              handleChange={handleSizeChange}
              labelClass="ve-input__form-size"
              labelTitleClass="ve-input__form-label-title"
              labelTitle="Pick-up"
              imgBoxClass="ve-input__form-image-box"
              imgClass="ve-input__form-car-image"
              imgAlt="pick-up example"
              imgSrc={pickupIcon}
            />

            <RadioInput
              inputClass="ve-input__form-radio"
              value="other"
              name="carSize"
              handleChange={handleSizeChange}
              labelClass="ve-input__form-size"
              labelTitleClass="ve-input__form-label-title"
              labelTitle="Other large"
              imgBoxClass="ve-input__form-image-box"
              imgClass="ve-input__form-car-image"
              imgAlt="other large vehicle example"
              imgSrc={otherIcon}
            />
          </div>
        </div>

        <div className="ve-input__break"></div>

        <div className="ve-input__form-question">
          <label className="ve-input__form-label">
            <span className="span">{'>>'} </span> Select fuel / power source
          </label>

          <div className="ve-input__form-power-box">
            <input
              className="ve-input__form-radio"
              type="radio"
              id="petrol"
              name="userVehiclePower"
              value="petrol"
              onChange={handleChange}
            />
            <label className="ve-input__form-power" htmlFor="petrol">
              <h3 className="ve-input__form-label-title">Fuel</h3>
              <img
                className="ve-input__form-power-icon"
                alt="petrol car icon"
                src={fuelIcon}
              />
            </label>

            <input
              className="ve-input__form-radio"
              type="radio"
              id="hybrid"
              name="userVehiclePower"
              value="hybrid"
              onChange={handleChange}
            />
            <label className="ve-input__form-power" htmlFor="hybrid">
              <h3 className="ve-input__form-label-title">Hybrid</h3>
              <img
                className="ve-input__form-power-icon"
                alt="hybrid car icon"
                src={hybridIcon}
              />
            </label>

            <input
              className="ve-input__form-radio"
              type="radio"
              id="electric"
              name="userVehiclePower"
              value="electric"
              onChange={handleChange}
            />
            <label className="ve-input__form-power" htmlFor="electric">
              <h3 className="ve-input__form-label-title">Electric</h3>
              <img
                className="ve-input__form-power-icon"
                alt="electric car icon"
                src={electricIcon}
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
