import DashboardLayout from "@/components/adminPanel/adminLayout";
import ContactPage from "@/pages/contacts";
import React from "react";

export default function contacts() {
  return (
    <DashboardLayout>
      <ContactPage />
    </DashboardLayout>
  );
}
