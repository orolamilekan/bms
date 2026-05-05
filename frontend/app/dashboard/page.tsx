"use client";

import React from "react";
import {
  FaPeopleLine,
  FaBolt,
  FaGasPump,
  FaWater,
  FaBell,
  FaFireExtinguisher,
  FaSnowflake,
  FaClock,
} from "react-icons/fa6";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

/* ---------- ChartJS Registration ---------- */
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

/* ---------- Helpers ---------- */
const statusColor = {
  green: "text-green-600",
  blue: "text-blue-600",
  orange: "text-orange-600",
  red: "text-red-600",
};

/* ---------- Page ---------- */
export default function BuildingOverviewPage() {
  /* Dummy data for Power Consumption Chart */
  const powerChartData = {
    labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
    datasets: [
      {
        label: "Power Consumption (kWh)",
        data: [120, 150, 130, 160, 145, 155, 150],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const powerChartOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true },
      x: { grid: { display: false } },
    },
  };

  return (
    <div className="space-y-4">

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3">
        <Summary title="Total People" value="1,245" sub="Inside" color="green" icon={<FaPeopleLine />} />
        <Summary title="Power Source" value="GRID" sub="Active" color="green" icon={<FaBolt />} />
        <Summary title="Diesel Level" value="78%" sub="High" color="blue" icon={<FaGasPump />} />
        <Summary title="Water Level" value="65%" sub="Available" color="blue" icon={<FaWater />} />
        <Summary title="Active Alarms" value="0" sub="None" color="green" icon={<FaBell />} />
      </div>

      {/* Power + Fire */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

        <Section title="Power & Energy Status" icon={<FaBolt />} span={2}>
          <div className="grid grid-cols-3 gap-3 mb-3">
            <Info label="Grid Status" value="System OK" />
            <Info label="Consumption" value="0 min" />
            <Info label="Last Outage" value="None" />
          </div>

          {/* Chart */}
          <div className="h-32">
            <Line data={powerChartData} options={powerChartOptions} />
          </div>
        </Section>

        <Section title="Fire & Safety Status" icon={<FaFireExtinguisher />}>
          <Row label="Current Status" value="Normal" color="green" />
          <Row label="Active Alarms" value="None" color="green" />

          <div className="mt-2 space-y-1 text-xs">
            <Text color="green">Water Pump 3 – OK</Text>
            <Text color="blue">False Events – N/A</Text>
            <Text color="orange">Investigate Pump Line</Text>
          </div>
        </Section>
      </div>

      {/* Diesel / HVAC / Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

        <Section title="Diesel & Water" icon={<FaGasPump />}>
          <Data label="Current Source" value="15,300 kWh" />
          <Data label="Monthly Diesel" value="215,000 L" />
          <Data label="Last Refill" value="Dec 10" />

          <div className="mt-2 border-t pt-2">
            <Data label="Diesel Level" value="78%" />
            <Data label="Water Tanks" value="40%" />
            <Data label="Active Pumps" value="8" />
          </div>
        </Section>

        <Section title="HVAC & Comfort" icon={<FaSnowflake />}>
          <Data label="AC Status" value="Normal" />
          <Data label="Units Total" value="85" />
          <Data label="Units ON" value="5" />
          <Data label="Avg Temp" value="23.5°C" />
        </Section>

        <Section title="Recent Activity" icon={<FaClock />}>
          <Activity time="10:34" text="Water Pump 3 Started" color="green" />
          <Activity time="10:12" text="Temp Sensor Fault – AC-08" color="orange" />
          <Activity time="09:50" text="Power Sensor Triggered" color="orange" />
        </Section>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */
function Section({ title, icon, children, span = 1 }: any) {
  return (
    <div className={`rounded-xl bg-white p-4 shadow-sm border xl:col-span-${span}`}>
      <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-800">
        {icon}
        {title}
      </div>
      {children}
    </div>
  );
}

function Summary({ title, value, sub, color, icon }: { title: string; value: string; sub: string; color: keyof typeof statusColor; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm border flex justify-between items-start">
      <div>
        <div className="text-xs text-gray-500">{title}</div>
        <div className={`text-lg font-semibold ${statusColor[color]}`}>{value}</div>
        <div className="text-[11px] text-gray-400">{sub}</div>
      </div>
      <div className={`text-xl ${statusColor[color]}`}>{icon}</div>
    </div>
  );
}

function Info({ label, value }: any) {
  return (
    <div className="text-xs">
      <div className="text-gray-500">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

function Data({ label, value }: any) {
  return (
    <div className="flex justify-between text-xs mb-1">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function Row({ label, value, color }: { label: string; value: string; color: keyof typeof statusColor }) {
  return (
    <div className="flex justify-between text-xs mb-1">
      <span className="text-gray-500">{label}</span>
      <span className={statusColor[color]}>{value}</span>
    </div>
  );
}

function Text({ children, color }: { children: React.ReactNode; color: keyof typeof statusColor }) {
  return <div className={`text-xs ${statusColor[color]}`}>{children}</div>;
}

function Activity({ time, text, color }: { time: string; text: string; color: keyof typeof statusColor }) {
  return (
    <div className="flex gap-2 text-xs mb-1">
      <span className="text-gray-400 w-10">{time}</span>
      <span className={statusColor[color]}>{text}</span>
    </div>
  );
}
