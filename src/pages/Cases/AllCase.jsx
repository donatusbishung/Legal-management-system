import React, { useEffect } from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Input from "../../components/input"; // Corrected import statement
import LabelWithAsterisk from "../../components/labelWithAserisk";
import Select from "../../components/Select";
import Button from "../../components/Button";
import CaseHeader from "../../components/CaseHeader";
import Crud from "../../components/Crud";
import Table from "../../components/Table";
import { useState } from "react";
import axios from "axios";

const AllCase = () => {
  const columns = [
    { field: "registrationDate", headerName: "Registration Date", width: 140 },
    { field: "suitNo", headerName: "Suit No", width: 130 },
    { field: "clientName", headerName: "Client Name", width: 150 },
    { field: "lawyerName", headerName: "Lawyer Name", width: 130 },
    { field: "caseStatus", headerName: "Case Status", width: 130 },
    { field: "caseResult", headerName: "Case Result", width: 130 },
    { field: "parties", headerName: "Parties", width: 180 },
  ];

  // here i will import the Api
  // const rows = [];

  // for (let i = 1; i <= 100; i++) {
  //   rows.push({
  //     id: 1,
  //     registrationDate: "10/11/2023",
  //     suitNo: "AKS/124/56",
  //     clientName: "Ministry of Justies",
  //     lawyerName: "James Umoh",
  //     caseStatus: "Open",
  //     caseResult: "Pending",
  //     parties: "Ministry of Agreculture VS Jumbo…",
  //   });
  // }

  const [data, setData] = useState([]);
  const [processedData, setProcessedData] = useState([]);

  useEffect(() => {
    axios
      .get("https://github.com/donatusbishung/json-file/blob/main/db.json")
      .then((response) => {
        const fetchedData = response.data;
        console.log(fetchedData);

        // Processing the data using a for loop
        let tempData = [];
        for (let i = 0; i < fetchedData.length; i++) {
          tempData.unshift(fetchedData[i]);
          // console.log(fetchedData[i]);
        }

        // Updating the state with processed data
        setData(fetchedData);
        setProcessedData(tempData);
      })
      .catch((error) => console.error(error));
  }, []);

  const rows = processedData;

  return (
    <div className="dashboard w-full flex h-screen">
      <div className="div sidebar w-[22%] fixed h-full">
        <SideBar />
      </div>
      <div
        className="main-content min-w-0 w-full "
        style={{ height: "fit-content" }}>
        <Header
          userClass="font-[300]"
          name="Dickson Obi"
          userSrc="src/assets/img/Ellipse 220.png"
          showUser={true}
        />
        <CaseHeader label="All Cases" />
        <Crud />
        <Table columns={columns} rows={rows} />
        <div></div>
      </div>
    </div>
  );
};

export default AllCase;
