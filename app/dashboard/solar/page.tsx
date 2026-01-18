"use client";

import React from "react";
// import SolarChart from "./SolarChart"; // Reusable chart component

export default function SolarPage() {
  return (
    <div className="space-y-6 p-4">

      {/* TOP STATUS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatusCard label="Solar Output" value="350 kW" color="yellow" />
        <StatusCard label="Battery Level" value="78%" color="green" />
        <StatusCard label="Grid Feed-in" value="120 kW" color="blue" />
        <StatusCard label="Efficiency" value="92%" color="teal" />
      </div>

      {/* REAL-TIME SOLAR PRODUCTION CHART */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm text-gray-600 font-semibold">Real-Time Solar Production</h3>
          <div className="space-x-2">
            <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded">Today</button>
            <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded">Week</button>
            <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded">Month</button>
          </div>
        </div>
        {/* <SolarChart /> */}
      </div>

      {/* ENERGY STATISTICS CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Energy Today" value="2,500 kWh" />
        <StatCard label="Energy This Month" value="60,000 kWh" />
        <StatCard label="Peak Production" value="420 kW" />
        <StatCard label="Estimated Savings" value="$4,500" />
      </div>

      {/* PPM SCHEDULE TABLE */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
        <h3 className="text-sm text-gray-600 font-semibold mb-3">PPM Schedule</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-gray-600 border-b border-gray-200">
              <tr>
                <th className="py-2 text-left">Task</th>
                <th className="py-2 text-left">Equipment</th>
                <th className="py-2 text-left">Scheduled Date</th>
                <th className="py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2">Clean Solar Panels</td>
                <td>Roof Solar Array</td>
                <td>2026-01-25</td>
                <td className="text-green-600">Scheduled</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2">Battery Health Check</td>
                <td>Main Battery Bank</td>
                <td>2026-01-28</td>
                <td className="text-yellow-600">Pending</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2">Inverter Inspection</td>
                <td>Solar Inverter</td>
                <td>2026-02-02</td>
                <td className="text-red-600">Overdue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

/* ===== SMALL COMPONENTS ===== */
function StatusCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: "yellow" | "green" | "blue" | "teal";
}) {
  const colorMap: Record<string, string> = {
    yellow: "bg-yellow-100 text-yellow-600",
    green: "bg-green-100 text-green-600",
    blue: "bg-blue-100 text-blue-600",
    teal: "bg-teal-100 text-teal-600",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col items-center justify-center">
      <div
        className={`w-20 h-20 rounded-full flex items-center justify-center ${colorMap[color]}`}
      >
        <span className="font-semibold">{value}</span>
      </div>
      <p className="text-sm text-gray-600 mt-2">{label}</p>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-3 shadow-sm">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-lg font-semibold text-gray-700 mt-1">{value}</p>
    </div>
  );
}
