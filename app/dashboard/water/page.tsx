import React from "react";

/**
 * Chart components should be imported later, for example:
 *
 * import TankLevelChart from "@/components/charts/TankLevelChart";
 * import WaterFlowChart from "@/components/charts/WaterFlowChart";
 */

type Status = "normal" | "warning" | "critical";

interface TankCardProps {
  title: string;
  levelPercent: number;
  volume: string;
  status: Status;
  pumpName: string;
  pumpStatus: string;
  pumpError?: string;
}

const statusStyles: Record<Status, string> = {
  normal: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-700",
  critical: "bg-red-100 text-red-700",
};

const TankCard: React.FC<TankCardProps> = ({
  title,
  levelPercent,
  volume,
  status,
  pumpName,
  pumpStatus,
  pumpError,
}) => {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}
        >
          {status.toUpperCase()}
        </span>
      </div>

      {/* Tank Level Placeholder */}
      <div className="mb-4">
        {/* Replace with chart component */}
        <div className="h-36 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
          Tank Level Chart ({levelPercent}%)
        </div>
      </div>

      <div className="text-sm text-gray-700 mb-3">
        <span className="font-semibold">{volume}</span> Litres
      </div>

      <div className="border-t pt-3 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>{pumpName}</span>
          <span className="font-medium">{pumpStatus}</span>
        </div>
        {pumpError && (
          <div className="mt-2 text-xs text-red-600">
            Error: {pumpError}
          </div>
        )}
      </div>
    </div>
  );
};

export default function WaterManagementPage() {
  return (
    <div className="space-y-6">

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <SummaryCard title="Total Water Available" value="55,000 Litres" />
        <SummaryCard title="Active Pumps" value="3 / 4 Running" />
        <SummaryCard title="Low Level Alerts" value="2 Tanks Critical" />
        <SummaryCard title="Last Water Supply" value="Dec 12, 2025 · 4:30 PM" />
      </div>

      {/* Tank Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
          title="Building Overhead Tank"
          levelPercent={10}
          volume="1,250"
          status="critical"
          pumpName="Distribution Pump"
          pumpStatus="Fault"
          pumpError="Overcurrent"
        />
      </div>

      {/* Water Flow Diagram Placeholder */}
      <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-4">
          Water Flow Overview
        </h3>

        {/* Replace with flow / pipeline visualization */}
        <div className="h-40 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
          Water Flow Diagram Component
        </div>

        <div className="mt-4 text-sm text-red-600 font-medium">
          ● Water Flow Stopped
        </div>
      </div>

      {/* Alerts & Pump Control */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Alerts */}
        <div className="xl:col-span-2 rounded-xl bg-white p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">
            Alerts & Activity Log
          </h3>

          <ul className="space-y-3 text-sm">
            <AlertItem time="10:05 AM" message="Low Water Alert – Overhead Tank at 10%" type="critical" />
            <AlertItem time="09:45 AM" message="Pump Fault – Booster Pump Dry Run" type="critical" />
            <AlertItem time="09:30 AM" message="Pump Started – Raw Water Supply" type="success" />
            <AlertItem time="08:15 AM" message="Water Supply Received – 10,000 Litres" type="info" />
            <AlertItem time="07:50 AM" message="Pump Stopped – Filtration Transfer" type="warning" />
          </ul>
        </div>

        {/* Pump Control */}
        <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">
            Pump Control
          </h3>

          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">Auto Pump Control</span>
            <span className="text-green-600 font-semibold">ON</span>
          </div>

          <div className="space-y-3">
            <button
              disabled
              className="w-full rounded-lg bg-gray-100 py-2 text-sm text-gray-400 cursor-not-allowed"
            >
              Manual Start
            </button>
            <button
              disabled
              className="w-full rounded-lg bg-gray-100 py-2 text-sm text-gray-400 cursor-not-allowed"
            >
              Manual Stop
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Manual controls disabled in Auto Mode
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Supporting Components ---------- */

function SummaryCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-xl font-semibold text-gray-800">{value}</div>
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
    critical: "text-red-600",
    warning: "text-yellow-600",
    success: "text-green-600",
    info: "text-blue-600",
  };

  return (
    <li className="flex gap-3 items-start">
      <span className="text-xs text-gray-400 w-16">{time}</span>
      <span className={`text-sm ${colors[type]}`}>{message}</span>
    </li>
  );
}
