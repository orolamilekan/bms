import React from 'react';
import { 
  MdOutlineElectricBolt, 
  MdOutlineAnalytics, 
  MdOutlineSdStorage, 
  MdOutlineReportProblem,
  MdOutlineTimer, 
  MdOutlineFactCheck 
} from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
// import ElectricityChart from './ElectricityChart';

const electricityData = [
  { time: '00:00', kwh: 120, kw: 150 },
  { time: '04:00', kwh: 110, kw: 140 },
  { time: '08:00', kwh: 450, kw: 580 },
  { time: '12:00', kwh: 800, kw: 920 },
  { time: '16:00', kwh: 750, kw: 880 },
  { time: '20:00', kwh: 300, kw: 400 },
  { time: '23:59', kwh: 150, kw: 180 },
];

export default function ElectricityPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 p-6 font-sans">
      
      {/* SECTION 1: TOP SUMMARY CARDS (GRID STATUS) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg flex items-center gap-4">
          <div className="p-3 bg-green-500/10 rounded-md">
            <MdOutlineFactCheck className="text-green-500 text-2xl" />
          </div>
          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Grid Feed</p>
            <h2 className="text-xl font-bold text-green-500 uppercase tracking-tight">Available</h2>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <p className="text-[10px] text-slate-500 uppercase font-bold">Frequency</p>
            <HiOutlineRefresh className="text-blue-500 animate-spin-slow" />
          </div>
          <h2 className="text-2xl font-mono font-bold mt-1">50.02 <span className="text-xs text-slate-400">Hz</span></h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
          <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Total Active Power</p>
          <h2 className="text-2xl font-mono font-bold text-amber-500">742.8 <span className="text-xs text-slate-400 font-normal uppercase">kW</span></h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg text-blue-400">
          <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Daily Consumption</p>
          <h2 className="text-2xl font-mono font-bold">12,450 <span className="text-xs text-slate-400 font-normal uppercase">kWh</span></h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT COLUMN: LIVE METERING & QUALITY */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <section className="bg-slate-900 border border-slate-800 rounded-lg p-5">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-5 flex items-center gap-2">
              <MdOutlineElectricBolt className="text-amber-500" /> Phase Analysis
            </h3>
            {['L1', 'L2', 'L3'].map((phase, i) => (
              <div key={phase} className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3 last:border-0 last:mb-0">
                <span className="text-blue-400 font-bold font-mono">{phase}</span>
                <div className="text-right">
                  <p className="text-sm font-mono font-bold">23{i}.{i+4} V</p>
                  <p className="text-[9px] text-slate-500 uppercase">Voltage</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono font-bold">10{20+i} A</p>
                  <p className="text-[9px] text-slate-500 uppercase">Current</p>
                </div>
              </div>
            ))}
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-lg p-5">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-4 flex items-center gap-2">
              <MdOutlineAnalytics className="text-blue-500" /> Power Quality Indices
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <p className="text-[9px] text-slate-500 uppercase font-bold">Power Factor</p>
                <p className="text-lg font-mono font-bold text-amber-500">0.89 <small className="text-[10px]">Lag</small></p>
              </div>
              <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <p className="text-[9px] text-slate-500 uppercase font-bold">THD (Voltage)</p>
                <p className="text-lg font-mono font-bold text-green-500">1.2%</p>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: MAIN LOAD PROFILE CHART */}
        <div className="col-span-12 lg:col-span-8">
          <section className="bg-slate-900 border border-slate-800 rounded-lg p-5 h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Electricity Consumption vs Demand</h3>
              <div className="flex bg-slate-950 rounded p-1">
                <button className="px-3 py-1 text-[10px] bg-slate-800 rounded text-white shadow-sm">Today</button>
                <button className="px-3 py-1 text-[10px] hover:text-white transition-colors">Week</button>
                <button className="px-3 py-1 text-[10px] hover:text-white transition-colors">Month</button>
              </div>
            </div>
            {/* <ElectricityChart data={electricityData} /> */}
          </section>
        </div>

        {/* BOTTOM SECTION: LOGS & INSIGHTS */}
        <div className="col-span-12 lg:col-span-8">
          <section className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-slate-800 bg-slate-950/50 flex justify-between items-center">
              <h3 className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
                <MdOutlineSdStorage /> Electrical Activity Log
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px]">
                <thead className="bg-slate-950 text-slate-500 uppercase tracking-tighter">
                  <tr>
                    <th className="p-4 font-medium">Timestamp</th>
                    <th className="p-4 font-medium">Measurement</th>
                    <th className="p-4 font-medium">Event Detail</th>
                    <th className="p-4 font-medium text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 font-mono">
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 text-slate-500">2026-01-18 13:40:01</td>
                    <td className="p-4 font-bold">L1 Voltage</td>
                    <td className="p-4">Transient Swell (242V)</td>
                    <td className="p-4 text-amber-500 text-right font-bold uppercase">Warning</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 text-slate-500">2026-01-18 12:15:22</td>
                    <td className="p-4 font-bold">Grid Freq</td>
                    <td className="p-4">Normalized to 50.00Hz</td>
                    <td className="p-4 text-green-500 text-right font-bold uppercase">Nominal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6">
          <section className="bg-slate-900 border border-slate-800 rounded-lg p-5">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-4 flex items-center gap-2">
              <MdOutlineTimer /> Grid Availability
            </h3>
            <div className="flex justify-between text-[11px] mb-2">
              <span className="text-slate-500 uppercase font-bold">30 Day Uptime</span>
              <span className="text-blue-400 font-bold">99.982%</span>
            </div>
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden mb-4">
              <div className="bg-blue-600 h-full w-[99%] shadow-[0_0_8px_rgba(37,99,235,0.5)]"></div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center text-[10px] uppercase font-bold">
               <div className="bg-slate-950 p-2 rounded border border-slate-800">
                  <p className="text-slate-500">Outages</p>
                  <p className="text-lg text-white font-mono">1</p>
               </div>
               <div className="bg-slate-950 p-2 rounded border border-slate-800">
                  <p className="text-slate-500">Duration</p>
                  <p className="text-lg text-white font-mono">12<small>m</small></p>
               </div>
            </div>
          </section>

          <section className="bg-blue-900/10 border border-blue-500/20 rounded-lg p-5">
            <h3 className="text-xs font-bold text-blue-400 uppercase mb-3 flex items-center gap-2">
              <MdOutlineReportProblem /> AI Load Insight
            </h3>
            <div className="p-3 bg-slate-950/60 rounded border-l-2 border-amber-500 shadow-lg">
              <p className="text-[11px] font-bold text-amber-200 uppercase tracking-tight">Reactive Power High</p>
              <p className="text-[10px] text-slate-400 mt-1 leading-relaxed italic">
                L2 power factor dropping at 14:00. Recommend manual check on Capacitor Bank Stage 3 contactors.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}