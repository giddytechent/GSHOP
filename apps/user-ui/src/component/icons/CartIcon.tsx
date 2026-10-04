import type { SVGProps } from "react";

interface CartIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export default function CartIcon({
  size = 24,
  className,
  ...props
}: CartIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <circle cx="9" cy="20" r="1" />
      <circle cx="19" cy="20" r="1" />

      <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6" />
    </svg>
  );
}