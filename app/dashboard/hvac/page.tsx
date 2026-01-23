"use client";

import React from "react";
import {
  FaSnowflake,
  FaFan,
  FaExclamationTriangle,
  FaBolt,
  FaLayerGroup,
} from "react-icons/fa";

export default function HVACControlPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-4 space-y-4">

      <h1 className="text-lg font-semibold">HVAC / AC Control</h1>

      {/* TOP SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <SummaryCard title="Total AC Units" value="48" icon={<FaFan />} />
        <SummaryCard title="AC Units OFF" value="15" icon={<FaSnowflake />} />
        <SummaryCard
          title="Faulty AC Units"
          value="1"
          alert
          icon={<FaExclamationTriangle />}
        />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

        {/* FLOORS */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <FloorCard
            floor="Ground Floor"
            fault="Condensate Pump Error"
            units={[
              { ac: "AC 01", temp: "25°C", on: true },
              { ac: "AC 02", temp: "25°C", on: true, fault: true },
              { ac: "AC 03", temp: "26°C", on: false },
            ]}
          />

          <FloorCard
            floor="Floor 1"
            units={[
              { ac: "AC 01", temp: "25°C", on: true },
              { ac: "AC 02", temp: "24°C", on: true },
              { ac: "AC 03", temp: "26°C", on: false },
            ]}
          />

          <FloorCard
            floor="Floor 2"
            units={[
              { ac: "AC 02", temp: "25°C", on: true },
              { ac: "AC 05", temp: "25°C", on: true },
              { ac: "AC 07", temp: "26°C", on: false },
            ]}
          />

          <FloorCard
            floor="Floor 3"
            units={[
              { ac: "AC 03", temp: "25°C", on: true },
              { ac: "AC 06", temp: "24°C", on: true },
              { ac: "AC 08", temp: "26°C", on: false },
            ]}
          />
        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-4">
          <AlertsPanel />
          <SystemMode />
        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function SummaryCard({
  title,
  value,
  alert,
  icon,
}: {
  title: string;
  value: string;
  alert?: boolean;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-lg border p-3 flex items-center justify-between shadow-sm">
      <div>
        <p className="text-xs text-slate-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
      <div
        className={`h-9 w-9 rounded-full flex items-center justify-center text-sm ${
          alert ? "bg-red-100 text-red-600" : "bg-slate-100 text-slate-600"
        }`}
      >
        {icon}
      </div>
    </div>
  );
}

function FloorCard({
  floor,
  units,
  fault,
}: {
  floor: string;
  fault?: string;
  units: {
    ac: string;
    temp: string;
    on: boolean;
    fault?: boolean;
  }[];
}) {
  return (
    <div className="bg-white rounded-lg border p-3 shadow-sm space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold flex items-center gap-2">
          <FaLayerGroup className="text-slate-400" />
          {floor}
        </h3>
        <FaFan className="text-slate-400 text-sm" />
      </div>

      {fault && (
        <div className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
          {fault}
        </div>
      )}

      <div className="space-y-1">
        {units.map((u) => (
          <div key={u.ac} className="flex justify-between items-center text-xs">
            <div>
              <p className="font-medium">{u.ac}</p>
              <p className="text-slate-500">
                {u.temp}
                {u.fault && (
                  <span className="text-red-600 ml-1">⚠</span>
                )}
              </p>
            </div>
            <Toggle on={u.on} />
          </div>
        ))}
      </div>

      <div className="flex gap-2 pt-1">
        <button className="flex-1 bg-slate-200 text-xs rounded py-1">
          ON All
        </button>
        <button className="flex-1 bg-slate-200 text-xs rounded py-1">
          Auto
        </button>
      </div>
    </div>
  );
}

function Toggle({ on }: { on: boolean }) {
  return (
    <div
      className={`w-8 h-4 rounded-full p-0.5 ${
        on ? "bg-green-500" : "bg-slate-300"
      }`}
    >
      <div
        className={`h-3 w-3 bg-white rounded-full transition ${
          on ? "translate-x-4" : ""
        }`}
      />
    </div>
  );
}

function AlertsPanel() {
  const alerts = [
    { time: "10:08", text: "AC 02 – Condensate Pump Fault", type: "error" },
    { time: "09:58", text: "AC 05 – Over Temperature", type: "warning" },
    { time: "09:45", text: "Manual Override – Floor 2", type: "info" },
  ];

  const colors: Record<string, string> = {
    error: "bg-red-500",
    warning: "bg-orange-500",
    info: "bg-blue-500",
  };

  return (
    <div className="bg-white rounded-lg border p-3 shadow-sm">
      <h3 className="text-sm font-semibold mb-2">Alerts & Logs</h3>
      <ul className="space-y-2 text-xs">
        {alerts.map((a, i) => (
          <li key={i} className="flex gap-2">
            <span className={`w-2 h-2 mt-1 rounded-full ${colors[a.type]}`} />
            <div>
              <p className="text-slate-400">{a.time}</p>
              <p>{a.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SystemMode() {
  return (
    <div className="bg-white rounded-lg border p-3 shadow-sm space-y-2">
      <div className="flex items-center gap-2">
        <FaBolt className="text-green-600" />
        <p className="text-sm font-medium">
          Power Supply: <span className="text-green-600">Normal</span>
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs">Auto Mode</span>
        <Toggle on />
      </div>
    </div>
  );
}
