import './globals.css'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Dashboard</title>
      </head>
      <body>
        {/* Layout wrapper */}
        <div>{children}</div>
      </body>
    </html>
  );
}

