const LabelWithAsterisk = ({name}) => {
    return (
      <span>
        {name} <span style={{ color: 'red' }}>*</span> 
      </span>
    );
  };
  export default LabelWithAsterisk;