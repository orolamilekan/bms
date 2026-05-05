"use client";

import { useState } from "react";
import {
  FiSettings,
  FiUsers,
  FiCpu,
  FiZap,
  FiShield,
  FiBell,
  FiPlus,
  FiTrash2,
  FiEdit,
} from "react-icons/fi";

/* ---------- Types ---------- */

type UserRole = "Admin" | "Technician" | "Viewer";
type DeviceStatus = "online" | "offline";

/* ---------- Page ---------- */

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <Section title="General Settings" icon={<FiSettings />}>
        <GeneralSettings />
      </Section>

      <Section title="User Management" icon={<FiUsers />}>
        <UserManagement />
      </Section>

      <Section title="Device Management" icon={<FiCpu />}>
        <DeviceManagement />
      </Section>

      <Section title="Energy & Automation" icon={<FiZap />}>
        <EnergyAutomation />
      </Section>

      <Section title="Security & Access Control" icon={<FiShield />}>
        <SecuritySettings />
      </Section>

      <Section title="Notifications & Alerts" icon={<FiBell />}>
        <NotificationSettings />
      </Section>
    </div>
  );
}

/* ---------- Section Wrapper ---------- */

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
    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="text-blue-600">{icon}</div>
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
      {children}
    </div>
  );
}

/* ---------- General Settings ---------- */

function GeneralSettings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input label="Site Name" placeholder="Echo BMS HQ" />
      <Input label="Location" placeholder="Dubai, UAE" />
      <Select label="Timezone" options={["UTC", "GMT+4", "GMT+5"]} />
      <Select label="Language" options={["English", "Arabic", "French"]} />

      <Toggle label="Enable Notifications" />
      <Toggle label="Enable Critical Alerts" />

      <SaveButton />
    </div>
  );
}

/* ---------- User Management ---------- */

function UserManagement() {
  const [users, setUsers] = useState<
    { id: number; name: string; role: UserRole }[]
  >([
    { id: 1, name: "John Admin", role: "Admin" },
    { id: 2, name: "Sara Tech", role: "Technician" },
  ]);

  return (
    <div className="space-y-4">
      <table className="w-full text-sm">
        <thead className="text-gray-500 border-b">
          <tr>
            <th className="py-2 text-left">Name</th>
            <th>Role</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b last:border-0">
              <td className="py-2">{u.name}</td>
              <td>
                <select className="rounded-md border px-2 py-1">
                  <option>{u.role}</option>
                  <option>Admin</option>
                  <option>Technician</option>
                  <option>Viewer</option>
                </select>
              </td>
              <td className="flex justify-end gap-2 py-2">
                <IconButton icon={<FiEdit />} />
                <IconButton icon={<FiTrash2 />} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
        <FiPlus /> Add User
      </button>

      <SaveButton />
    </div>
  );
}

/* ---------- Device Management ---------- */

function DeviceManagement() {
  const devices = [
    { name: "HVAC System", status: "online" as DeviceStatus },
    { name: "Fire Alarm", status: "offline" as DeviceStatus },
    { name: "Solar Inverter", status: "online" as DeviceStatus },
  ];

  return (
    <div className="space-y-4">
      {devices.map((d) => (
        <div
          key={d.name}
          className="flex items-center justify-between rounded-lg border p-3 hover:bg-gray-50 transition"
        >
          <div>
            <div className="font-medium text-gray-800">{d.name}</div>
            <div
              className={`text-xs ${
                d.status === "online"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {d.status.toUpperCase()}
            </div>
          </div>
          <div className="flex gap-2">
            <IconButton icon={<FiEdit />} />
            <IconButton icon={<FiTrash2 />} />
          </div>
        </div>
      ))}

      <button className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
        <FiPlus /> Add Device
      </button>

      <SaveButton />
    </div>
  );
}

/* ---------- Energy & Automation ---------- */

function EnergyAutomation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Toggle label="Energy Saving Mode" />
      <Toggle label="Enable HVAC Automation" />

      <Slider label="Temperature Threshold (°C)" min={16} max={30} />
      <Slider label="Humidity Limit (%)" min={30} max={80} />
      <Slider label="Power Limit (kW)" min={10} max={500} />

      <SaveButton />
    </div>
  );
}

/* ---------- Security Settings ---------- */

function SecuritySettings() {
  return (
    <div className="space-y-4">
      <Toggle label="Enable Access Logs" />
      <Toggle label="Restrict Device Access by Role" />

      <SaveButton />
    </div>
  );
}

/* ---------- Notifications ---------- */

function NotificationSettings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Toggle label="Email Notifications" />
      <Toggle label="SMS Alerts" />
      <Toggle label="Push Notifications" />

      <Input label="Critical Alert Threshold (%)" placeholder="90" />

      <SaveButton />
    </div>
  );
}

/* ---------- UI Helpers ---------- */

function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>
      <input
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}

function Select({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>
      <select className="mt-1 w-full rounded-lg border px-3 py-2 text-sm">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function Toggle({ label }: { label: string }) {
  const [on, setOn] = useState(true);
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <span className="text-sm text-gray-700">{label}</span>
      <button
        onClick={() => setOn(!on)}
        className={`w-11 h-6 rounded-full transition ${
          on ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`h-5 w-5 bg-white rounded-full transform transition ${
            on ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

function Slider({
  label,
  min,
  max,
}: {
  label: string;
  min: number;
  max: number;
}) {
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        className="w-full mt-2"
      />
    </div>
  );
}

function SaveButton() {
  return (
    <div className="md:col-span-2 flex justify-end mt-4">
      <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm text-white hover:bg-blue-700 transition">
        Save Changes
      </button>
    </div>
  );
}

function IconButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="p-2 rounded-lg hover:bg-gray-100 transition">
      {icon}
    </button>
  );
}
