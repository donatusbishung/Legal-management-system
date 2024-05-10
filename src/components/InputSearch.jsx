import React from 'react'

const InputSearch = () => {
  return (
    <div>
       <Input
          label={<SearchIcon  style={{ fontSize: 25, }}  />} // Adjust the fontSize as needed
          labelClass="text-[#AAAAAA]" // Add other classes as needed
          inputType="text"
          placeholder="Search Table"
          inputClass="border-0 font-[200] outline-0 border-[#AAAAAA] h-0 w-[180px] px-2 py-3"
          contClass="flex items-center gap- px-2  border"
        />
    </div>
  )
}

export default InputSearch
