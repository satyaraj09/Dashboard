"use client";

import { useEffect, useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import DataTable from "@/components/data-table";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const SkeletonTable = () => {
  return (
    <div className="flex flex-col gap-4 animate-pulse">
      <div className="h-8 w-1/4 bg-gray-300 rounded" />
      <div className="space-y-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="h-6 w-1/5 bg-gray-200 rounded" />
            <div className="h-6 w-1/4 bg-gray-200 rounded" />
            <div className="h-6 w-1/6 bg-gray-200 rounded" />
            <div className="h-6 w-1/5 bg-gray-200 rounded" />
            <div className="h-6 w-24 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500); // 1.5 sec delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-gray-200">
        <div className="relative flex flex-1 flex-col gap-4 p-4 my-8 mx-4 bg-white rounded-sm">
          <SidebarTrigger
            size={"lg"}
            className="absolute top-1 left-1 bg-gray-200"
          />
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold">Articles</h1>
          </div>
          {loading ? <SkeletonTable /> : <DataTable />}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Dashboard;
