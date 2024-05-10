import React from "react";
import Bell from "./Bell"; // Assuming you have this component imported
import Input from "./input"; // Assuming you have this component imported
import User from "./User"; // Assuming you have this component imported

const Header = ({ name, userSrc, userClass, input, showUser }) => {
  return (
    <>
      <div className="flex w-100 text-white bg-[#696969] items-center w-full justify-end p-2 px-11 gap-4">
        <Bell />
        <h3 className={userClass}>{name}</h3>
        {showUser && <User userClass="" userSrc={userSrc} />}
      </div>
    </>
  );
};

export default Header;
