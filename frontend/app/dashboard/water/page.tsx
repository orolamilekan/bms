"use client";

import React from "react";
import {
  FaWater,
  FaPumpSoap,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaPlay,
  FaStop,
  FaArrowRight,
} from "react-icons/fa";

/* ================= TYPES ================= */

type Status = "normal" | "warning" | "critical";

/* ================= STYLES ================= */

const statusStyles: Record<Status, string> = {
  normal: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-700",
  critical: "bg-red-100 text-red-700",
};

/* ================= COMPONENTS ================= */

function SummaryCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white border rounded-lg p-3 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-xs text-gray-500">{title}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
      <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-sm">
        {icon}
      </div>
    </div>
  );
}

function TankCard({
  title,
  levelPercent,
  volume,
  status,
  pumpName,
  pumpStatus,
  pumpError,
}: {
  title: string;
  levelPercent: number;
  volume: string;
  status: Status;
  pumpName: string;
  pumpStatus: string;
  pumpError?: string;
}) {
  return (
    <div className="bg-white border rounded-lg p-3 shadow-sm space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold flex items-center gap-2">
          <FaWater className="text-slate-400" />
          {title}
        </h3>
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${statusStyles[status]}`}
        >
          {status.toUpperCase()}
        </span>
      </div>

      {/* Tank Level */}
      <div className="h-32 w-20 mx-auto relative border rounded-full bg-gray-50 overflow-hidden">
        <div
          className={`absolute bottom-0 w-full ${
            status === "critical"
              ? "bg-red-500"
              : status === "warning"
              ? "bg-yellow-500"
              : "bg-blue-500"
          }`}
          style={{ height: `${levelPercent}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-700">
          {levelPercent}%
        </div>
      </div>

      <p className="text-xs text-center text-gray-700">
        <span className="font-semibold">{volume}</span> Litres
      </p>

      <div className="border-t pt-2 text-xs space-y-1">
        <div className="flex justify-between text-gray-600">
          <span className="flex items-center gap-1">
            <FaPumpSoap />
            {pumpName}
          </span>
          <span className="font-medium">{pumpStatus}</span>
        </div>
        {pumpError && (
          <div className="text-red-600 text-xs">
            Error: {pumpError}
          </div>
        )}
      </div>
    </div>
  );
}

function AlertItem({
  time,
  message,
  type,
}: {
  time: string;
  message: string;
  type: "critical" | "warning" | "success" | "info";
}) {
  const colors = {
    critical: "bg-red-500",
    warning: "bg-yellow-500",
    success: "bg-green-500",
    info: "bg-blue-500",
  };

  return (
    <li className="flex gap-3 text-xs">
      <span className="text-gray-400 w-14">{time}</span>
      <span className={`w-2 h-2 mt-1 rounded-full ${colors[type]}`} />
      <span>{message}</span>
    </li>
  );
}

/* ================= PAGE ================= */

export default function WaterManagementPage() {
  return (
    <div className="bg-slate-100 min-h-screen p-4 space-y-4">

      <h1 className="text-lg font-semibold">Water Management</h1>

      {/* SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
        <SummaryCard
          title="Total Water Available"
          value="55,000 Litres"
          icon={<FaWater />}
        />
        <SummaryCard
          title="Active Pumps"
          value="3 / 4 Running"
          icon={<FaPumpSoap />}
        />
        <SummaryCard
          title="Low Level Alerts"
          value="2 Critical"
          icon={<FaExclamationTriangle />}
        />
        <SummaryCard
          title="Last Water Supply"
          value="Dec 12 · 4:30 PM"
          icon={<FaCalendarAlt />}
        />
      </div>

      {/* TANKS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TankCard
          title="Raw Water Tank"
          levelPercent={85}
          volume="21,250"
          status="normal"
          pumpName="Supply Pump"
          pumpStatus="Running"
          pumpError="Dry Run"
        />

        <TankCard
          title="Filtration Tank"
          levelPercent={80}
          volume="6,000"
          status="normal"
          pumpName="Transfer Pump"
          pumpStatus="Stopped"
        />

        <TankCard
          title="Overhead Tank"
          levelPercent={10}
          volume="1,250"
          status="critical"
          pumpName="Distribution Pump"
          pumpStatus="Fault"
          pumpError="Overcurrent"
        />
      </div>

      {/* FLOW */}
      <div className="bg-white border rounded-lg p-3 shadow-sm">
        <h3 className="text-sm font-semibold mb-2">Water Flow Overview</h3>

        <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
          <span>Raw</span>
          <FaArrowRight />
          <span>Filtration</span>
          <FaArrowRight />
          <span>Reserve</span>
          <FaArrowRight />
          <span className="text-red-600 font-semibold">Overhead</span>
        </div>

        <p className="mt-2 text-xs text-red-600 font-medium">
          ● Water Flow Stopped
        </p>
      </div>

      {/* ALERTS + CONTROL */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

        <div className="xl:col-span-2 bg-white border rounded-lg p-3 shadow-sm">
          <h3 className="text-sm font-semibold mb-3">
            Alerts & Activity Log
          </h3>
          <ul className="space-y-2">
            <AlertItem time="10:05" message="Low Water – Overhead Tank 10%" type="critical" />
            <AlertItem time="09:45" message="Pump Fault – Dry Run" type="critical" />
            <AlertItem time="09:30" message="Pump Started – Raw Supply" type="success" />
            <AlertItem time="08:15" message="Water Received – 10,000L" type="info" />
          </ul>
        </div>

        <div className="bg-white border rounded-lg p-3 shadow-sm space-y-3">
          <h3 className="text-sm font-semibold">Pump Control</h3>

          <div className="flex justify-between text-xs">
            <span>Auto Pump Control</span>
            <span className="text-green-600 font-semibold">ON</span>
          </div>

          <button disabled className="w-full bg-gray-100 text-xs py-1 rounded flex items-center justify-center gap-2 text-gray-400">
            <FaPlay /> Manual Start
          </button>

          <button disabled className="w-full bg-gray-100 text-xs py-1 rounded flex items-center justify-center gap-2 text-gray-400">
            <FaStop /> Manual Stop
          </button>

          <p className="text-xs text-gray-400">
            Disabled in Auto Mode
          </p>
        </div>
      </div>
    </div>
  );
}
