import DashboardLayout from "@/components/adminPanel/adminLayout";
import HomePage from "@/pages";
import React from "react";

export default function Home() {
  return (
    <DashboardLayout>
      <HomePage />
    </DashboardLayout>
  );
}
