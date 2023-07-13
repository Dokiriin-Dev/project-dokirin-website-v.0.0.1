import * as React from "react";

import classNames from "classnames";
import { bgColors } from "@/context/colors";
import { useMemo } from "react";

export type Border = "none" | "full" | "boxed";

interface HRProps {
  boxed?: boolean;
}

const HR: React.FC<HRProps> = ({ boxed = false }) => {
  if (boxed) {
    return (
      <div className="sm:w-11/12 xl:w-9/12 mx-auto px-6 md:px-12">
        <hr className="border-gray-900 border-opacity-10 dark:border-gray-700" />
      </div>
    );
  }
  return (
    <hr className="border-gray-900 border-opacity-10 dark:border-gray-700" />
  );
};

interface SectionProps {
  bg?: { color: string; className: string };
  borderTop?: Border;
  borderBottom?: Border;
  className?: string;
  style?: any;
  children?: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  bg = bgColors.white.value,
  borderTop = "none",
  borderBottom = "none",
  className = "",
  style = "",
  id,
  children,
}) => {
  const bgColor = bg.className;

  return (
    <section
      id={id}
      className={classNames(
        bgColor,
        className,
        style,
        "overflow-hidden text-gray-700 body-font relative shadow-inherit drop-shadow-2xl pt-pb-14 pb-14 border-t border-cyan-400/30"
      )}
    >
      {borderTop !== "none" && <HR boxed={borderTop === "boxed"} />}
      {children}
      {borderBottom !== "none" && <HR boxed={borderBottom === "boxed"} />}
    </section>
  );
};

export default Section;
