"use client";

import React, { Fragment } from 'react';
import Chart from './components/Chart';

const Page = () => {
  return (
    <Fragment>
      <div className="bg-gray-100 min-h-screen p-4 space-y-6 overflow-auto">

        {/* TOP ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Power Health */}
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <h3 className="text-xs text-gray-500 mb-2">Power Health</h3>
            <p className="text-green-600 font-semibold mb-3">⚡ On Grid</p>

            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Voltage</span>
                <span>230 V</span>
              </div>

              <div className="flex justify-between">
                <span>Frequency</span>
                <span>50 Hz</span>
              </div>
            </div>
          </div>

          {/* Electricity Consumption */}
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <h3 className="text-xs text-gray-500 mb-2">Electricity Consumption</h3>

            <p className="text-2xl font-bold mb-3">
              352 <span className="text-sm font-normal">kWh</span>
            </p>

            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Today's</span>
                <span>100 kWh</span>
              </div>

              <div className="flex justify-between">
                <span>Month total</span>
                <span>10,580 kWh</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Jan 15, 2025</span>
                <span className="font-semibold">₦2,500,000</span>
              </div>
            </div>
          </div>

          {/* Generator Status */}
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <h3 className="text-xs text-gray-500 mb-2">Generator Status</h3>
            <p className="text-yellow-600 font-semibold mb-3">Resting</p>

            <div className="flex justify-between text-sm">
              <span>Today's runtime</span>
              <span>4.5 hr</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span>Fuel level</span>
              <span>75%</span>
            </div>
          </div>

          {/* Active Alerts */}
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <h3 className="text-xs text-gray-500 mb-2">Active Alerts</h3>
            <p className="text-2xl font-bold mb-3">3</p>

            <div className="space-y-1 text-sm">
              <div className="flex justify-between items-center">
                <span>Electrical</span>
                <span className="w-2 h-2 bg-red-500 rounded-full" />
              </div>

              <div className="flex justify-between items-center">
                <span>HVAC</span>
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
              </div>

              <div className="flex justify-between items-center">
                <span>Security</span>
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Electricity Chart */}
          <div className="col-span-12 lg:col-span-8 bg-white rounded-xl p-3 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs text-gray-500">Electricity Consumption</h3>
              <div className="text-xs text-gray-400">Today · Week · Month</div>
            </div>

            <div className="min-h-[200px]">
              <Chart />
            </div>
          </div>

          {/* Right Side */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            {/* Power Source Timeline */}
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <h3 className="text-xs text-gray-500 mb-2">Power Source Timeline</h3>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full" />
                  Grid
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                  Generator
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full" />
                  Outage
                </div>
              </div>
            </div>

            {/* Fire Alarm */}
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <h3 className="text-xs text-gray-500 mb-2">Fire Alarm & Safety</h3>

              <div className="flex justify-between text-sm">
                <span>Smoke detectors</span>
                <span>5</span>
              </div>
              <div className="flex justify-between text-sm items-center mt-1">
                <span>Alarm</span>
                <span className="w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>Last Drill</span>
                <span>09:45</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Grid Input */}
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <h3 className="text-xs text-gray-500 mb-2">Grid Input Parameters</h3>

            <div className="flex justify-between text-sm mt-1">
              <span>L1 Voltage</span>
              <span>230 V</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span>L2 Voltage</span>
              <span>231 V</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span>Current</span>
              <span>20.5 A</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span>Frequency</span>
              <span>50 Hz</span>
            </div>
          </div>

          {/* Generator Params */}
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <h3 className="text-xs text-gray-500 mb-2">Generator Parameters</h3>

            <div className="flex justify-between text-sm mt-1">
              <span>Running hours</span>
              <span>4.5 h</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span>RPM</span>
              <span>1500</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span>Coolant temp</span>
              <span>85 °C</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span>Battery voltage</span>
              <span>13.7 V</span>
            </div>
          </div>

          {/* Fuel */}
          <div className="bg-white rounded-xl p-3 shadow-sm flex flex-col items-center justify-center">
            <h3 className="text-xs text-gray-500 mb-2">Fuel %</h3>

            <div className="w-20 h-20 rounded-full border-8 border-green-400 flex items-center justify-center text-lg font-semibold">
              75%
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Page;
