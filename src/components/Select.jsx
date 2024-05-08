const Select = ({ label, options, contClass, labelClass, optionClassName, selectClass }) => {
    return (
      <div className={contClass}>
        <label className={labelClass}>{label}</label>
        <select className={selectClass} defaultValue={options[0].value}>
          {options.map((option) => (
            <option key={option.value} value={option.value} className={optionClassName}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default Select;
  