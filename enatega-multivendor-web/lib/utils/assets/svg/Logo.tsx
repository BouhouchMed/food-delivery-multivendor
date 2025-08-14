import React from "react";

interface LogoProps {
  className?: string;
}

const FoodDeliveryLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // الكود الأصلي للـ SVG
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="203"
    height="48"
    viewBox="0 0 152.25 36.000001"
    preserveAspectRatio="xMidYMid meet"
    className={className}
  ></svg>
);

export default FoodDeliveryLogo;
