import React from "react";

// A small mark evoking a sliding carousel: overlapping angled cards with a
// forward chevron, hinting at "next slide" motion.
function Logo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f59e0b" />
          <stop offset="1" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <g transform="translate(32,33)">
        <rect x="-22" y="-16" width="22" height="30" rx="4" fill="#374151" transform="rotate(-16)" />
        <rect x="-11" y="-17" width="22" height="32" rx="4" fill="#6b7280" transform="rotate(-4)" />
        <rect x="-11" y="-18" width="24" height="34" rx="4" fill="url(#logo-g1)" />
        <path
          d="M2 -6 L10 0 L2 6"
          fill="none"
          stroke="#111827"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default Logo;
