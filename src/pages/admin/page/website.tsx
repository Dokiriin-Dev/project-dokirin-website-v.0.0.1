import DashboardLayout from "@/components/adminPanel/adminLayout";
import WebsiteServicePage from "@/pages/services/website";

export default function services() {
  return (
    <DashboardLayout>
      <WebsiteServicePage />
    </DashboardLayout>
  );
}
