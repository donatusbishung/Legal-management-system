import React from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Input from "../../components/input"; // Corrected import statement
import LabelWithAsterisk from "../../components/labelWithAserisk";
import Select from "../../components/Select";
import Button from "../../components/Button";
import CaseHeader from "../../components/CaseHeader";

const addCase = () => {
  const options = [
    { value: "1", label: "Select" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];


  return (
    <div className="dashboard w-full flex h-screen">
      <div className="div sidebar w-[22%] fixed h-full">
      <SideBar />
      </div>
      
      <div className="main-content w-full " style={{ height: "fit-content" }}>
        <Header
          userClass="font-[300]"
          name="Dickson Obi"
          userSrc="src/assets/img/Ellipse 220.png"
          showUser={true}
        />{" "}
        {/* Double-check the file path */}
        <CaseHeader 
        label="Add Case"
        caseClass="shadow"
        />
        <div className="grid grid-cols-2 mt-4">
          <div>
            <Input
              labelClass="text-[18px] text-[#050505] font-[400]"
              inputType="date"
              label={<LabelWithAsterisk name="Registeration Date" />}
              contClass="flex items-center px-6 py-4 justify-between"
              placeholder="DD/MM/YYYY"
              inputClass="bg-red-400 w-3/5 text-[#AAAAAA] text-[14px] uppercase h-0 p-2 border-[#AAAAAA] border-b-[0.5px]"
            />

            <Select
              label={<LabelWithAsterisk name="Client Type" />} // Assuming LabelWithAsterisk is defined and imported correctly
              options={options}
              contClass="flex items-center justify-between px-6 py-3 "
              labelClass="text-[18px] text-[#050505] font-[400]"
              optionClassName="bg-transparent w-3/5 text-[#AAAAAA] text-[14px]  h-5 p-1 border-[#AAAAAA] border-b-[0.5px]"
              selectClass=" justify-end outline-0 bg-transparent w-3/5 text-[#AAAAAA] text-[14px] p-1 border-[#AAAAAA] border-b-[0.5px]"
            />

            <Select
              label={<LabelWithAsterisk name="Case Status" />} // Assuming LabelWithAsterisk is defined and imported correctly
              options={options}
              contClass="flex items-center justify-between px-6 py-3 "
              labelClass="text-[18px] text-[#050505] font-[400]"
              optionClassName="bg-transparent w-3/5 text-[#AAAAAA] text-[14px]  h-5 p-1 border-[#AAAAAA] border-b-[0.5px]"
              selectClass=" justify-end outline-0 bg-transparent w-3/5 text-[#AAAAAA] text-[14px]   p-1 border-[#AAAAAA] border-b-[0.5px]"
            />

            <Select
              label={<LabelWithAsterisk name="Lawyer Name" />} // Assuming LabelWithAsterisk is defined and imported correctly
              options={options}
              contClass="flex items-center justify-between px-6 py-3 "
              labelClass="text-[18px] text-[#050505] font-[400]"
              optionClassName="bg-transparent w-3/5 text-[#AAAAAA] text-[14px] h-5 p-1 border-[#AAAAAA] border-b-[0.5px]"
              selectClass=" justify-end outline-0 bg-transparent w-3/5 text-[#AAAAAA] text-[14px]  p-1 border-[#AAAAAA] border-b-[0.5px]"
            />

            <Select
              label={<LabelWithAsterisk name="Client Name" />} // Assuming LabelWithAsterisk is defined and imported correctly
              options={options}
              contClass="flex items-center justify-between px-6 py-3 "
              labelClass="text-[18px] text-[#050505] font-[400]"
              optionClassName="bg-transparent w-3/5 text-[#AAAAAA] text-[14px] h-5 p-1 border-[#AAAAAA] border-b-[0.5px]"
              selectClass=" justify-end outline-0 bg-transparent w-3/5 text-[#AAAAAA] text-[14px]   p-1 border-[#AAAAAA] border-b-[0.5px]"
            />
            <Input
              labelClass="text-[18px] text-[#050505] font-[400]"
              inputType="text"
              label={<LabelWithAsterisk name="Parties 1" />}
              contClass="flex items-center px-6 py-2 justify-between"
              // placeholder="DD/MM/YYYY"
              inputClass="bg-red-400 w-3/5 text-[#AAAAAA] text-[14px]  h-5 p-1 border-[#AAAAAA] border-b-[0.5px]"
            />
            <Input
              labelClass="text-[18px] text-[#050505] font-[400]"
              inputType="text"
              label="Parties 2"
              contClass="flex items-center px-6 py-2 justify-between"
              // placeholder="DD/MM/YYYY"
              inputClass="bg-red-400 w-3/5 text-[#AAAAAA] text-[14px]  h-5 p-1 border-[#AAAAAA] border-b-[0.5px]"
            />
            <Input
              labelClass="text-[18px] text-[#050505] font-[400]"
              inputType="text"
              label="Parties 3"
              contClass="flex items-center px-6 py-2 justify-between"
              // placeholder="DD/MM/YYYY"
              inputClass="bg-red-400 w-3/5 text-[#AAAAAA] text-[14px]  h-5 p-1 border-[#AAAAAA] border-b-[0.5px]"
            />
          </div>
          <div className="">
            <Input
              labelClass="text-[18px] text-[#050505] font-[400]"
              inputType="text"
              label={<LabelWithAsterisk name="Suit No." />}
              contClass="flex items-center px-6 py-4 justify-between"
              // placeholder="DD/MM/YYYY"
              inputClass="bg-red-400 w-3/5 text-[#AAAAAA] text-[14px]  h-5 p-1  border-[#AAAAAA] border-b-[0.5px]"
            />
            <Input
              labelClass="text-[18px] text-[#050505] font-[400]"
              inputType="textarea"
              label={<LabelWithAsterisk name="Case Description" />}
              contClass="flex  px-6 py-4 justify-between"
              // placeholder="DD/MM/YYYY"
              inputClass="bg-red-400 w-3/5 text-[#AAAAAA] text-[14px] outline-0  h-[172px]  border-[#AAAAAA] border-b-[0.5px]"
            />
            <div className="div">
              <Select
                label={<LabelWithAsterisk name="Court" />} // Assuming LabelWithAsterisk is defined and imported correctly
                options={options}
                contClass="flex items-center justify-between px-6 py-3 "
                labelClass="text-[18px] text-[#050505] font-[400]"
                optionClassName="bg-transparent w-3/5 text-[#AAAAAA] text-[14px] uppercase h-0 p-2 border-[#AAAAAA] border-b-[0.5px]"
                selectClass=" justify-end outline-0 bg-transparent w-3/5 text-[#AAAAAA] text-[14px] p-1 border-[#AAAAAA] border-b-[0.5px]"
              />
              <Select
                label="Judges" // Assuming LabelWithAsterisk is defined and imported correctly
                options={options}
                contClass="flex items-center justify-between px-6 py-3 "
                labelClass="text-[18px] text-[#050505] font-[400]"
                optionClassName="bg-transparent w-3/5 text-[#AAAAAA] text-[14px] uppercase h-0 p-2 border-[#AAAAAA] border-b-[0.5px]"
                selectClass=" justify-end outline-0 bg-transparent w-3/5 text-[#AAAAAA] text-[14px]  p-1 border-[#AAAAAA] border-b-[0.5px]"
              />
              <Select
                label="Case Results" // Assuming LabelWithAsterisk is defined and imported correctly
                options={options}
                contClass="flex items-center justify-between px-6 py-3 "
                labelClass="text-[18px] text-[#050505] font-[400]"
                optionClassName="bg-transparent w-3/5 text-[#AAAAAA] text-[14px] uppercase h-0 p-2 border-[#AAAAAA] border-b-[0.5px]"
                selectClass=" justify-end outline-0 bg-transparent w-3/5 text-[#AAAAAA] text-[14px] p-1 border-[#AAAAAA] border-b-[0.5px]"
              />
            </div>
          </div>
          {/* Corrected class attribute */}
        </div>
        <div className="buttons flex items-center justify-center gap-10  mt-[25px] ">
          <Button
            label="Submit"
            btnType="submit"
            btnClass="px-8 shadow py-2 bg-[#7C7C7C] rounded-[3px] text-[16px] font-[300] text-white justify-center items-center"
          />
          <Button
            label="Reset"
            btnType="submit"
            btnClass="px-8 shadow py-2 bg-[#EEF1F7] rounded-[3px] text-[16px] font-[300] text-[#7C7C7C] justify-center items-center"
          />
        </div>
      </div>
      {/* console.log("Hello world!"); */}
    </div>
  );
};

export default addCase;
