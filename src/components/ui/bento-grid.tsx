import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  url,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  url?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition-all duration-300",
        "glass dark:glass-dark",
        "hover:scale-[1.02] hover:border-blue-500/50 dark:hover:border-blue-400/50",
        "border border-gray-200/50 dark:border-gray-700/50",
        "p-6 flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-300">
        <div className="flex items-start space-x-4">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2">
            {icon}
          </div>
          <div className="flex-1">
            <div className="font-sans font-bold text-lg text-gradient mb-2">
              {title}
            </div>
            <div className="font-sans font-normal text-sm text-gray-600 dark:text-gray-300">
              {description}
            </div>
          </div>
        </div>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 text-sm mt-4 inline-flex items-center group"
          >
            Visit Website
            <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        )}
      </div>
    </div>
  );
}; 