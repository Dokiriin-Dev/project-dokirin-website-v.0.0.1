import AdminLayout from "@/components/adminPanel/adminLayout";
import Section from "@/components/layout/Section";
import classNames from "classnames";

export default function index() {
  return (
    <AdminLayout>
      <Section>
        <div className="p-1 w-full h-1"></div>
      </Section>
    </AdminLayout>
  );
}
