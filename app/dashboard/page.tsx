import React from "react";

/**
 * Charts to be plugged in later, e.g.:
 * import PowerConsumptionChart from "@/components/charts/PowerConsumptionChart";
 */

type StatusColor = "green" | "orange" | "red" | "blue";

export default function BuildingOverviewPage() {
  return (
    <div className="space-y-6">

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
        <SummaryCard
          title="Total People in Building"
          value="1,245"
          subtitle="Inside"
          status="green"
        />
        <SummaryCard
          title="Power Source"
          value="GRID"
          subtitle="Active"
          status="green"
        />
        <SummaryCard
          title="Diesel Level"
          value="78%"
          subtitle="High"
          status="blue"
        />
        <SummaryCard
          title="Water Availability"
          value="65%"
          subtitle="Available"
          status="blue"
        />
        <SummaryCard
          title="Active Alarms"
          value="0"
          subtitle="None"
          status="green"
        />
      </div>

      {/* Power + Fire Safety */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Power & Energy Status */}
        <div className="xl:col-span-2 rounded-xl bg-white p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">
            Power & Energy Status
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <InfoItem label="Grid Status" value="System OK" />
            <InfoItem label="Today's Consumption" value="0 min" />
            <InfoItem label="Last Power Outage" value="None" />
          </div>

          {/* Chart Placeholder */}
          <div className="h-40 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
            Power Consumption Chart
          </div>
        </div>

        {/* Fire & Safety Status */}
        <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">
            Fire & Safety Status
          </h3>

          <StatusRow label="Current Status" value="Normal" status="green" />
          <StatusRow label="Active Alarms" value="None" status="green" />

          <div className="mt-4 space-y-3 text-sm">
            <SafetyItem text="Water Pump 3 – Green" status="green" />
            <SafetyItem text="Generated False Events – N/A" status="blue" />
            <SafetyItem text="Investigate Pump to Vessels" status="orange" />
          </div>
        </div>
      </div>

      {/* Diesel, Water, HVAC */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Diesel & Water */}
        <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">
            Diesel & Water Overview
          </h3>

          <DataRow label="Current Source" value="15,300 kWh" />
          <DataRow label="Generator Runtime" value="15,300 kWh" />
          <DataRow label="Monthly Diesel Consumption" value="215,000 L" />
          <DataRow label="Last Refill" value="Dec 10 (5,000 L)" />

          <div className="mt-4 border-t pt-4">
            <DataRow label="Total Diesel Level" value="78% (78,000 L)" />
            <DataRow label="Total Water" value="2 Reserve Tanks (40%)" />
            <DataRow label="Active Pumps" value="8" />
          </div>
        </div>

        {/* HVAC & Comfort */}
        <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">
            HVAC & Comfort Summary
          </h3>

          <DataRow label="Total AC Inside" value="Normal" />
          <DataRow label="Total AC Units" value="85" />
          <DataRow label="Units ON" value="5" />
          <DataRow label="Manual Opens" value="Faulty (3)" />
          <DataRow label="Average Temperature" value="23.5°C" />
          <DataRow label="Fresh Pumps" value="3 / 4" />
        </div>

        {/* Activity Log */}
        <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">
            Recent Activity
          </h3>

          <ul className="space-y-3 text-sm">
            <ActivityItem
              time="10:34"
              text="Water Pump 3 Started (John D.)"
              status="green"
            />
            <ActivityItem
              time="10:12"
              text="Temp Sensor Fault – AC-08"
              status="orange"
            />
            <ActivityItem
              time="09:50"
              text="Power Sensor Triggered – Grid"
              status="orange"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function SummaryCard({
  title,
  value,
  subtitle,
  status,
}: {
  title: string;
  value: string;
  subtitle: string;
  status: StatusColor;
}) {
  const colors: Record<StatusColor, string> = {
    green: "text-green-600",
    blue: "text-blue-600",
    orange: "text-orange-600",
    red: "text-red-600",
  };

  return (
    <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
      <div className="text-sm text-gray-500">{title}</div>
      <div className={`mt-2 text-xl font-semibold ${colors[status]}`}>
        {value}
      </div>
      <div className="text-xs text-gray-400">{subtitle}</div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-sm">
      <div className="text-gray-500">{label}</div>
      <div className="font-medium text-gray-800">{value}</div>
    </div>
  );
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm mb-2">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}

function StatusRow({
  label,
  value,
  status,
}: {
  label: string;
  value: string;
  status: StatusColor;
}) {
  const colors: Record<StatusColor, string> = {
    green: "text-green-600",
    blue: "text-blue-600",
    orange: "text-orange-600",
    red: "text-red-600",
  };

  return (
    <div className="flex justify-between text-sm mb-2">
      <span className="text-gray-500">{label}</span>
      <span className={`font-medium ${colors[status]}`}>{value}</span>
    </div>
  );
}

function SafetyItem({
  text,
  status,
}: {
  text: string;
  status: StatusColor;
}) {
  const colors: Record<StatusColor, string> = {
    green: "text-green-600",
    blue: "text-blue-600",
    orange: "text-orange-600",
    red: "text-red-600",
  };

  return <div className={`text-sm ${colors[status]}`}>{text}</div>;
}

function ActivityItem({
  time,
  text,
  status,
}: {
  time: string;
  text: string;
  status: StatusColor;
}) {
  const colors: Record<StatusColor, string> = {
    green: "text-green-600",
    blue: "text-blue-600",
    orange: "text-orange-600",
    red: "text-red-600",
  };

  return (
    <li className="flex gap-3">
      <span className="text-xs text-gray-400 w-12">{time}</span>
      <span className={`text-sm ${colors[status]}`}>{text}</span>
    </li>
  );
}
