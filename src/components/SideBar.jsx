import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import GridViewIcon from "@mui/icons-material/GridView";
import ListItem from "./ListItem"; // Import your ListItem component
import Dropdown from "./Dropdown";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import BalanceIcon from "@mui/icons-material/Balance";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SpeakerPhoneIcon from "@mui/icons-material/SpeakerPhone";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SettingsIcon from "@mui/icons-material/Settings";

export default function NestedList() {
  return (
    <div className="div-1 bg-[#696969] ">
      <List
        className="  m-w-m"
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            className="custom-subheader p-1"
            component="div"
            id="nested-list-subheader"
          >
            <h2 className="text-[15px] text-white font-[300]">
              LEGAL CASE MANAGEMENT
            </h2>
          </ListSubheader>
        }
      >
        <ListItem
          label={
            <Link to="/dashboard" className="text-white">
              Dashboard
            </Link>
          }
          icon={<GridViewIcon />}
        />
        <Dropdown
          label="Cases"
          mainIcon={<HomeRepairServiceIcon />}
          subItems={[
            {
              label: (
                <Link to="/addCase" className="text-[14px]">
                  Add Cases
                </Link>
              ),
              icon: <HomeRepairServiceIcon />,
            },
            {
              label: (
                <Link to="/allCase" className="text-[14px]">
                  All Cases
                </Link>
              ),
              icon: <HomeRepairServiceIcon />,
            },
            {
              label: (
                <Link to="/pendingCases" className="text-[14px]">
                  All Pending Cases
                </Link>
              ),
              icon: <HomeRepairServiceIcon />,
            },
            {
              label: (
                <Link to="/allCaseHistory" className="text-[14px]">
                  All Case History
                </Link>
              ),
              icon: <HomeRepairServiceIcon />,
            },
            {
              label: (
                <Link to="/myOpenCases" className="text-[14px]">
                  My Open Cases
                </Link>
              ),
              icon: <HomeRepairServiceIcon />,
            },
            {
              label: (
                <Link to="/myPendingCases" className="text-[14px]">
                  My Pending Cases
                </Link>
              ),
              icon: <HomeRepairServiceIcon />,
            },
            {
              label: (
                <Link to="/myCasesHistory" className="text-[14px]">
                  My Case History
                </Link>
              ),
              icon: <HomeRepairServiceIcon />,
            },
          ]}
        />
        {/* Add other list items or dropdowns here */}
        {/* Dropdowns go here */}
        <Dropdown
          label="Lawyers"
          mainIcon={<BalanceIcon />}
          subItems={[
            {
              label: (
                <Link to="/addLawyers" className="text-[14px]">
                  Add Lawyers
                </Link>
              ),
              icon: <BalanceIcon />,
            },
            {
              label: (
                <Link to="/allLawyers" className="text-[14px]">
                  All Lawyers 
                </Link>
              ),
              icon: <BalanceIcon />,
            },
          ]}
        />

        {/* casepoint */}
        <Dropdown
          label="Case Point"
          mainIcon={<ImportContactsIcon />}
          subItems={[
            { label: <Link to="/addCasePoint" className="text-[14px]">Add Case Points</Link>  , icon: <ImportContactsIcon /> },
            { label: "All Case Points", icon: <ImportContactsIcon /> },
            { label: "My case Points", icon: <ImportContactsIcon /> },
          ]}
        />

        {/* Hearing Dtails */}
        <Dropdown
          label="Hearing Details"
          mainIcon={<SpeakerPhoneIcon />}
          subItems={[
            { label: "Add Hearing Details", icon: <SpeakerPhoneIcon /> },
            { label: <Link to="/upcomingHearing" className="text-[14px]">Upcoming Hearings</Link> , icon: <SpeakerPhoneIcon /> },
            { label: "Hearing History", icon: <SpeakerPhoneIcon /> },
            { label: "My Upcoming Hearing", icon: <SpeakerPhoneIcon /> },
            { label: "My Hearing History", icon: <SpeakerPhoneIcon /> },
            { label: "My Upcoming Hearing", icon: <SpeakerPhoneIcon /> },
          ]}
        />
        {/* Documentation */}
        <Dropdown
          label="Documentation"
          mainIcon={<TextSnippetIcon />}
          subItems={[
            { label: "Documents", icon: <TextSnippetIcon /> },
            { label: "All Documents", icon: <TextSnippetIcon /> },
          ]}
        />

        {/* settings */}
        <Dropdown
          label="Settings"
          mainIcon={<SettingsIcon />}
          subItems={[
            { label: "Judges", icon: <SettingsIcon /> },
            { label: "Lawyer Types", icon: <SettingsIcon /> },
            { label: "Case Types", icon: <SettingsIcon /> },
            { label: "Courts", icon: <SettingsIcon /> },
            { label: "Add User", icon: <SettingsIcon /> },
            { label: "All Users", icon: <SettingsIcon /> },
          ]}
        />
      </List>
    </div>
  );
}
