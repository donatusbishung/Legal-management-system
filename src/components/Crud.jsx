import React from "react";
import Input from "./input";
import Button from "./Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Select from "./Select";

const Crud = () => {
  const options = [
    { value: "1", label: "10" },
    { value: "2", label: "9" },
    { value: "3", label: "8" },
    { value: "3", label: "7" },
    { value: "3", label: "6" },
    { value: "3", label: "5" },
    { value: "3", label: "4" },
    { value: "3", label: "3" },
    { value: "3", label: "2" },
    { value: "3", label: "1" },
  ];
  return (
    <div className="flex justify-between mt-2 px-6">
      <div className="search">
        <Input
          label={<SearchIcon  style={{ fontSize: 25, }}  />} // Adjust the fontSize as needed
          labelClass="text-[#AAAAAA]" // Add other classes as needed
          inputType="text"
          placeholder="Search Table"
          inputClass="border-0 font-[200] outline-0 border-[#AAAAAA] h-0 w-[180px] px-2 py-3"
          contClass="flex items-center gap- px-2  border"
        />
      </div>
      <div className="crudFunctions flex gap-4">
        <Button
          label="Add"
          btnType="button"
          btnClass="px-4 shadow py-1 bg-[#AAAAAA] rounded-[3px] text-[12px] font-[500] text-[#050505] flex justify-center items-center"
          btnClick={() => console.log("Button clicked")} // Add your button click handler
          icon={<AddIcon />}
        />

        {/* delete */}
        <Button
          label="Delete"
          btnType="button"
          btnClass="px-4 shadow py-1 bg-[#AAAAAA] rounded-[3px] text-[12px] font-[500] text-[#050505] flex justify-center items-center"
          btnClick={() => console.log("Button clicked")} // Add your button click handler
          icon={<DeleteIcon />}
        />
        <Button
          label="Edit"
          btnType="button"
          btnClass="px-4 shadow py-1 bg-[#AAAAAA] rounded-[3px] text-[12px] font-[500] text-[#050505] flex justify-center items-center"
          btnClick={() => console.log("Button clicked")} // Add your button click handler
          icon={<EditNoteIcon />}
        />
        <Button
          label="Export"
          btnType="button"
          btnClass="px-4 shadow py-1 bg-[#AAAAAA] rounded-[3px] text-[12px] font-[500] text-[#050505] flex justify-center items-center"
          btnClick={() => console.log("Button clicked")} // Add your button click handler
          icon={<FileDownloadOutlinedIcon />}
        />
        <Button
          label="Import"
          btnType="button"
          btnClass="px-4 shadow py-1 bg-[#AAAAAA] rounded-[3px] text-[12px] font-[500] text-[#050505] flex justify-center items-center"
          btnClick={() => console.log("Button clicked")} // Add your button click handler
          icon={<FileUploadOutlinedIcon />}
        />
        <Button
          label="Print"
          btnType="button"
          btnClass="px-4 shadow py-1 bg-[#AAAAAA] rounded-[3px] text-[12px] font-[500] text-[#050505] flex justify-center items-center"
          btnClick={() => console.log("Button clicked")} // Add your button click handler
          icon={<LocalPrintshopOutlinedIcon />}
        />
        <Select
          options={options}
          contClass="flex items-center justify-between px-0 py-0 "
          labelClass="text-[18px] text-[#050505] font-[400]"
          optionClassName="bg-transparent w-3/5 text-[#AAAAAA] text-[14px] uppercase h-5 p-2 border-[#AAAAAA] border-b-[0.5px]"
          selectClass=" outline-0  w-[80px] text-[#AAAAAA] text-[12px] border p-1 border-[#AAAAAA] "
        />
      </div>
    </div>
  );
};

export default Crud;
