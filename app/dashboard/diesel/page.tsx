"use client";

import React from "react";

const DieselLevelPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-6xl space-y-6">

        {/* CURRENT DIESEL LEVEL */}
        <div className="bg-white rounded-2xl p-8 shadow-sm flex items-center gap-6">
          <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7h10v13H3V7zm10 3h2l3 3v7a2 2 0 01-2 2h-3"
              />
            </svg>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Current Diesel Level</p>
            <h1 className="text-5xl font-bold text-gray-900">
              5,000 <span className="text-3xl font-semibold">L</span>
            </h1>
          </div>
        </div>

        {/* CONSUMPTION SUMMARY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard label="Monthly Consumption" value="3,200 L" />
          <StatCard label="Daily Average Usage" value="105 L/day" />
          <StatCard label="Estimated Days Remaining" value="47 days" />
          <StatCard label="Average Burn Rate" value="12.5 L/hr" />
        </div>

        {/* LAST SUPPLY */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">Last Diesel Supply</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatItem label="Opening Reading" value="2,500 L" />
            <StatItem label="Quantity Supplied" value="3,000 L" />
            <StatItem label="Date Supplied" value="17 Apr 2024" />
            <StatItem label="Cost" value="₦1,200,000" />
          </div>
        </div>

        {/* DIESEL USAGE HISTORY */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">
            Diesel Consumption History
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-3">Date</th>
                  <th className="py-3">Opening Level</th>
                  <th className="py-3">Consumed</th>
                  <th className="py-3">Closing Level</th>
                  <th className="py-3">Runtime</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <HistoryRow
                  date="18 Jan 2026"
                  opening="5,200 L"
                  consumed="120 L"
                  closing="5,080 L"
                  runtime="9 hrs"
                />
                <HistoryRow
                  date="17 Jan 2026"
                  opening="5,350 L"
                  consumed="150 L"
                  closing="5,200 L"
                  runtime="11 hrs"
                />
                <HistoryRow
                  date="16 Jan 2026"
                  opening="5,480 L"
                  consumed="130 L"
                  closing="5,350 L"
                  runtime="10 hrs"
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* INSIGHTS */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">Insights</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatItem label="Highest Daily Usage" value="150 L" />
            <StatItem label="Lowest Daily Usage" value="90 L" />
            <StatItem label="Refill Frequency" value="Every 18 days" />
            <StatItem label="Consumption Trend" value="Stable" />
          </div>
        </div>

      </div>
    </div>
  );
};

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm">
    <p className="text-sm text-gray-500 mb-1">{label}</p>
    <p className="text-3xl font-bold text-gray-900">{value}</p>
  </div>
);

const StatItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-sm text-gray-500 mb-1">{label}</p>
    <p className="text-xl font-semibold text-gray-900">{value}</p>
  </div>
);

const HistoryRow = ({
  date,
  opening,
  consumed,
  closing,
  runtime,
}: {
  date: string;
  opening: string;
  consumed: string;
  closing: string;
  runtime: string;
}) => (
  <tr className="border-b last:border-none">
    <td className="py-3">{date}</td>
    <td className="py-3">{opening}</td>
    <td className="py-3 text-red-600">{consumed}</td>
    <td className="py-3">{closing}</td>
    <td className="py-3">{runtime}</td>
  </tr>
);

export default DieselLevelPage;
