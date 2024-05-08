import React from 'react';
import { Link } from 'react-router-dom';
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import GridViewIcon from "@mui/icons-material/GridView";
import ListItem from "./ListItem"; // Import your ListItem component
import Dropdown from "./Dropdown"
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import BalanceIcon from '@mui/icons-material/Balance';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SettingsIcon from '@mui/icons-material/Settings';

export default function NestedList() {
  return (
      <div className="div-1 bg-[#696969] w-[22%] h-screen overflow-y-auto">
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
          <ListItem label={<Link to="/dashboard" className="text-white">Dashboard</Link>} icon={<GridViewIcon />} />
          <Dropdown 
            label="Cases"
            mainIcon={<HomeRepairServiceIcon />}
            subItems={[
              { label: <Link to="/addCase" className="text-[14px]">Add Cases</Link>, icon: <HomeRepairServiceIcon  /> },
              { label:<Link to="/allCase" className="text-[14px]">All Cases</Link> , icon: <HomeRepairServiceIcon  /> },
              { label:<Link to="/pendingCases" className="text-[14px]">All Pending Cases</Link>, icon: <HomeRepairServiceIcon  /> },
              { label:<Link to="/allCaseHistory" className="text-[14px]">All Case History</Link> , icon: <HomeRepairServiceIcon  /> },
              { label:<Link to="/myOpenCases" className="text-[14px]">My Open Cases</Link>, icon: <HomeRepairServiceIcon  /> },
              { label:<Link to="/myPendingCases" className="text-[14px]">My Pending Cases</Link>, icon: <HomeRepairServiceIcon  /> },
              { label:<Link to="/myCasesHistory" className="text-[14px]">My Case History</Link> , icon: <HomeRepairServiceIcon  /> },
            ]}
          />
          {/* Add other list items or dropdowns here */}
          {/* Dropdowns go here */}
          <Dropdown
            label="Lawyers"
            mainIcon={<BalanceIcon />}
            subItems={[
              { label: "Add Lawyers", icon: <BalanceIcon /> },
              { label: "All Lawyers", icon: <BalanceIcon /> },
            ]}
          />

          {/* casepoint */}
          <Dropdown
            label="Case Point"
            mainIcon={<ImportContactsIcon/>}
            subItems={[
              { label: "Add Lawyers", icon: <ImportContactsIcon  /> },
              { label: "All Lawyers", icon: <ImportContactsIcon  /> },
              { label: "All Lawyers", icon: <ImportContactsIcon  /> },
            ]}
          />

          {/* Hearing Dtails */}
          <Dropdown
            label="Hearing Details"
            mainIcon={<SpeakerPhoneIcon/>}
            subItems={[
              { label: "Add Lawyers", icon: <SpeakerPhoneIcon  /> },
              { label: "All Lawyers", icon: <SpeakerPhoneIcon  /> },
              { label: "All Lawyers", icon: <SpeakerPhoneIcon  /> },
              { label: "All Lawyers", icon: <SpeakerPhoneIcon  /> },
              { label: "All Lawyers", icon: <SpeakerPhoneIcon  /> },
              { label: "All Lawyers", icon: <SpeakerPhoneIcon  /> },
            ]}
          />
          {/* Documentation */}
          <Dropdown
            label="Documentation"
            mainIcon={<TextSnippetIcon />}
            subItems={[
              { label: "Add Lawyers", icon: <TextSnippetIcon /> },
              { label: "All Lawyers", icon: <TextSnippetIcon /> },
            ]}
          />

          {/* settings */}
          <Dropdown
            label="Settings"
            mainIcon={<SettingsIcon/>}
            subItems={[
              { label: "Add Lawyers", icon: <SettingsIcon  /> },
              { label: "All Lawyers", icon: <SettingsIcon  /> },
              { label: "All Lawyers", icon: <SettingsIcon  /> },
              { label: "All Lawyers", icon: <SettingsIcon  /> },
              { label: "All Lawyers", icon: <SettingsIcon  /> },
              { label: "All Lawyers", icon: <SettingsIcon  /> },
            ]}
          />
        </List>
      </div>
  );
}
