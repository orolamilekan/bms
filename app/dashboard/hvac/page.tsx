export default function HVACControlPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-6 space-y-6">
      <h1 className="text-2xl font-bold">HVAC / AC Control</h1>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Total AC Units" value="48" />
        <SummaryCard title="AC Units OFF" value="15" />
        <SummaryCard title="Faulty AC Units" value="1" alert />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Floors */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <FloorCard
            floor="Ground Floor"
            fault="Error: Condensate Pump"
            units={[
              { ac: "AC 01", status: "ON", temp: "25°C", on: true },
              { ac: "AC 02", status: "ON", temp: "25°C", on: true, fault: true },
              { ac: "AC 03", status: "OFF", temp: "26°C", on: false },
            ]}
          />

          <FloorCard
            floor="Floor 1"
            units={[
              { ac: "AC 01", status: "ON", temp: "25°C", on: true },
              { ac: "AC 02", status: "ON", temp: "24°C", on: true },
              { ac: "AC 03", status: "OFF", temp: "26°C", on: false },
            ]}
          />

          <FloorCard
            floor="Floor 2"
            units={[
              { ac: "AC 02", status: "ON", temp: "25°C", on: true },
              { ac: "AC 05", status: "ON", temp: "25°C", on: true },
              { ac: "AC 07", status: "OFF", temp: "26°C", on: false },
            ]}
          />

          <FloorCard
            floor="Floor 3"
            units={[
              { ac: "AC 03", status: "ON", temp: "25°C", on: true },
              { ac: "AC 06", status: "ON", temp: "24°C", on: true },
              { ac: "AC 08", status: "OFF", temp: "26°C", on: false },
            ]}
          />
        </div>

        {/* Right Panel */}
        <div className="space-y-6">
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
}: {
  title: string;
  value: string;
  alert?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-4 border shadow-sm bg-white flex items-center justify-between ${
        alert ? "border-red-300" : ""
      }`}
    >
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
      <div
        className={`h-10 w-10 rounded-full flex items-center justify-center ${
          alert ? "bg-red-100 text-red-600" : "bg-slate-100"
        }`}
      >
        ❄️
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
    status: string;
    temp: string;
    on: boolean;
    fault?: boolean;
  }[];
}) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-4 space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{floor}</h3>
        <span className="text-xs text-slate-400">❄️</span>
      </div>

      {fault && (
        <div className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded">
          {fault}
        </div>
      )}

      <div className="space-y-2">
        {units.map((u) => (
          <div
            key={u.ac}
            className="flex items-center justify-between text-sm"
          >
            <div>
              <p className="font-medium">{u.ac}</p>
              <p className="text-xs text-slate-500">
                {u.status} · {u.temp}
              </p>
              {u.fault && (
                <span className="text-xs text-red-600 font-medium">
                  ⚠ FAULT
                </span>
              )}
            </div>

            <Toggle on={u.on} />
          </div>
        ))}
      </div>

      <div className="flex gap-2 pt-2">
        <button className="flex-1 bg-slate-200 text-sm rounded py-1">
          Turn ON All ACs
        </button>
        <button className="flex-1 bg-slate-200 text-sm rounded py-1">
          Auto Mode
        </button>
      </div>
    </div>
  );
}

function Toggle({ on }: { on: boolean }) {
  return (
    <div
      className={`w-10 h-5 rounded-full p-1 transition ${
        on ? "bg-green-500" : "bg-slate-300"
      }`}
    >
      <div
        className={`h-3 w-3 bg-white rounded-full transition ${
          on ? "translate-x-5" : ""
        }`}
      />
    </div>
  );
}

function AlertsPanel() {
  const alerts = [
    {
      time: "10:08 AM",
      text: "AC 02, Ground Floor – Condensate Pump Fault",
      type: "error",
    },
    {
      time: "09:58 AM",
      text: "AC 05 – Over-Temperature Warning",
      type: "warning",
    },
    {
      time: "09:45 AM",
      text: "Manual Override: Floor 2 ON",
      type: "info",
    },
    {
      time: "09:35 AM",
      text: "All ACs ON – Floor 2",
      type: "success",
    },
  ];

  const colors: Record<string, string> = {
    error: "text-red-600",
    warning: "text-orange-600",
    info: "text-blue-600",
    success: "text-green-600",
  };

  return (
    <div className="bg-white rounded-xl border shadow-sm p-4">
      <h3 className="font-semibold mb-3">Alerts & Logs</h3>

      <ul className="space-y-3 text-sm">
        {alerts.map((a, i) => (
          <li key={i} className="flex gap-2">
            <span className={colors[a.type]}>●</span>
            <div>
              <p className="text-xs text-slate-400">{a.time}</p>
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
    <div className="bg-white rounded-xl border shadow-sm p-4 space-y-4">
      <div>
        <h3 className="font-semibold">System Auto Mode</h3>
        <p className="text-sm text-slate-500">
          Power Supply: <span className="text-green-600 font-medium">Normal</span>
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm">Auto Mode</span>
        <Toggle on />
      </div>
    </div>
  );
}
