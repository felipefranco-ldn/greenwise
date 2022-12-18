import RadioInput from "../RadioInput/RadioInput";

// @ts-ignore
export default function ElectricityInput({
  // @ts-ignore
  apartmentIcon,
  // @ts-ignore
  houseIcon,
  // @ts-ignore
  userCountry,
  // @ts-ignore
  handleCountryChange,
  // @ts-ignore
  handleChange,
  // @ts-ignore
  handleBedroomsChange
}) {
  return (
    <div className="el-input">
      <form className="el-input__form">
        <div className="el-input__form-question">
          <label htmlFor="userCountry" className="el-input__form-label">
            <span className="span">{">>"}</span> First, please select your
            country of residence
          </label>
          <select
            name="userCountry"
            className="el-input__form-select"
            onChange={handleCountryChange}
            value={userCountry}
          >
            <option value="">Where is your home?</option>
            <option value="gb">🇬🇧 United Kingdom</option>
            <option value="us">🇺🇸 United States of America</option>
            <option value="ca">🇨🇦 Canada</option>
            <option value="at">🇦🇹 Austria</option>
            <option value="be">🇧🇪 Belgium</option>
            <option value="bg">🇧🇬 Bulgaria</option>
            <option value="hr">🇭🇷 Croatia</option>
            <option value="cy">🇨🇾 Cyprus</option>
            <option value="cz">🇨🇿 Czechia</option>
            <option value="dk">🇩🇰 Denmark</option>
            <option value="ee">🇪🇪 Estonia</option>
            <option value="fi">🇫🇮 Finland</option>
            <option value="fr">🇫🇷 France</option>
            <option value="de">🇩🇪 Germany</option>
            <option value="gr">🇬🇷 Greece</option>
            <option value="hu">🇭🇺 Hungary</option>
            <option value="ie">🇮🇪 Ireland</option>
            <option value="it">🇮🇹 Italy</option>
            <option value="lv">🇱🇻 Latvia</option>
            <option value="lt">🇱🇹 Lithuania</option>
            <option value="lu">🇱🇺 Luxembourg</option>
            <option value="mt">🇲🇹 Malta</option>
            <option value="nl">🇳🇱 Netherlands</option>
            <option value="pl">🇵🇱 Poland</option>
            <option value="pt">🇵🇹 Portugal</option>
            <option value="ro">🇷🇴 Romania</option>
            <option value="sk">🇷🇸 Slovakia</option>
            <option value="si">🇸🇰 Slovenia</option>
            <option value="es">🇪🇸 Spain</option>
            <option value="se">🇸🇪 Sweden</option>
          </select>
        </div>

        <div className="el-input__form-question">
          <label className="el-input__form-label">
            <span className="span">&gt;&gt; </span> Now select your type of home
          </label>

          <div className="el-input__form-home-box">
            <RadioInput
              inputClass="el-input__form-radio"
              value="apartment"
              name="userHomeType"
              handleChange={handleChange}
              labelClass="el-input__form-home-type"
              labelTitleClass="el-input__form-label-title"
              labelTitle="Apartment"
              imgBoxClass="el-input__form-image-box"
              imgClass="el-input__form-home-image"
              imgAlt="apartment example"
              imgSrc={apartmentIcon}
            />

            <RadioInput
              inputClass="el-input__form-radio"
              value="house"
              name="userHomeType"
              handleChange={handleChange}
              labelClass="el-input__form-home-type"
              labelTitleClass="el-input__form-label-title"
              labelTitle="House"
              imgBoxClass="el-input__form-image-box"
              imgClass="el-input__form-home-image"
              imgAlt="house example"
              imgSrc={houseIcon}
            />
          </div>
        </div>

        <div className="el-input__form-question">
          <label className="el-input__form-label">
            <span className="span">&gt;&gt; </span>And finally, how many
            bedrooms are there in your home?
          </label>

          <div className="el-input__form-bedrooms-box">
            <input
              className="el-input__form-radio"
              type="radio"
              id="1bedroom"
              name="userElValue"
              value="1"
              onChange={handleBedroomsChange}
            />
            <label className="el-input__form-bedrooms" htmlFor="1bedroom">
              <span className="span--number"> 1 </span>
              <br />
              bedroom
            </label>

            <input
              className="el-input__form-radio"
              type="radio"
              id="2bedrooms"
              name="userElValue"
              value="2"
              onChange={handleBedroomsChange}
            />
            <label className="el-input__form-bedrooms" htmlFor="2bedrooms">
              <span className="span--number"> 2 </span>
              <br />
              bedrooms
            </label>
          </div>

          <div className="el-input__form-bedrooms-box">
            <input
              className="el-input__form-radio"
              type="radio"
              id="3bedrooms"
              name="userElValue"
              value="3"
              onChange={handleBedroomsChange}
            />
            <label className="el-input__form-bedrooms" htmlFor="3bedrooms">
              <span className="span--number"> 3 </span> <br />
              bedrooms
            </label>

            <input
              className="el-input__form-radio"
              type="radio"
              id="4bedrooms"
              name="userElValue"
              value="4"
              onChange={handleBedroomsChange}
            />
            <label className="el-input__form-bedrooms" htmlFor="4bedrooms">
              <span className="span--number"> 4 </span>
              <br />
              bedrooms +
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
