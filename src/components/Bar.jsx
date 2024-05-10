import React, { PureComponent } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
// import Calendar from "./Calendar";

import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Calendar from "./Calendar";

// Define sample data
const data = [
  { name: "Jan", uv: 500 },
  { name: "Feb", uv: 1200 },
  { name: "Mar", uv: 1000 },
  { name: "Apr", uv: 500 },
  { name: "May", uv: 800 },
  { name: "Jun", uv: 2500 },
  { name: "Jul", uv: 700 },
  { name: "Aug", uv: 2500 },
  { name: "Sep", uv: 2400 },
  { name: "Oct", uv: 2500 },
  { name: "Nov", uv: 2400 },
  { name: "Dec", uv: 2700 },
];

export default class Example extends PureComponent {
  render() {
    return (
      <div className="div-container gap-1 items-center max-h-50 justify-center flex">
        {/* First chart */}
        <div
          className="shadow-lg ml-6"
          style={{ marginTop: "20px", flex: 1 }}
        >
          <div className="div  flex items-center gap-[40px] p-1">
            <h2 className="text-[20px] font-[500]">Cases</h2>
            <div className="div flex items-center justify-between">
              <div className="div flex gap-3">
                {/* Added flex-1 class */}
                <h3 className="font-[500]">This year</h3>
                <h3>This Monthly</h3>
                <h3>This week</h3>
              </div>
              <div className="div ml-[80px]">
                <MoreVertIcon />
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={270}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              <Bar dataKey="uv" fill="#00CCF2" barSize={24}>
                {data.map((entry, index) => (
                  <text
                    key={index}
                    x={index}
                    y={entry.uv}
                    fill="#fff"
                    textAnchor="middle"
                    dy={-6}
                  >
                    {entry.uv}
                  </text>
                ))}
              </Bar>
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Second chart */}
        <div className="" style={{ marginTop: "20px", flex: 1 }}>
          <Calendar />
        </div>
      </div>
    );
  }
}
