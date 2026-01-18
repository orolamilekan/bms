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
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-56 bg-gray-800 border-r hidden md:flex flex-col">
        <div className="py-3 font-bold text-lg text-white text-center">
          BMS
        </div>

        {/* Sidebar scrolls independently */}
        <nav className="px-3 space-y-1 text-sm overflow-y-auto flex-1">
          <a
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-600 text-white font-semibold"
          >
            <FaHome />
            Overview
          </a>

          <a
            href="/dashboard/electricity"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white"
          >
            <FaLightbulb className="text-yellow-400" />
            Electricity
          </a>

          <a
            href="/dashboard/solar"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white"
          >
            <FaSolarPanel className="text-yellow-300" />
            Solar
          </a>

          <a
            href="/dashboard/generator"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white"
          >
            <GiPowerGenerator className="text-green-400" />
            Generator
          </a>

          <a
            href="/dashboard/diesel"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white"
          >
            <BsFillFuelPumpDieselFill className="text-orange-400" />
            Diesel
          </a>

          <a
            href="/dashboard/water"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white"
          >
            <IoIosWater className="text-blue-400" />
            Water
          </a>

          <a
            href="/dashboard/hvac"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white"
          >
            <TbAirConditioning className="text-cyan-400" />
            HVAC
          </a>

          <a
            href="/dashboard/security"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white"
          >
            <GiSecurityGate className="text-purple-400" />
            Security
          </a>

          <a
            href="/dashboard/fire-alarm"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white"
          >
            <FaFireExtinguisher className="text-red-400" />
            Fire Alarm
          </a>

          {/* ✅ PPM Schedule */}
          <a
            href="/dashboard/ppm"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white"
          >
            <FaCalendarAlt className="text-teal-400" />
            PPM Schedule
          </a>

          <a
            href="/dashboard/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white"
          >
            <IoMdSettings />
            Settings
          </a>
        </nav>
      </aside>

      {/* MAIN AREA */}
      <div className="flex flex-col flex-1">
        {/* HEADER (fixed) */}
        <header className="h-14 bg-white border-b flex items-center justify-between px-5 shrink-0">
          <h1 className="text-base font-semibold">Dashboard</h1>

          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-600">Welcome, User</span>
            <button className="px-3 py-1 bg-red-500 text-white rounded">
              Logout
            </button>
          </div>
        </header>

        {/* ✅ SCROLLABLE CONTENT */}
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
