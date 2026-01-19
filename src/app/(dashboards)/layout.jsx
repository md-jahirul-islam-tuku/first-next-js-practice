import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-3">User List</div>
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
}
