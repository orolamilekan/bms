"use client";

import {
  FaPowerOff,
  FaCogs,
  FaBolt,
  FaGasPump,
  FaTemperatureHigh,
  FaOilCan,
  FaClock,
  FaPlay,
  FaStop,
  FaTools,
  FaCalendarAlt,
  FaHistory,
} from "react-icons/fa";

const GeneratorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center">
      <div className="w-full max-w-6xl space-y-4">

        {/* TOP STATUS */}
        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <FaBolt className="text-white text-xl" />
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Generator Running
              </h1>
              <p className="text-xs text-gray-500">
                Supplying backup power
              </p>
            </div>
          </div>

          <button className="px-4 py-1.5 rounded-full border text-xs hover:bg-gray-50 flex items-center gap-2">
            <FaPowerOff />
            Turn Off
          </button>
        </div>

        {/* SETTINGS */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <FaCogs className="text-gray-600" />
            Settings
          </h2>

          <div className="flex items-center gap-3">
            <div className="w-10 h-6 bg-blue-500 rounded-full relative">
              <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
            <span className="text-xs font-medium">
              Remote Auto Start Enabled
            </span>
          </div>
        </div>

        {/* GENERATOR OVERVIEW */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <FaHistory className="text-gray-600" />
            Generator Overview
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatusItem icon={<FaBolt />} label="Power Output" value="600 kW" />
            <StatusItem icon={<FaGasPump />} label="Fuel Level" value="75 %" />
            <StatusItem icon={<FaTemperatureHigh />} label="Engine Temp" value="85 °C" />
            <StatusItem icon={<FaOilCan />} label="Oil Pressure" value="Normal" />
          </div>
        </div>

        {/* OPERATION & SERVICE DATA */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <FaTools className="text-gray-600" />
            Operation & Service Data
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatusItem icon={<FaClock />} label="Run Hours" value="5,245 hrs" />
            <StatusItem icon={<FaPlay />} label="Times Started" value="1,032" />
            <StatusItem icon={<FaPlay />} label="Last On" value="2026-01-18 08:15" />
            <StatusItem icon={<FaStop />} label="Last Off" value="2026-01-18 12:45" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <StatusItem icon={<FaCalendarAlt />} label="Last Service" value="01/12/2025" />
            <StatusItem icon={<FaCalendarAlt />} label="Next Service" value="01/06/2026" />
            <StatusItem icon={<FaGasPump />} label="Fuel Supply" value="15/01/2026" />
            <StatusItem icon={<FaGasPump />} label="Fuel Supplied" value="5,000 L" />
          </div>
        </div>

        {/* DAILY USAGE HISTORY */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <FaHistory className="text-gray-600" />
            Daily Usage History
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-gray-600">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 py-2 text-left">Date</th>
                  <th className="px-3 py-2 text-left">Run Hours</th>
                  <th className="px-3 py-2 text-left">Fuel Used</th>
                  <th className="px-3 py-2 text-left">Energy</th>
                  <th className="px-3 py-2 text-left">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <UsageRow date="2026-01-18" hours="4.5 hrs" fuel="450 L" energy="2,700 kWh" status="Normal" />
                <UsageRow date="2026-01-17" hours="6.0 hrs" fuel="600 L" energy="3,600 kWh" status="Normal" />
                <UsageRow date="2026-01-16" hours="2.8 hrs" fuel="280 L" energy="1,680 kWh" status="Light Load" />
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

/* ===== SMALL COMPONENTS ===== */

const StatusItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3">
    <div className="text-gray-500 text-sm">{icon}</div>
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const UsageRow = ({
  date,
  hours,
  fuel,
  energy,
  status,
}: {
  date: string;
  hours: string;
  fuel: string;
  energy: string;
  status: string;
}) => (
  <tr className="hover:bg-gray-50">
    <td className="px-3 py-2">{date}</td>
    <td className="px-3 py-2">{hours}</td>
    <td className="px-3 py-2">{fuel}</td>
    <td className="px-3 py-2">{energy}</td>
    <td className="px-3 py-2 font-medium text-green-600">{status}</td>
  </tr>
);

export default GeneratorPage;
