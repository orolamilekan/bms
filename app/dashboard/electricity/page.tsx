"use client";

import {
  FaBolt,
  FaWaveSquare,
  FaCheckCircle,
  FaChartLine,
  FaExclamationTriangle,
  FaBuilding,
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

export default function ElectricityPage() {
  const chartData = {
    labels: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"],
    datasets: [
      {
        label: "kW Load",
        data: [420, 560, 710, 820, 760, 680],
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "#f3f4f6" } },
    },
  };

  return (
    <div className="space-y-6 bg-white p-4">

      {/* TOP STATUS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Grid Power */}
        <StatusCard
          title="Grid Powered"
          icon={<FaBolt size={28} />}
          color="green"
          value="Available"
        />

        {/* Voltage & Frequency */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm text-gray-600 mb-2 flex items-center gap-2">
            <FaWaveSquare size={14} /> Voltage & Frequency
          </h3>
          <div className="text-sm text-gray-500 space-y-1">
            <p>L1: 230V &nbsp; L2: 231V &nbsp; L3: 229V</p>
            <p>Frequency: 50.0 Hz</p>
            <p className="flex items-center gap-1">
              Phase Balance:
              <span className="text-green-600 flex items-center gap-1">
                <FaCheckCircle size={12} /> OK
              </span>
            </p>
          </div>
        </div>

        {/* Power Quality */}
        <StatusCard
          title="Power Quality"
          icon={<FaCheckCircle size={26} />}
          color="blue"
          value="Normal"
        />
      </div>

      {/* REAL-TIME LOAD */}
      <Section title="Real-Time Electrical Load" icon={<FaChartLine />}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Active Power" value="750 kW" />
          <StatCard label="Reactive Power" value="250 kVAR" />
          <StatCard label="Energy Today" value="800 kVA" />
          <StatCard label="Power Factor" value="0.93 PF" />
        </div>
      </Section>

      {/* ENERGY OVERVIEW */}
      <Section title="Energy Consumption Overview" icon={<FaBolt />}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Energy Today" value="8,500 kWh" />
          <StatCard label="Energy This Month" value="150,000 kWh" />
          <StatCard label="Peak Demand" value="980 kW" />
          <StatCard label="Est. Monthly Cost" value="$18,000" />
        </div>
      </Section>

      {/* FLOOR & WING CONSUMPTION */}
      <Section title="Electricity Consumption by Floor & Wing" icon={<FaBuilding />}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-500">
            <thead className="border-b border-gray-200 text-gray-600">
              <tr>
                <th className="py-2 text-left">Floor</th>
                <th className="py-2 text-left">Verakki Wing</th>
                <th className="py-2 text-left">Andersen Wing</th>
                <th className="py-2 text-left">Total Load</th>
              </tr>
            </thead>
            <tbody>
              <FloorRow floor="Ground Floor" verakki="120 kW / 1,450 kWh" andersen="95 kW / 1,120 kWh" total="215 kW" />
              <FloorRow floor="1st Floor" verakki="140 kW / 1,780 kWh" andersen="110 kW / 1,390 kWh" total="250 kW" />
              <FloorRow floor="2nd Floor" verakki="130 kW / 1,620 kWh" andersen="100 kW / 1,280 kWh" total="230 kW" />
              <FloorRow floor="3rd Floor" verakki="115 kW / 1,410 kWh" andersen="90 kW / 1,050 kWh" total="205 kW" />
            </tbody>
          </table>
        </div>
      </Section>

      {/* CONSUMPTION GRAPH */}
      <Section title="Electricity Consumption" icon={<FaChartLine />}>
        <div className="h-56">
          <Line data={chartData} options={chartOptions} />
        </div>
      </Section>

      {/* ALERTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoCard
          title="Electrical Alarms & Alerts"
          icon={<FaExclamationTriangle />}
          items={[
            "Voltage imbalance on L1 (1.5%) – Friday",
            "No active alarms",
          ]}
        />
        <InfoCard
          title="Grid Availability & Reliability"
          icon={<FaBolt />}
          items={[
            "Grid uptime (30 days): 93.9%",
            "Total outage duration: 45 minutes",
          ]}
        />
        <InfoCard
          title="Smart Energy Insights"
          icon={<FaChartLine />}
          items={[
            "Low power factor detected last week",
            "Peak demand occurs between 14:00 – 15:00",
          ]}
        />
      </div>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <h3 className="text-sm text-gray-600 mb-4 flex items-center gap-2">
        {icon} {title}
      </h3>
      {children}
    </div>
  );
}

function StatusCard({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: "green" | "blue";
}) {
  const styles =
    color === "green"
      ? "bg-green-100 text-green-600"
      : "bg-blue-100 text-blue-600";

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <h3 className="text-sm text-gray-600 mb-3">{title}</h3>
      <div className="flex flex-col items-center">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${styles}`}>
          {icon}
        </div>
        <p className="text-xs text-gray-500 mt-3">{value}</p>
      </div>
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

function InfoCard({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <h3 className="text-sm text-gray-600 mb-3 flex items-center gap-2">
        {icon} {title}
      </h3>
      <ul className="text-sm text-gray-500 space-y-2">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function FloorRow({
  floor,
  verakki,
  andersen,
  total,
}: {
  floor: string;
  verakki: string;
  andersen: string;
  total: string;
}) {
  return (
    <tr className="border-b border-gray-200 last:border-0">
      <td className="py-2 font-medium text-gray-700">{floor}</td>
      <td className="py-2">{verakki}</td>
      <td className="py-2">{andersen}</td>
      <td className="py-2 font-semibold text-gray-700">{total}</td>
    </tr>
  );
}
