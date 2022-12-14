import React from 'react';

export default function RadioInput({
  inputClass,
  value,
  name,
  handleChange,
  labelClass,
  labelTitleClass,
  labelTitle,
  imgBoxClass,
  imgClass,
  imgAlt,
  imgSrc,
}) {
  return (
    <>
      <input
        className={inputClass}
        type="radio"
        id={value}
        name={name}
        value={value}
        onChange={handleChange}
      />

      <label className={labelClass} htmlFor={value}>
        <h3 className={labelTitleClass}> {labelTitle}</h3>
        <div className={imgBoxClass}>
          <img className={imgClass} alt={imgAlt} src={imgSrc} />
        </div>
      </label>
    </>
  );
}
