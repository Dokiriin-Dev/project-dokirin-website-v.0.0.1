import DashboardLayout from "@/components/adminPanel/adminLayout";
import ServicesPage from "@/pages/services";
import React from "react";

export default function services() {
  return (
    <DashboardLayout>
      <ServicesPage />
    </DashboardLayout>
  );
}
