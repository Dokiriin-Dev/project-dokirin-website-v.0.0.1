import DashboardLayout from "@/components/adminPanel/adminLayout";
import Section from "@/components/layout/Section";
import classNames from "classnames";
import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <DashboardLayout>
      <Section className={classNames("")}>
        {/* <div className="p-1 w-full h-1"></div> */}
        <div>Ciao</div>
      </Section>
    </DashboardLayout>
  );
}
