import React from "react";
import SideBar from "../../components/SideBar";
import DashboardHeader from "../../components/DashboardHeader";
import Input from "../../components/input"; // Corrected import statement
import LabelWithAsterisk from "../../components/labelWithAserisk";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Box from "../../components/Box";
import Bar from "../../components/Bar";
import CaseHeader from "../../components/CaseHeader";
import SearchIcon from "@mui/icons-material/Search";
import Table from "../../components/Table";

const Dashboard = () => {
  const options = [
    { value: "1", label: "Select" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  const columns = [
    { field: "registrationDate", headerName: "Registration Date", width: 140 },
    { field: "suitNo", headerName: "Suit No", width: 130 },
    { field: "clientName", headerName: "Client Name", width: 150 },
    { field: "lawyerName", headerName: "Lawyer Name", width: 130 },
    { field: "caseStatus", headerName: "Case Status", width: 130 },
    { field: "caseResult", headerName: "Case Result", width: 130 },
    { field: "parties", headerName: "Parties", width: 180 },
  ];

  const rows = [];
  for (let i = 1; i <= 100; i++) {
    rows.push({
      id: 1,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    });
  }

  return (
    <div className="dashboard w-full flex h-screen">
      <div className="sidebar w-[22%] fixed h-full">
        <SideBar />
      </div>

      <div className="main-content w-[78%] ml-[22%] flex flex-col">
        <DashboardHeader
          userClass="font-[300] "
          name="Dickson Obi"
          userSrc="src/assets/img/Ellipse 220.png"
          showUser={true}
          InputComponent={Input}
        />

        <div className="flex gap-7 mt-4 px-10">
          <Box
            label="Number of Lawyers"
            contClass="custom-box-style px-8 p-4"
            labelNumber="140"
            background="linear-gradient(179.78deg, #0B6993 12.22%, #66C2F2 115.53%)"
          />
          <Box
            label="Closed Case"
            contClass="custom-box-style px-8 p-4"
            labelNumber="120"
            background="linear-gradient(179.78deg, #808080 12.22%, #E0DDDD  115.53%)"
          />
          <Box
            label="Won Cases"
            contClass="custom-box-style px-8 p-4"
            labelNumber="89"
            background="linear-gradient(179.78deg, #419840 12.22%, #B3EB59  115.53%)"
          />
          <Box
            label="Ongoing Case"
            contClass="custom-box-style px-8 p-4"
            labelNumber="46"
            background="linear-gradient(179.78deg, #811313 12.22%, #DD016F  115.53%)"
          />
        </div>
        <Bar />
        <div className="div shadow">
        <div className="flex justify-between mt-3  ">
          <CaseHeader label="New Cases With Hearing Dates" />
          <Input
            label={<SearchIcon style={{ fontSize: 25 }} />}
            labelClass="text-[#AAAAAA]"
            inputType="text"
            placeholder="Search Table"
            inputClass="border-0 font-[200] outline-0 border-[#AAAAAA] h-0 w-[180px] px-2 py-3"
            contClass="flex items-center gap- px-2  border"
          />
        </div>
        <Table columns={columns} rows={rows} />
        </div>
       
      </div>
    </div>
  );
};

export default Dashboard;
