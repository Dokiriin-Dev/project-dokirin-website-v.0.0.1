import AdminLayout from "@/components/adminPanel/adminLayout";
import Section from "@/components/layout/Section";
import React from "react";

export default function Index() {
  return (
    <AdminLayout>
      <Section>
        <div className="p-1 w-full h-1">Index</div>
      </Section>
    </AdminLayout>
  );
}
