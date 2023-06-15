import AboutPage from "@/app/about/page";
import AdminLayout from "@/components/adminPanel/adminLayout";
import React from "react";

export default function about() {
  return (
    <AdminLayout>
      <AboutPage />
    </AdminLayout>
  );
}
