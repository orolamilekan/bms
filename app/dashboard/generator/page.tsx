"use client";

// import React from "react";

const GeneratorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-5xl space-y-6">

        {/* TOP STATUS CARD */}
        <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-green-400 flex items-center justify-center">
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
                  d="M12 2v10m0 0a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            </div>

            <h1 className="text-4xl font-bold tracking-wide text-gray-900">
              RUNNING
            </h1>
          </div>

          <button className="px-5 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-50">
            Turn off
          </button>
        </div>

        {/* SETTINGS */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Settings</h2>

          <div className="flex items-center gap-4">
            <div className="w-12 h-7 bg-blue-500 rounded-full relative">
              <span className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full" />
            </div>
            <span className="text-sm font-medium">
              Remote Auto Turn On
            </span>
          </div>
        </div>

        {/* GENERATOR STATUS (ROW 1) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">Generator Status</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatusItem label="Power Output" value="600 kW" />
            <StatusItem label="Running Hours" value="1,245 hrs" />
            <StatusItem label="Fuel Level" value="75 %" />
            <StatusItem label="Last Maintenance" value="01/03/2024" />
          </div>
        </div>

        {/* GENERATOR STATUS (ROW 2) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">Generator Status</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatusItem label="Power Output" value="600 kW" />
            <StatusItem label="Running Hours" value="2,545 hrs" />
            <StatusItem label="kWh" value="Activate" muted />
          </div>
        </div>

      </div>
    </div>
  );
};

const StatusItem = ({
  label,
  value,
  muted = false,
}: {
  label: string;
  value: string;
  muted?: boolean;
}) => (
  <div>
    <p className="text-sm text-gray-500 mb-1">{label}</p>
    <p
      className={`text-xl font-semibold ${
        muted ? "text-gray-300" : "text-gray-900"
      }`}
    >
      {value}
    </p>
  </div>
);

export default GeneratorPage;