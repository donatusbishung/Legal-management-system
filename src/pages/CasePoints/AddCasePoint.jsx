import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Input from "../../components/input";
import LabelWithAsterisk from "../../components/labelWithAserisk";
import Select from "../../components/Select";
import Button from "../../components/Button";
import CaseHeader from "../../components/CaseHeader";
const AddCase = () => {
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
        />
        <CaseHeader label="Add Case" caseClass="shadow" />
        <div className="div">
          <div className="div-1 w-[40%]">
            <Select
              label={<LabelWithAsterisk name="Cases" />}
              options={options}
              contClass="flex items-center justify-between  px-6 py-3 "
              labelClass="text-[18px] text-[#050505] font-[400]"
              optionClassName="bg-transparent w-1/5 text-[#AAAAAA] text-[14px] h-5 p-1 border-[#AAAAAA] border-b-[0.5px]"
              selectClass=" justify-end outline-0 bg-transparent w-3/5 text-[#AAAAAA] text-[14px]   p-1 border-[#AAAAAA] border-b-[0.5px]"
            />

            <Select
              label={<LabelWithAsterisk name="Add Lawyer" />}
              options={options}
              contClass="flex items-center justify-between gap-10 px-6 py-3 "
              labelClass="text-[18px] text-[#050505] font-[400]"
              optionClassName="bg-transparent w-1/5 text-[#AAAAAA] text-[14px] h-5 p-1 border-[#AAAAAA] border-b-[0.5px]"
              selectClass=" justify-end outline-0 bg-transparent w-3/5 text-[#AAAAAA] text-[14px]   p-1 border-[#AAAAAA] border-b-[0.5px]"
            />

            <Input
              label={<LabelWithAsterisk name="Add Lawyer" />}
              inputType="text"
              contClass="flex items-center px-6 py-2 justify-between"
              inputClass="bg-red-400 w-3/5 text-[#AAAAAA] text-[14px]  h-5 p-1 border-[#AAAAAA] border-b-[0.5px]"
            />
            
          </div>
          <div className="flex px-6 py-2 ">
            <Input 
            label={<LabelWithAsterisk name="Description" />}
            />
            </div>
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
    </div>
  );
};

export default AddCase;
