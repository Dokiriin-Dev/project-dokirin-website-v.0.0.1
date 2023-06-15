import ContactPage from "@/app/contacts/page";
import AdminLayout from "@/components/adminPanel/adminLayout";
import React from "react";

export default function contacts() {
  return (
    <AdminLayout>
      <ContactPage />
    </AdminLayout>
  );
}
