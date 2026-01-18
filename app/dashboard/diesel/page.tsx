"use client";

import React from "react";

const DieselLevelPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-5xl space-y-6">

        {/* DIESEL LEVEL */}
        <div className="bg-white rounded-2xl p-8 shadow-sm flex items-center gap-6">
          <div className="w-16 h-16 bg-green-400 rounded-xl flex items-center justify-center">
            {/* Fuel Icon */}
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

          <h1 className="text-5xl font-bold text-gray-900">
            5000 <span className="text-3xl font-semibold">L</span>
          </h1>
        </div>

        {/* MONTHLY CONSUMPTION */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            Monthly Consumption
          </h2>

          <p className="text-5xl font-bold text-gray-900">
            3,200 <span className="text-3xl font-semibold">L</span>
          </p>
        </div>

        {/* LAST SUPPLY */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">
            Last Supply
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Left */}
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Reading</p>
                <p className="text-4xl font-bold">2,500 L</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Received</p>
                <p className="text-lg font-medium">04/17/2024</p>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Amount</p>
                <p className="text-4xl font-bold">$1,200</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Date Received</p>
                <p className="text-lg font-medium">04/17/2024</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DieselLevelPage;