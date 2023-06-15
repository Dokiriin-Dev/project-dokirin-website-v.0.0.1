import HomePage from "@/app/page";
import AdminLayout from "@/components/adminPanel/adminLayout";
import React from "react";

export default function Home() {
  return (
    <AdminLayout>
      <HomePage />
    </AdminLayout>
  );
}
