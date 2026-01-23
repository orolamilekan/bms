"use client";

import React from "react";
import { FaUser, FaDoorOpen, FaKey, FaTruck, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";

export default function SecurityAccessControlPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-4 space-y-4">
      {/* Title */}
      <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
        <FaUser /> Security & Access Control
      </h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <StatCard title="Total People in Building" value="1,245" subtitle="Currently Inside" icon={<FaUser />} />
        <StatCard title="Active Access Codes" value="350" subtitle="Staff & Visitors" icon={<FaKey />} />
        <StatCard title="Manual Door Opens (Today)" value="15" subtitle="Authorized Overrides" icon={<FaDoorOpen />} />
        <StatCard title="Delivery Codes Generated" value="28" subtitle="Last 24 Hours" icon={<FaTruck />} />
        <StatCard title="Confirmed Entries" value="1,180" subtitle="Successfully Validated" icon={<FaCheckCircle />} />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <PeopleDirectory />
          <DoorLogs />
        </div>

        <div className="space-y-4">
          <AccessCodeGenerator />
          <DeliveryStats />
          <Alerts />
        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ title, value, subtitle, icon }: { title: string; value: string; subtitle: string; icon?: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border p-3 shadow-sm flex items-center gap-2">
      {icon && <div className="text-slate-400 w-6 h-6">{icon}</div>}
      <div>
        <p className="text-xs text-slate-500">{title}</p>
        <h2 className="text-lg md:text-xl font-bold">{value}</h2>
        <p className="text-xs text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}

function PeopleDirectory() {
  const people = [
    { name: "Sarah Johnson", dept: "Marketing", role: "Staff", access: "Level 3", time: "10:15 AM, Dec 13", status: "Inside" },
    { name: "Michael Lee", dept: "Engineering", role: "Contractor", access: "Level 2", time: "09:30 AM, Dec 13", status: "Inside" },
    { name: "David Smith", dept: "Visitor", role: "Visitor", access: "Level 1", time: "08:45 AM, Dec 13", status: "Outside" },
  ];

  return (
    <div className="bg-white rounded-xl border p-3 shadow-sm overflow-x-auto">
      <h3 className="font-semibold mb-2 flex items-center gap-1"><FaUser /> People Directory</h3>
      <table className="w-full text-xs md:text-sm">
        <thead className="border-b text-slate-500">
          <tr>
            <th className="text-left py-1">Full Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>Access</th>
            <th>Last Entry</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr key={p.name} className="border-b last:border-none">
              <td className="py-1">{p.name}</td>
              <td className="text-center">{p.dept}</td>
              <td className="text-center">{p.role}</td>
              <td className="text-center">{p.access}</td>
              <td className="text-center">{p.time}</td>
              <td className="text-center">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${p.status === "Inside" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
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
    <div className="bg-white rounded-xl border p-3 shadow-sm">
      <h3 className="font-semibold mb-2 flex items-center gap-1"><FaKey /> Access Code Generator</h3>
      <div className="grid grid-cols-3 gap-2 mb-2">
        <select className="border rounded p-1 text-xs"><option>Visitor</option></select>
        <select className="border rounded p-1 text-xs"><option>4 Hours</option></select>
        <select className="border rounded p-1 text-xs"><option>Main Lobby</option></select>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-xs font-medium">Generate Access Code</button>
      <div className="mt-2 bg-slate-50 p-2 rounded-lg text-center">
        <p className="text-lg font-bold tracking-widest">9284-1057</p>
        <p className="text-xs text-slate-500">Expires: 02:15 PM, Dec 13</p>
      </div>
    </div>
  );
}

function DeliveryStats() {
  return (
    <div className="bg-white rounded-xl border p-3 shadow-sm">
      <h3 className="font-semibold mb-2 flex items-center gap-1"><FaTruck /> Delivery Access Tracking</h3>
      <div className="grid grid-cols-2 gap-2">
        <StatMini title="Total Codes" value="28" color="green" />
        <StatMini title="Pending" value="6" color="yellow" />
        <StatMini title="Manual Opens (Today)" value="15" color="blue" />
        <StatMini title="Manual Opens (Week)" value="45" color="purple" />
      </div>
    </div>
  );
}

function StatMini({ title, value, color }: { title: string; value: string; color: "green" | "yellow" | "blue" | "purple" }) {
  const colors: Record<string, string> = { green: "bg-green-100 text-green-700", yellow: "bg-yellow-100 text-yellow-700", blue: "bg-blue-100 text-blue-700", purple: "bg-purple-100 text-purple-700" };
  return (
    <div className={`p-2 rounded-lg ${colors[color]}`}>
      <p className="text-xs">{title}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
}

function DoorLogs() {
  const logs = [
    { door: "Main Entrance", type: "Access Code", time: "10:25 AM", by: "-" },
    { door: "Server Room 1", type: "Manual Override", time: "10:18 AM", by: "Admin (John D.)" },
    { door: "Loading Dock", type: "Access Code", time: "10:00 AM", by: "-" },
  ];

  return (
    <div className="bg-white rounded-xl border p-3 shadow-sm overflow-x-auto">
      <h3 className="font-semibold mb-2 flex items-center gap-1"><FaDoorOpen /> Door Logs</h3>
      <table className="w-full text-xs md:text-sm">
        <thead className="border-b text-slate-500">
          <tr><th className="text-left py-1">Door</th><th>Type</th><th>Time</th><th>Authorized By</th></tr>
        </thead>
        <tbody>
          {logs.map((l, i) => (
            <tr key={i} className="border-b last:border-none">
              <td className="py-1">{l.door}</td>
              <td className="text-center">{l.type}</td>
              <td className="text-center">{l.time}</td>
              <td className="text-center">{l.by}</td>
            </tr>
          ))}
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
    <div className="bg-white rounded-xl border p-3 shadow-sm">
      <h3 className="font-semibold mb-2 flex items-center gap-1"><FaExclamationTriangle /> Alerts & Notifications</h3>
      <ul className="space-y-1">
        {alerts.map((a, i) => (
          <li key={i} className="bg-red-50 border border-red-200 text-red-700 text-xs p-1 rounded">{a}</li>
        ))}
      </ul>
    </div>
  );
}
