import React from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Input from "../../components/input"; // Corrected import statement
import LabelWithAsterisk from "../../components/labelWithAserisk";
import Select from "../../components/Select";
import Button from "../../components/Button";
import CaseHeader from "../../components/CaseHeader";
import Crud from "../../components/Crud";
import Table from "../../components/Table";

const UpcomingHearing = () => {
  const columns = [
    { field: "suitNo", headerName: "Suit No", width: 200 },
    { field: "lawyer", headerName: "Lawyer", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "hearingDate", headerName: "Hearing Date ", width: 200 },
    { field: "adjustedDate", headerName: "Adjusted Date", width: 200 },
  ];

  const rows = [];
  for (let i = 1; i <= 100; i++) {
    rows.push({
      id: i,
      suitNo: "AKS/234/678",
      lawyer: "Umoh White Okon",
      email: "umoh.white@gmail.com",
      hearingDate: "Agenda of l….",
      adjustedDate: "Male",
    });
    

  }

  return (
    <div className="dashboard w-full flex h-screen">
      <div className="div sidebar w-[22%] fixed h-full">
      <SideBar />
      </div>
      <div
        className="main-content min-w-0 w-full "
        style={{ height: "fit-content" }}
      >
        <Header
          userClass="font-[300]"
          name="Dickson Obi"
          userSrc="src/assets/img/Ellipse 220.png"
          showUser={true}
        />
        <CaseHeader label="Upcoming Hearings" />
        <Crud />
        <Table columns={columns} rows={rows} />
        <div></div>
      </div>
    </div>
  );
};

export default UpcomingHearing;
