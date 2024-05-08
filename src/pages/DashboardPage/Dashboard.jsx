import React from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Input from "../../components/input"; // Corrected import statement
import LabelWithAsterisk from "../../components/labelWithAserisk";
import Select from "../../components/Select";
import Button from "../../components/Button";

const Dashboard = () => {
  const options = [
    { value: "1", label: "Select" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  return (
    <div className="dashboard w-full flex h-screen">
      <SideBar />
      <div
        className="main-content w-full "
        style={{ height: "fit-content" }}
      >
        <Header
          userClass="font-[300]"
          name="Dickson Obi"
          userSrc="src/assets/img/Ellipse 220.png"
          showUser={true}
        />
        <div className="div flex h-screen   justify-center items-center">
          <h2 className="text-3xl bg-slate-500 items-center ">WORK IN POGRESS</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
