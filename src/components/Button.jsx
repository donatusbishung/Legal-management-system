const Button = ({ label, btnType, btnClass, btnClick, icon }) => {
  return (
    <button type={btnType} className={btnClass} onClick={btnClick}> <span>{icon} 
    </span> {label}
    </button>
  );
};

export default Button;