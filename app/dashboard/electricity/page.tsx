export default function ElectricityPage() {
  return (
    <div className="space-y-6 bg-white p-4">

      {/* TOP STATUS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Grid Power */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm text-gray-600 mb-3">Grid Powered</h3>
          <div className="flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 font-semibold text-sm">Available</span>
            </div>
            <p className="text-xs text-gray-500 mt-3">Grid Power</p>
          </div>
        </div>

        {/* Voltage & Frequency */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm text-gray-600 mb-2">Voltage & Frequency</h3>
          <div className="text-sm text-gray-500 space-y-1">
            <p>L1: 230V &nbsp; L2: 231V &nbsp; L3: 229V</p>
            <p>Frequency: 50.0 Hz</p>
            <p>Phase Balance: <span className="text-green-600">OK</span></p>
          </div>
        </div>

        {/* Power Quality */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm text-gray-600 mb-3">Power Quality</h3>
          <div className="flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-semibold text-sm">Normal</span>
            </div>
            <p className="text-xs text-gray-500 mt-3">Normal</p>
          </div>
        </div>
      </div>

      {/* REAL-TIME LOAD */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
        <h3 className="text-sm text-gray-600 mb-4">Real-Time Electrical Load</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Active Power" value="750 kW" />
          <StatCard label="Reactive Power" value="250 kVAR" />
          <StatCard label="Energy Today" value="800 kVA" />
          <StatCard label="Power Factor" value="0.93 PF" />
        </div>
      </div>

      {/* ENERGY OVERVIEW */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
        <h3 className="text-sm text-gray-600 mb-4">Energy Consumption Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Energy Today" value="8,500 kWh" />
          <StatCard label="Energy This Month" value="150,000 kWh" />
          <StatCard label="Peak Demand" value="980 kW" />
          <StatCard label="Est. Monthly Cost" value="$18,000" />
        </div>
      </div>

      {/* CONSUMPTION GRAPH */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm text-gray-600">Electricity Consumption</h3>
          <div className="space-x-2">
            <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded">Today</button>
            <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded">Week</button>
            <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded">Month</button>
          </div>
        </div>
        <div className="h-56 flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300 rounded">
          Chart goes here (Recharts / Chart.js)
        </div>
      </div>

      {/* ALERTS & INSIGHTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoCard
          title="Electrical Alarms & Alerts"
          items={["Voltage imbalance on L1 (1.5%) – Friday", "No active alarms"]}
        />
        <InfoCard
          title="Grid Availability & Reliability"
          items={["Grid uptime (30 days): 93.9%", "Total outage duration: 45 minutes"]}
        />
        <InfoCard
          title="Smart Energy Insights"
          items={["Low power factor detected last week", "Peak demand occurs between 14:00 – 15:00"]}
        />
      </div>

      {/* EVENT LOG */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
        <h3 className="text-sm text-gray-600 mb-3">Event & Alarm Logs</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-gray-600 border-b border-gray-200">
              <tr>
                <th className="py-2 text-left">Timestamp</th>
                <th className="py-2 text-left">Type</th>
                <th className="py-2 text-left">Description</th>
                <th className="py-2 text-left">Severity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2">2024-10-26 14:55</td>
                <td>ALARM</td>
                <td>Voltage imbalance detected</td>
                <td className="text-red-500">Critical</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2">2024-10-26 16:08</td>
                <td>EVENT</td>
                <td>Peak demand recorded (950 kW)</td>
                <td className="text-blue-500">Info</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

/* SMALL COMPONENTS */
function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-3 shadow-sm">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-lg font-semibold text-gray-700 mt-1">{value}</p>
    </div>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <h3 className="text-sm text-gray-600 mb-3">{title}</h3>
      <ul className="text-sm text-gray-500 space-y-2">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
