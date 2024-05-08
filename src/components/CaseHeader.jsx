import React from 'react'

const CaseHeader = ({label, caseClass}) => {
  return (
    <div className={`addCase p-2 px-6 bg-[#fff] ${caseClass}`}>
    <h2 className="text-[22px] text-black font-[600]">{label}</h2>
  </div>
  )
}

export default CaseHeader
