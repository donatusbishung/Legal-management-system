import React from "react";
import Bell from "./Bell"; // Assuming you have this component imported
import Input from "./input"; // Assuming you have this component imported
import User from "./User"; // Assuming you have this component imported
import SearchIcon from "@mui/icons-material/Search";

const Header = ({ name, userSrc, userClass, input, showUser }) => {
  return (
    <>
     <div className="flex justify-around">
  <div className="flex w-100 text-white bg-[#696969] items-center w-full justify-end p-2 px-11 gap-4">
    <div className="search flex items-center gap-3 px-2 rounded-[8px] bg-white border">
      <Input
        // label={<SearchIcon style={{ fontSize: 25, order: 2 }} />} // Adjust the fontSize as needed
        labelClass="text-[#AAAAAA]" // Add other classes as needed
        inputType="text"
        placeholder="Search"
        inputClass="border-0 font-[300] outline-0 border-[#AAAAAA] h-0 w-[200px] px-2 py-3"
        contClass="flex items-center gap- px-2  "
      />
      <SearchIcon style={{ fontSize: 25, color: "#AAAAAA" }} />
    </div>

    <div className="div flex items-center gap-3" style={{ marginLeft: 'auto', order: 1 }}>
      <Bell />
      <h3 className={userClass}>{name}</h3>
      {showUser && <User userClass="" userSrc={userSrc} />}
    </div>
  </div>
</div>

    </>
  );
};

export default Header;

<div className="search">
  <Input
    label={<SearchIcon style={{ fontSize: 25 }} />} // Adjust the fontSize as needed
    labelClass="text-[#AAAAAA]" // Add other classes as needed
    inputType="text"
    placeholder="Search Table"
    inputClass="border-0 font-[200] outline-0 border-[#AAAAAA] h-0 w-[180px] px-2 py-3"
    contClass="flex items-center gap- px-2  border"
  />
</div>;
