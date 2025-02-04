import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
  { date: "Aug 01", views: 300 },
  { date: "Aug 15", views: 500 },
  { date: "Aug 31", views: 700 },
  { date: "Sep 15", views: 450 },
  { date: "Sep 30", views: 800 },
  { date: "Oct 15", views: 900 },
  { date: "Oct 31", views: 400 },
  { date: "Nov 15", views: 650 },
  { date: "Nov 30", views: 850 },
  { date: "Dec 15", views: 950 },
  { date: "Dec 31", views: 700 }
];

const CustomLineChart = () => {
  return (
    <div className="p-4 bg-[#f9fafb] rounded-xl shadow-lg">
      {/* Title */}
      <div className="flex justify-between">
      <h2 className="text-gray-500  text-sm mb-2">
        Detection <span className="font-bold">Views</span>
      </h2>
      <p className="text-center text-gray-400 text-sm mt-2">
        Data Range <span className="font-bold">Aug 01 - Dec 31</span>
      </p>
      
      <p className="text-center text-gray-400 text-sm mt-2 opacity-0">
        Data Range <span className="font-bold">Aug 01 - Dec 31</span>
      </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          {/* Gradient Fill */}
          <defs>
            <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Grid */}
          <CartesianGrid strokeDasharray="0" stroke="#ddd" />

          {/* Axes */}
          <XAxis dataKey="date" stroke="#aaa" />
          <YAxis stroke="#aaa" />

          {/* Tooltip */}
          <Tooltip />

          {/* Filled Area */}
          <Area type="linear" dataKey="views" stroke="#3b82f6" fill="url(#colorFill)" fillOpacity={1} />

          {/* Line (Ensuring Dots are Always Visible) */}
          <Line 
            type="linear" 
            dataKey="views" 
            stroke="#3b82f6" 
            strokeWidth={3} 
            dot={{ fill: "#fff", r: 8, stroke: "#3b82f6", strokeWidth: 3 }} 
            activeDot={{ fill: "#3b82f6", r: 10, stroke: "#2563eb", strokeWidth: 4 }} 
          />
          
        </AreaChart>
      </ResponsiveContainer>

      
      
    </div>
  );
};

export default CustomLineChart;
