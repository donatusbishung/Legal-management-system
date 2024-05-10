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

const AllLawyers = () => {
  const columns = [
    { field: "firstName", headerName: "First Name", width: 140 },
    { field: "middleName", headerName: "Middle Name", width: 130 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "lawyerType", headerName: "Lawyer Type", width: 130 },
    { field: "cases", headerName: "Cases", width: 130 },
    { field: "lawPoints", headerName: "Law Points", width: 130 },
    { field: "gender", headerName: "Gender", width: 180 },
  ];

  const rows = []
  for (let i = 1; i <= 100; i++) {
    rows.push({
      id: i,
      firstName: "Musa",
      middleName: "Buga",
      lastName: "Umoh",
      lawyerType: "Civil",
      cases: 12,
      lawPoints: 24,
      gender: "Male",
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
        <CaseHeader label="All Lawyers" />
        <Crud />
        <Table columns={columns} rows={rows} />
        <div></div>
      </div>
    </div>
  );
};

export default AllLawyers;
