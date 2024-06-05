const Select = ({
  label,
  options,
  contClass,
  labelClass,
  optionClassName,
  selectClass,
  handleChange,
  inputName,
  elemState,
}) => {
  // console.log("elem", elemState);
  return (
    <div className={contClass}>
      <label className={labelClass}>{label}</label>
      <select
        className={selectClass}
        name={inputName}
        // defaultValue={options[0].value}
        value={elemState}
        onChange={handleChange}>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={optionClassName}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
