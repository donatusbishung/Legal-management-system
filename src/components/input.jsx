import React from 'react';
import { format } from 'date-fns';

function Input({
  inputType,
  inputName,
  value,
  placeholder,
  onChange,
  labelFor,
  label,
  inputClass,
  labelClass,
  contClass,
  accept
}) {
  const formattedValue = inputType === 'date' && value ? format(new Date(value), 'yyyy-MM-dd') : value;
  
  const inputField = inputType === 'textarea' ? (
    <textarea
      name={inputName}
      value={formattedValue}
      placeholder={placeholder}
      onChange={onChange}
      className={`bg-transparent py-4 ${inputClass}`}
    />
  ) : (
    <input
      type={inputType}
      name={inputName}
      value={formattedValue}
      placeholder={placeholder}
      accept={accept}
      onChange={onChange}
      className={`bg-transparent py-4 ${inputClass}`}
      
    />
  );

  return (
    <div className={contClass}>
      <label
        htmlFor={labelFor}
        className={labelClass}
      >
        {label}
      </label>
      {inputField}
    </div>
  );
}

export default Input;
