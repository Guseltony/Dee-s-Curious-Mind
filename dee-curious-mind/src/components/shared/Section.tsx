import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "light";
}

export default function Section({
  children,
  id,
  className,
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={twMerge(
        clsx(
          "py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 w-full transition-colors duration-300",
          {
            "bg-white": background === "white",
            "bg-bg-light": background === "light",
          }
        ),
        className
      )}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}
