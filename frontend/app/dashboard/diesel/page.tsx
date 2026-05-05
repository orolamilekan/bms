"use client";

import React from "react";
import { FaGasPump, FaClock, FaCalendarAlt, FaChartLine, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { GiFuelTank } from "react-icons/gi";

const DieselLevelPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center">
      <div className="w-full max-w-5xl space-y-4">

        {/* CURRENT DIESEL LEVEL */}
        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
            <FaGasPump className="text-white w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Current Diesel Level</p>
            <h1 className="text-3xl font-bold text-gray-900">
              5,000 <span className="text-xl font-semibold">L</span>
            </h1>
          </div>
        </div>

        {/* CONSUMPTION SUMMARY */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard icon={<FaClock />} label="Monthly Consumption" value="3,200 L" />
          <StatCard icon={<FaChartLine />} label="Daily Avg Usage" value="105 L/day" />
          <StatCard icon={<FaCalendarAlt />} label="Est. Days Left" value="47 days" />
          <StatCard icon={<GiFuelTank />} label="Avg Burn Rate" value="12.5 L/hr" />
        </div>

        {/* LAST SUPPLY */}
        <div className="bg-white rounded-xl p-4 shadow">
          <h2 className="text-md font-semibold mb-3">Last Diesel Supply</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatItem icon={<FaArrowUp />} label="Opening Reading" value="2,500 L" />
            <StatItem icon={<FaArrowDown />} label="Quantity Supplied" value="3,000 L" />
            <StatItem icon={<FaCalendarAlt />} label="Date Supplied" value="17 Apr 2024" />
            <StatItem icon={<FaGasPump />} label="Cost" value="₦1,200,000" />
          </div>
        </div>

        {/* DIESEL USAGE HISTORY */}
        <div className="bg-white rounded-xl p-4 shadow">
          <h2 className="text-md font-semibold mb-3">Diesel Consumption History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-2">Date</th>
                  <th className="py-2">Opening</th>
                  <th className="py-2">Consumed</th>
                  <th className="py-2">Closing</th>
                  <th className="py-2">Runtime</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <HistoryRow date="18 Jan 2026" opening="5,200 L" consumed="120 L" closing="5,080 L" runtime="9 hrs" />
                <HistoryRow date="17 Jan 2026" opening="5,350 L" consumed="150 L" closing="5,200 L" runtime="11 hrs" />
                <HistoryRow date="16 Jan 2026" opening="5,480 L" consumed="130 L" closing="5,350 L" runtime="10 hrs" />
              </tbody>
            </table>
          </div>
        </div>

        {/* INSIGHTS */}
        <div className="bg-white rounded-xl p-4 shadow">
          <h2 className="text-md font-semibold mb-3">Insights</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatItem icon={<FaArrowUp />} label="Highest Daily Usage" value="150 L" />
            <StatItem icon={<FaArrowDown />} label="Lowest Daily Usage" value="90 L" />
            <StatItem icon={<FaCalendarAlt />} label="Refill Frequency" value="Every 18 days" />
            <StatItem icon={<FaChartLine />} label="Consumption Trend" value="Stable" />
          </div>
        </div>

      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-white rounded-xl p-3 shadow flex items-center gap-3">
    <div className="text-gray-500 w-6 h-6">{icon}</div>
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

const StatItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-2">
    <div className="text-gray-500 w-4 h-4">{icon}</div>
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const HistoryRow = ({ date, opening, consumed, closing, runtime }: { date: string; opening: string; consumed: string; closing: string; runtime: string }) => (
  <tr className="border-b last:border-none">
    <td className="py-2">{date}</td>
    <td className="py-2">{opening}</td>
    <td className="py-2 text-red-600">{consumed}</td>
    <td className="py-2">{closing}</td>
    <td className="py-2">{runtime}</td>
  </tr>
);

export default DieselLevelPage;
