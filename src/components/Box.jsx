import React from "react";

const Box = ({ label, contClass, labelNumber, background }) => (
    <div className={contClass} style={{ background }}>
      <div className="total-bookings mt-1">
        {label}
      </div>
      <div className="total-bookings-value mt-4">
        {labelNumber}
      </div>
    </div>
  );
  
  

export default Box;
