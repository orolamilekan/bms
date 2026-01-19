export default function SecurityAccessControlPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-6 space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold">Security & Access Control</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard title="Total People in Building" value="1,245" subtitle="Currently Inside" />
        <StatCard title="Active Access Codes" value="350" subtitle="Staff & Visitors" />
        <StatCard title="Manual Door Opens (Today)" value="15" subtitle="Authorized Overrides" />
        <StatCard title="Delivery Codes Generated" value="28" subtitle="Last 24 Hours" />
        <StatCard title="Confirmed Entries" value="1,180" subtitle="Successfully Validated" />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <PeopleDirectory />
          <DoorLogs />
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <AccessCodeGenerator />
          <DeliveryStats />
          <Alerts />
        </div>
      </div>
    </div>
  );
}

/* =======================
   COMPONENTS
======================= */

function StatCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="bg-white rounded-xl border p-4 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <h2 className="text-2xl font-bold mt-1">{value}</h2>
      <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
    </div>
  );
}

function PeopleDirectory() {
  const people = [
    {
      name: "Sarah Johnson",
      department: "Marketing",
      role: "Staff",
      access: "Level 3 (All Areas)",
      time: "10:15 AM, Dec 13",
      status: "Inside",
    },
    {
      name: "Michael Lee",
      department: "Engineering",
      role: "Contractor",
      access: "Level 2 (Tech Rooms)",
      time: "09:30 AM, Dec 13",
      status: "Inside",
    },
    {
      name: "David Smith",
      department: "Visitor",
      role: "Visitor",
      access: "Level 1 (Lobby)",
      time: "08:45 AM, Dec 13",
      status: "Outside",
    },
  ];

  return (
    <div className="bg-white rounded-xl border p-4 shadow-sm">
      <h3 className="font-semibold mb-4">People Directory (Building Occupants)</h3>

      <table className="w-full text-sm">
        <thead className="border-b text-slate-500">
          <tr>
            <th className="text-left py-2">Full Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>Access Level</th>
            <th>Last Entry</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {people.map((p) => (
            <tr key={p.name} className="border-b last:border-none">
              <td className="py-2">{p.name}</td>
              <td className="text-center">{p.department}</td>
              <td className="text-center">{p.role}</td>
              <td className="text-center">{p.access}</td>
              <td className="text-center">{p.time}</td>
              <td className="text-center">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium
                    ${
                      p.status === "Inside"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                >
                  {p.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AccessCodeGenerator() {
  return (
    <div className="bg-white rounded-xl border p-4 shadow-sm">
      <h3 className="font-semibold mb-4">Access Code Generator</h3>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <select className="border rounded p-2 text-sm">
          <option>Visitor</option>
        </select>
        <select className="border rounded p-2 text-sm">
          <option>4 Hours</option>
        </select>
        <select className="border rounded p-2 text-sm">
          <option>Main Lobby</option>
        </select>
      </div>

      <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
        Generate Access Code
      </button>

      <div className="mt-4 bg-slate-50 p-3 rounded-lg text-center">
        <p className="text-xl font-bold tracking-widest">9284-1057</p>
        <p className="text-xs text-slate-500">Expires: 02:15 PM, Dec 13</p>
      </div>
    </div>
  );
}

function DeliveryStats() {
  return (
    <div className="bg-white rounded-xl border p-4 shadow-sm">
      <h3 className="font-semibold mb-4">Delivery Access Tracking</h3>

      <div className="grid grid-cols-2 gap-3">
        <StatMini title="Total Codes Generated" value="28" color="green" />
        <StatMini title="Pending Confirmation" value="6" color="yellow" />
        <StatMini title="Manual Opens (Today)" value="15" color="blue" />
        <StatMini title="Manual Opens (Week)" value="45" color="purple" />
      </div>
    </div>
  );
}

function StatMini({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: "green" | "yellow" | "blue" | "purple";
}) {
  const colors: Record<string, string> = {
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
  };

  return (
    <div className={`p-3 rounded-lg ${colors[color]}`}>
      <p className="text-xs">{title}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
}

function DoorLogs() {
  return (
    <div className="bg-white rounded-xl border p-4 shadow-sm">
      <h3 className="font-semibold mb-4">Door Access & Manual Override Logs</h3>

      <table className="w-full text-sm">
        <thead className="border-b text-slate-500">
          <tr>
            <th className="text-left py-2">Door</th>
            <th>Open Type</th>
            <th>Time</th>
            <th>Authorized By</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td>Main Entrance</td>
            <td className="text-center">Access Code</td>
            <td className="text-center">10:25 AM</td>
            <td className="text-center">-</td>
          </tr>
          <tr className="border-b">
            <td>Server Room 1</td>
            <td className="text-center">Manual Override</td>
            <td className="text-center">10:18 AM</td>
            <td className="text-center">Admin (John D.)</td>
          </tr>
          <tr>
            <td>Loading Dock</td>
            <td className="text-center">Access Code</td>
            <td className="text-center">10:00 AM</td>
            <td className="text-center">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Alerts() {
  const alerts = [
    "Unauthorized Access Attempt at Server Room 1",
    "Forced Door Open at Emergency Exit 8",
    "Expired Code Usage Attempt at Main Lobby",
  ];

  return (
    <div className="bg-white rounded-xl border p-4 shadow-sm">
      <h3 className="font-semibold mb-4">Alerts & Notifications</h3>

      <ul className="space-y-2">
        {alerts.map((alert, i) => (
          <li
            key={i}
            className="bg-red-50 border border-red-200 text-red-700 text-sm p-2 rounded"
          >
            {alert}
          </li>
        ))}
      </ul>
    </div>
  );
}
