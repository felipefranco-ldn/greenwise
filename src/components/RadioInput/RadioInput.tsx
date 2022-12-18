export default function RadioInput({
  // @ts-ignore
  inputClass,
  // @ts-ignore
  value,
  // @ts-ignore
  name,
  // @ts-ignore
  handleChange,
  // @ts-ignore
  labelClass,
  // @ts-ignore
  labelTitleClass,
  // @ts-ignore
  labelTitle,
  // @ts-ignore
  imgBoxClass,
  // @ts-ignore
  imgClass,
  // @ts-ignore
  imgAlt,
  // @ts-ignore
  imgSrc
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
