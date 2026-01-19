export default function FireAlarmPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-6 space-y-6">
      <h1 className="text-2xl font-bold">Fire Alarm & Life Safety</h1>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <SummaryCard
          title="Current Alarm Status"
          value="NORMAL"
          subtitle="System OK"
          status="green"
        />
        <SummaryCard
          title="Last Alarm Triggered"
          value="2 days ago"
          subtitle="Dec 11, 2025 | 03:15 PM"
        />
        <SummaryCard
          title="Alarm Duration (Minutes)"
          value="5"
          subtitle="Last Incident"
        />
        <SummaryCard
          title="Total Alarms This Month"
          value="3"
          subtitle="Dec 2025"
        />
      </div>

      {/* Last Alarm Details */}
      <LastAlarmDetails />

      {/* Zone + Manual Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ZoneStatus />
        </div>
        <ManualControls />
      </div>

      {/* History + Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AlarmHistory />
        </div>
        <SafetyAlerts />
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function SummaryCard({
  title,
  value,
  subtitle,
  status,
}: {
  title: string;
  value: string;
  subtitle: string;
  status?: "green";
}) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-4 flex justify-between items-center">
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <p
          className={`text-2xl font-bold ${
            status === "green" ? "text-green-600" : ""
          }`}
        >
          {value}
        </p>
        <p className="text-xs text-slate-400">{subtitle}</p>
      </div>
      {status === "green" && (
        <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
          ✓
        </div>
      )}
    </div>
  );
}

function LastAlarmDetails() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Last Alarm Details</h3>
        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
          Resolved
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="font-medium">Dec 11, 2025 | 03:15 PM</p>
          <p className="text-slate-500">Start Time</p>
          <p className="mt-2">
            <span className="font-medium">Cause:</span> Smoke Detector Activation
          </p>
          <p>
            <span className="font-medium">Zone:</span> Floor 3, East Wing
          </p>
          <p>
            <span className="font-medium">Device ID:</span> SD-03
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full h-2 bg-slate-200 rounded relative">
            <div className="absolute h-2 bg-red-500 rounded w-full" />
          </div>
        </div>

        <div className="text-right">
          <p className="font-medium">Dec 11, 2025 | 03:20 PM</p>
          <p className="text-slate-500">Stop Time</p>
          <p className="mt-2 font-medium">Total Duration: 5 Minutes</p>
        </div>
      </div>
    </div>
  );
}

function ZoneStatus() {
  const zones = [
    { name: "Floor 1, North Wing", total: 50, active: 50, faulty: 0, status: "NORMAL" },
    { name: "Floor 2, South Wing", total: 60, active: 58, faulty: 2, status: "FAULT" },
    { name: "Floor 3, East Wing", total: 45, active: 45, faulty: 0, status: "NORMAL" },
    { name: "Floor 4, West Wing", total: 55, active: 54, faulty: 1, status: "FAULT" },
  ];

  return (
    <div className="bg-white rounded-xl border shadow-sm p-4">
      <h3 className="font-semibold mb-4">Zone & Device Status</h3>

      <table className="w-full text-sm">
        <thead className="border-b text-slate-500">
          <tr>
            <th className="text-left py-2">Zone Name</th>
            <th>Detectors</th>
            <th>Active</th>
            <th>Faulty</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {zones.map((z) => (
            <tr key={z.name} className="border-b last:border-none">
              <td className="py-2">{z.name}</td>
              <td className="text-center">{z.total}</td>
              <td className="text-center">{z.active}</td>
              <td className="text-center">{z.faulty}</td>
              <td className="text-center">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    z.status === "NORMAL"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {z.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ManualControls() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-4 space-y-4">
      <h3 className="font-semibold">Manual Controls & Acknowledgement</h3>

      <div className="grid grid-cols-3 gap-3">
        <DisabledButton label="Acknowledge Alarm" />
        <DisabledButton label="Reset Alarm" />
        <DisabledButton label="Silence Buzzer" />
      </div>

      <p className="text-xs text-slate-500 text-center">
        System in Normal State – Controls Disabled
      </p>
    </div>
  );
}

function DisabledButton({ label }: { label: string }) {
  return (
    <button
      disabled
      className="bg-slate-200 text-slate-400 rounded-lg py-6 text-sm cursor-not-allowed"
    >
      {label}
    </button>
  );
}

function AlarmHistory() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-4">
      <h3 className="font-semibold mb-4">Alarm History Log</h3>

      <table className="w-full text-sm">
        <thead className="border-b text-slate-500">
          <tr>
            <th className="text-left py-2">Date</th>
            <th>Start</th>
            <th>Stop</th>
            <th>Duration</th>
            <th>Cause</th>
            <th>Zone</th>
            <th>Action</th>
            <th>Resolved By</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">Dec 11, 2025</td>
            <td className="text-center">03:15 PM</td>
            <td className="text-center">03:20 PM</td>
            <td className="text-center">5</td>
            <td>Smoke Detector</td>
            <td>Floor 3, East</td>
            <td>Investigated</td>
            <td>John D.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function SafetyAlerts() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-4 space-y-3">
      <h3 className="font-semibold">Alerts & Safety Notifications</h3>

      <div className="flex items-center gap-2 text-green-700 text-sm">
        ✓ No Active Alarms
      </div>

      <div className="flex items-center gap-2 text-orange-600 text-sm">
        ⚠ 2 Faulty Detectors – Floor 2, South Wing
      </div>

      <div className="flex items-center gap-2 text-orange-600 text-sm">
        ⚠ 1 Faulty Detector – Floor 4, West Wing
      </div>
    </div>
  );
}
