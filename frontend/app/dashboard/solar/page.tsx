"use client";

import React from "react";
import {
  FaSolarPanel,
  FaBatteryThreeQuarters,
  FaPlug,
  FaPercent,
  FaChartLine,
  FaCalendarAlt,
  FaTools,
  FaCogs,
  FaClock,
  FaBolt,
  FaMoneyBillWave,
  FaArrowUp,
} from "react-icons/fa";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler
);

export default function SolarPage() {
  const chartData = {
    labels: ["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00"],
    datasets: [
      {
        label: "Solar Output (kW)",
        data: [20, 120, 260, 350, 410, 300, 120],
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "#f3f4f6" } },
    },
  };

  return (
    <div className="space-y-4 p-3">

      {/* STATUS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <StatusCard
          label="Solar Output"
          value="350 kW"
          color="yellow"
          icon={<FaSolarPanel size={18} />}
        />
        <StatusCard
          label="Battery Level"
          value="78%"
          color="green"
          icon={<FaBatteryThreeQuarters size={18} />}
        />
        <StatusCard
          label="Grid Feed-in"
          value="120 kW"
          color="blue"
          icon={<FaPlug size={16} />}
        />
        <StatusCard
          label="Efficiency"
          value="92%"
          color="teal"
          icon={<FaPercent size={16} />}
        />
      </div>

      {/* CHART */}
      <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm text-gray-600 font-semibold flex items-center gap-1.5">
            <FaChartLine size={14} /> Real-Time Solar Production
          </h3>
          <div className="space-x-1">
            <button className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded flex items-center gap-1">
              <FaClock size={10} /> Today
            </button>
            <button className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded flex items-center gap-1">
              <FaCalendarAlt size={10} /> Week
            </button>
            <button className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded flex items-center gap-1">
              <FaCalendarAlt size={10} /> Month
            </button>
          </div>
        </div>

        <div className="h-48">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* ENERGY STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard icon={<FaBolt />} label="Energy Today" value="2,500 kWh" />
        <StatCard icon={<FaChartLine />} label="This Month" value="60,000 kWh" />
        <StatCard icon={<FaArrowUp />} label="Peak Production" value="420 kW" />
        <StatCard icon={<FaMoneyBillWave />} label="Savings" value="$4,500" />
      </div>

      {/* PPM TABLE */}
      <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
        <h3 className="text-sm text-gray-600 font-semibold mb-2 flex items-center gap-1.5">
          <FaTools size={14} /> Preventive Maintenance Schedule
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-gray-600 border-b border-gray-200">
              <tr>
                <th className="py-1.5 text-left flex items-center gap-1">
                  <FaCogs size={12} /> Task
                </th>
                <th className="py-1.5 text-left">Equipment</th>
                <th className="py-1.5 text-left flex items-center gap-1">
                  <FaCalendarAlt size={12} /> Date
                </th>
                <th className="py-1.5 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <Row
                task="Clean Solar Panels"
                equipment="Roof Solar Array"
                date="2026-01-25"
                status="Scheduled"
                statusColor="text-green-600"
              />
              <Row
                task="Battery Health Check"
                equipment="Main Battery Bank"
                date="2026-01-28"
                status="Pending"
                statusColor="text-yellow-600"
              />
              <Row
                task="Inverter Inspection"
                equipment="Solar Inverter"
                date="2026-02-02"
                status="Overdue"
                statusColor="text-red-600"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ===== SMALL COMPONENTS ===== */

function StatusCard({ label, value, color, icon }: any) {
  const map: any = {
    yellow: "bg-yellow-100 text-yellow-600",
    green: "bg-green-100 text-green-600",
    blue: "bg-blue-100 text-blue-600",
    teal: "bg-teal-100 text-teal-600",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm flex flex-col items-center">
      <div className={`w-16 h-16 rounded-full flex flex-col items-center justify-center ${map[color]}`}>
        {icon}
        <span className="text-[11px] font-semibold mt-0.5">{value}</span>
      </div>
      <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
        {icon} {label}
      </p>
    </div>
  );
}

function StatCard({ icon, label, value }: any) {
  return (
    <div className="bg-gray-50 rounded-lg p-2.5 shadow-sm">
      <p className="text-xs text-gray-500 flex items-center gap-1">
        {icon} {label}
      </p>
      <p className="text-base font-semibold text-gray-700 mt-0.5">{value}</p>
    </div>
  );
}

function Row({ task, equipment, date, status, statusColor }: any) {
  return (
    <tr className="border-b border-gray-200 last:border-0">
      <td className="py-1.5 flex items-center gap-1">
        <FaTools size={12} /> {task}
      </td>
      <td className="py-1.5">{equipment}</td>
      <td className="py-1.5 flex items-center gap-1">
        <FaCalendarAlt size={12} /> {date}
      </td>
      <td className={`py-1.5 font-medium ${statusColor}`}>{status}</td>
    </tr>
  );
}
