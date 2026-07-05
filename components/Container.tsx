import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

// Centered, padded content wrapper used across the site.
export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
