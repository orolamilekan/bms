"use client";

const GeneratorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-6xl space-y-6">

        {/* TOP STATUS */}
        <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2v10m0 0a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Generator Running
              </h1>
              <p className="text-sm text-gray-500">
                Supplying backup power
              </p>
            </div>
          </div>

          <button className="px-5 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-50">
            Turn Off
          </button>
        </div>

        {/* SETTINGS */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Settings</h2>

          <div className="flex items-center gap-4">
            <div className="w-12 h-7 bg-blue-500 rounded-full relative">
              <span className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full" />
            </div>
            <span className="text-sm font-medium">
              Remote Auto Start Enabled
            </span>
          </div>
        </div>

        {/* GENERATOR OVERVIEW */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">
            Generator Overview
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatusItem label="Power Output" value="600 kW" />
            <StatusItem label="Current Fuel Level" value="75 %" />
            <StatusItem label="Engine Temperature" value="85 °C" />
            <StatusItem label="Oil Pressure" value="Normal" />
          </div>
        </div>

        {/* OPERATION & SERVICE DATA */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">
            Operation & Service Data
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatusItem label="Total Run Hours" value="5,245 hrs" />
            <StatusItem label="Times Started" value="1,032" />
            <StatusItem label="Last Turned On" value="2026-01-18 08:15" />
            <StatusItem label="Last Turned Off" value="2026-01-18 12:45" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <StatusItem label="Last Service Date" value="01/12/2025" />
            <StatusItem label="Next Service Due" value="01/06/2026" />
            <StatusItem label="Last Fuel Supply" value="15/01/2026" />
            <StatusItem label="Fuel Supplied" value="5,000 Litres" />
          </div>
        </div>

        {/* DAILY USAGE HISTORY */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            Daily Generator Usage History
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-600">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 py-2 text-left">Date</th>
                  <th className="px-3 py-2 text-left">Run Hours</th>
                  <th className="px-3 py-2 text-left">Fuel Used</th>
                  <th className="px-3 py-2 text-left">Energy Generated</th>
                  <th className="px-3 py-2 text-left">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <UsageRow
                  date="2026-01-18"
                  hours="4.5 hrs"
                  fuel="450 L"
                  energy="2,700 kWh"
                  status="Normal"
                />
                <UsageRow
                  date="2026-01-17"
                  hours="6.0 hrs"
                  fuel="600 L"
                  energy="3,600 kWh"
                  status="Normal"
                />
                <UsageRow
                  date="2026-01-16"
                  hours="2.8 hrs"
                  fuel="280 L"
                  energy="1,680 kWh"
                  status="Light Load"
                />
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
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div>
    <p className="text-sm text-gray-500 mb-1">{label}</p>
    <p className="text-xl font-semibold text-gray-900">
      {value}
    </p>
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
    <td className="px-3 py-2 font-medium text-green-600">
      {status}
    </td>
  </tr>
);

export default GeneratorPage;
