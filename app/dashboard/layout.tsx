"use client";

import React from "react";
import {
  FaHome,
  FaLightbulb,
  FaFireExtinguisher,
  FaSolarPanel,
  FaCalendarAlt,
} from "react-icons/fa";
import { GiPowerGenerator, GiSecurityGate } from "react-icons/gi";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { IoIosWater, IoMdSettings } from "react-icons/io";
import { TbAirConditioning } from "react-icons/tb";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-100 to-slate-200">

      {/* SIDEBAR */}
      <aside className="hidden md:flex w-64 flex-col bg-slate-900 text-slate-200 shadow-xl">
        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b border-slate-800">
          <span className="text-xl font-bold tracking-wide text-white">
            SMART BMS
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 text-sm">
          <NavItem href="/dashboard" icon={<FaHome />} label="Overview" active />

          <NavItem
            href="/dashboard/electricity"
            icon={<FaLightbulb className="text-yellow-400" />}
            label="Electricity"
          />

          <NavItem
            href="/dashboard/solar"
            icon={<FaSolarPanel className="text-amber-300" />}
            label="Solar"
          />

          <NavItem
            href="/dashboard/generator"
            icon={<GiPowerGenerator className="text-green-400" />}
            label="Generator"
          />

          <NavItem
            href="/dashboard/diesel"
            icon={<BsFillFuelPumpDieselFill className="text-orange-400" />}
            label="Diesel"
          />

          <NavItem
            href="/dashboard/water"
            icon={<IoIosWater className="text-blue-400" />}
            label="Water"
          />

          <NavItem
            href="/dashboard/hvac"
            icon={<TbAirConditioning className="text-cyan-400" />}
            label="HVAC"
          />

          <NavItem
            href="/dashboard/securitys"
            icon={<GiSecurityGate className="text-purple-400" />}
            label="Security"
          />

          <NavItem
            href="/dashboard/fire-alarm"
            icon={<FaFireExtinguisher className="text-red-400" />}
            label="Fire Alarm"
          />

          <NavItem
            href="/dashboard/ppm"
            icon={<FaCalendarAlt className="text-teal-400" />}
            label="PPM Schedule"
          />

          <div className="pt-3 mt-3 border-t border-slate-800">
            <NavItem
              href="/dashboard/settings"
              icon={<IoMdSettings />}
              label="Settings"
            />
          </div>
        </nav>

        {/* Footer */}
        <div className="h-12 flex items-center justify-center text-xs text-slate-400 border-t border-slate-800">
          v1.0 Smart Facility OS
        </div>
      </aside>

      {/* MAIN AREA */}
      <div className="flex flex-col flex-1">

        {/* HEADER */}
        <header className="h-16 bg-white/80 backdrop-blur border-b flex items-center justify-between px-6 shadow-sm">
          <div>
            <h1 className="text-lg font-semibold text-slate-800">
              Building Management Dashboard
            </h1>
            <p className="text-xs text-slate-500">
              Real-time facility monitoring
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">
              System Online
            </span>

            <span className="text-slate-600">Welcome, Admin</span>

            <button className="px-4 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white transition">
              Logout
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

const NavItem = ({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) => (
  <a
    href={href}
    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all
      ${
        active
          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      }`}
  >
    <span className="text-lg">{icon}</span>
    <span className="font-medium">{label}</span>
  </a>
);
