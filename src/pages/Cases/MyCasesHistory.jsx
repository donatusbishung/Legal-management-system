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

const MyCaseHistory = () => {
  const columns = [
    { field: "registrationDate", headerName: "Registration Date", width: 140,},
    { field: "suitNo", headerName: "Suit No", width: 130 },
    { field: "clientName", headerName: "Client Name", width: 150  },
    { field: "lawyerName", headerName: "Lawyer Name", width: 130 },
    { field: "caseStatus", headerName: "Case Status", width: 130 },
    { field: "caseResult", headerName: "Case Result", width: 130 },
    { field: "parties", headerName: "Parties", width: 180 },
  ];

  const rows = [
    {
      id: 1,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 2,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 3,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 4,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 5,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 6,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 7,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 8,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 9,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 10,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 11,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 12,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 13,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 14,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 15,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 16,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 17,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 18,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 19,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 20,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 21,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 22,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 23,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 24,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 25,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 26,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 27,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 28,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 29,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 30,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 31,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 32,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 33,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 34,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 35,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    {
      id: 36,
      registrationDate: "10/11/2023",
      suitNo: "AKS/124/56",
      clientName: "Ministry of Justies",
      lawyerName: "James Umoh",
      caseStatus: "Open",
      caseResult: "Pending",
      parties: "Ministry of Agreculture VS Jumbo…",
    },
    // Continue filling up to 98
  ];

  return (
    <div className="dashboard w-full flex h-screen">
      <SideBar />
      <div className="main-content min-w-0 w-full " style={{ height: "fit-content" }}>
        <Header
          userClass="font-[300]"
          name="Dickson Obi"
          userSrc="src/assets/img/Ellipse 220.png"
          showUser={true}
        />
        <CaseHeader label="All Cases" />
        <Crud />
        <Table 
        
        columns={columns} rows={rows} />
        <div>
         
        </div>
      </div>
    </div>
  );
};

export default MyCaseHistory;
