// app/dashboard/maintenance/page.tsx
import React from "react";
import {
  Calendar,
  ClipboardList,
  AlertTriangle,
  Clock,
  CheckCircle,
  Wrench,
  Upload,
  Edit3,
  MessageSquare,
  Check
} from "lucide-react";

export default function PreventiveMaintenancePage() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
        <StatCard
          title="Tasks Due Today"
          value="5"
          status="Normal"
          color="green"
          icon={<ClipboardList />}
        />
        <StatCard
          title="Upcoming Today"
          value="12"
          status="Normal"
          color="orange"
          icon={<Clock />}
        />
        <StatCard
          title="Overdue"
          value="3"
          status="Next 7 Days"
          color="red"
          icon={<AlertTriangle />}
        />
        <StatCard
          title="Upcoming Tasks"
          value="12"
          status="Next 7 Days"
          color="yellow"
          icon={<Calendar />}
        />
        <StatCard
          title="Completed Actions"
          value="45"
          status="Immediate Action"
          color="red"
          icon={<CheckCircle />}
        />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Asset Register */}
        <Card title="Asset Register">
          <Table
            headers={["Item Name", "Qty", "Interval", "Completed", "Pending", "Status"]}
            rows={[
              ["AHU-1 B", "5", "5 OM", "108", "15", "Active"],
              ["Generator", "8", "5 OM", "108", "15", "Active"],
              ["Pump Filter Service", "15", "5 OM", "108", "15", "Active"],
              ["HVAC", "18", "5 OM", "108", "25", "Active"],
            ]}
          />
        </Card>

        {/* Maintenance Calendar */}
        <Card title="Maintenance Calendar View">
          <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-600">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className={`h-10 flex items-center justify-center rounded-lg border ${
                  i === 10
                    ? "bg-orange-100 border-orange-300 text-orange-700 font-semibold"
                    : "bg-white"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </Card>

        {/* Task Details */}
        <Card title="Task Details">
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-gray-800">
                AHU-1 B – Filter Replacement
              </p>
              <p className="text-gray-500">
                Replace filters and inspect airflow efficiency
              </p>
            </div>

            <ul className="space-y-2">
              <ChecklistItem text="Asset Status Verified" />
              <ChecklistItem text="Filters Checked" />
              <ChecklistItem text="Installed New Filters" />
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              <Button variant="green" icon={<CheckCircle size={16} />}>
                Mark as Completed
              </Button>
              <Button variant="blue" icon={<MessageSquare size={16} />}>
                Add Remarks
              </Button>
              <Button variant="gray" icon={<Upload size={16} />}>
                Upload Support
              </Button>
              <Button variant="outline" icon={<Edit3 size={16} />}>
                Edit
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Task List */}
      <Card title="Maintenance Task List">
        <Table
          headers={["Item", "Task", "Frequency", "Status", "Due"]}
          rows={[
            ["AHU-1 B", "Inspection", "Monthly", "OK", "11"],
            ["HVAC Filter", "Replacement", "Quarterly", "Due", "18"],
            ["Pump P-5", "Check", "Monthly", "Overdue", "16"],
          ]}
        />
      </Card>

    </div>
  );
}

/* -------------------- Components -------------------- */

type StatProps = {
  title: string;
  value: string;
  status: string;
  color: "green" | "orange" | "red" | "yellow";
  icon: React.ReactNode;
};

function StatCard({ title, value, status, color, icon }: StatProps) {
  const styles: Record<string, string> = {
    green: "bg-green-100 text-green-700",
    orange: "bg-orange-100 text-orange-700",
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${styles[color]}`}>
          {icon}
        </div>
        <div>
          <p className="text-xs text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
      <span
        className={`inline-block mt-4 px-3 py-1 rounded-full text-xs font-medium ${styles[color]}`}
      >
        {status}
      </span>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">
      <h3 className="font-semibold text-gray-800 mb-4">{title}</h3>
      {children}
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            {headers.map((h) => (
              <th key={h} className="pb-2 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="py-2 text-gray-700">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <span className="p-1 rounded-full bg-green-100 text-green-700">
        <Check size={14} />
      </span>
      {text}
    </div>
  );
}

function Button({
  children,
  icon,
  variant = "green",
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "green" | "blue" | "gray" | "outline";
}) {
  const styles: Record<string, string> = {
    green: "bg-green-600 text-white",
    blue: "bg-blue-600 text-white",
    gray: "bg-gray-200 text-gray-700",
    outline: "border border-gray-300 text-gray-700",
  };

  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${styles[variant]}`}
    >
      {icon}
      {children}
    </button>
  );
}
