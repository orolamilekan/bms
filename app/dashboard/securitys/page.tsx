"use client";

import { useState } from "react";
import {
  FiSearch,
  FiPlus,
  FiEdit,
  FiTrash2,
  FiUser,
} from "react-icons/fi";

/* ---------------- Types ---------------- */

type User = {
  id: number;
  name: string;
  email: string;
  department: string;
  lastLogin: string;
  status: "Active" | "Disabled";
};

/* ---------------- Page ---------------- */

export default function SettingsUserManagementPage() {
  const [activeTab, setActiveTab] = useState("User Management");

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3">
        {[
          "User Management",
          "Roles & Permissions",
          "Profile Settings",
          "System Preferences",
        ].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-4 py-2 text-sm font-medium border transition
              ${
                activeTab === tab
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* User Table */}
        <div className="xl:col-span-2 rounded-xl bg-white p-5 shadow-sm border">
          <UserTable />
        </div>

        {/* Add User */}
        <div className="rounded-xl bg-white p-5 shadow-sm border">
          <AddUserPanel />
        </div>
      </div>

      {/* Bottom Panels */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <RolesAccessControl />
        <ProfileCard />
        <NotificationPreferences />
      </div>
    </div>
  );
}

/* ---------------- User Table ---------------- */

function UserTable() {
  const users: User[] = [
    {
      id: 1,
      name: "Admin User",
      email: "admin@bms.com",
      department: "Operations",
      lastLogin: "07:00 AM",
      status: "Active",
    },
    {
      id: 2,
      name: "Technician",
      email: "tech@bms.com",
      department: "Maintenance",
      lastLogin: "10:30 PM",
      status: "Active",
    },
    {
      id: 3,
      name: "Viewer",
      email: "viewer@bms.com",
      department: "Guest",
      lastLogin: "09:15 AM",
      status: "Disabled",
    },
  ];

  return (
    <>
      {/* Search + Actions */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            className="w-full rounded-lg border pl-9 pr-3 py-2 text-sm"
            placeholder="Search user..."
          />
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
          <FiPlus /> Add New User
        </button>
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead className="text-gray-500 border-b">
          <tr>
            <th className="py-2 text-left">Full Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Last Login</th>
            <th>Status</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b last:border-0">
              <td className="py-2">{u.name}</td>
              <td>{u.email}</td>
              <td>{u.department}</td>
              <td>{u.lastLogin}</td>
              <td>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium
                    ${
                      u.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                >
                  {u.status}
                </span>
              </td>
              <td className="flex justify-end gap-2 py-2">
                <IconButton icon={<FiEdit />} />
                <IconButton icon={<FiTrash2 />} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

/* ---------------- Add User ---------------- */

function AddUserPanel() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800">Add New User</h3>

      <Input label="Full Name" />
      <Input label="Email" />
      <Select label="Department" options={["Admin", "Technician", "Visitor"]} />

      <Toggle label="Invite via Link Instead of Password" />

      <button className="w-full rounded-lg bg-blue-600 py-2 text-sm text-white hover:bg-blue-700">
        Create User
      </button>
    </div>
  );
}

/* ---------------- Roles ---------------- */

function RolesAccessControl() {
  const roles = [
    "View Overview",
    "Electricity Monitoring",
    "Generator Monitoring",
    "HVAC Control",
    "Fire Alarm Monitoring",
    "Settings Access",
  ];

  return (
    <Card title="Roles & Access Control">
      {roles.map((r) => (
        <Toggle key={r} label={r} />
      ))}
    </Card>
  );
}

/* ---------------- Profile ---------------- */

function ProfileCard() {
  return (
    <Card>
      <div className="flex flex-col items-center gap-4">
        <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
          <FiUser className="text-gray-400 text-3xl" />
        </div>
        <input
          className="w-full rounded-lg border px-3 py-2 text-sm"
          placeholder="Admin"
        />
        <button className="w-full rounded-lg border py-2 text-sm">
          Change Password
        </button>
        <button className="w-full rounded-lg bg-blue-600 py-2 text-sm text-white hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </Card>
  );
}

/* ---------------- Notifications ---------------- */

function NotificationPreferences() {
  const items = [
    "Email Alerts",
    "Push Notifications",
    "Fault Alerts",
    "Access Alerts",
  ];

  return (
    <Card title="Notification Preferences">
      {items.map((i) => (
        <Toggle key={i} label={i} />
      ))}
    </Card>
  );
}

/* ---------------- UI Helpers ---------------- */

function Card({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm border">
      {title && (
        <h3 className="mb-4 font-semibold text-gray-800">{title}</h3>
      )}
      {children}
    </div>
  );
}

function Input({ label }: { label: string }) {
  return (
    <div>
      <label className="text-xs text-gray-500">{label}</label>
      <input className="mt-1 w-full rounded-lg border px-3 py-2 text-sm" />
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
      <label className="text-xs text-gray-500">{label}</label>
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
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-gray-600">{label}</span>
      <button
        onClick={() => setOn(!on)}
        className={`w-10 h-5 rounded-full transition ${
          on ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`h-4 w-4 bg-white rounded-full transform transition ${
            on ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

function IconButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="rounded-lg p-2 hover:bg-gray-100 transition">
      {icon}
    </button>
  );
}
