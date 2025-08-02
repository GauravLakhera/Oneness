// components/CustomIcon.jsx
import React from 'react';

const CustomIcon = ({ 
  width = 120, 
  height = 120, 
  strokeColor = "black", 
  strokeWidth = 1.5,
  className = "",
  ...props 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 120 120" 
      fill="none"
      className={className}
      {...props}
    >
      <mask 
        id="mask0_8295_5250" 
        style={{maskType: "luminance"}} 
        maskUnits="userSpaceOnUse" 
        x="0" 
        y="0" 
        width="119" 
        height="119"
      >
        <path 
          d="M118.435 0.226562H0.125V118.536H118.435V0.226562Z" 
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_8295_5250)">
        <path 
          d="M22.7434 76.4439C32.9581 76.4439 41.2388 68.1632 41.2388 57.9485C41.2388 47.7338 32.9581 39.4531 22.7434 39.4531C12.5287 39.4531 4.24805 47.7338 4.24805 57.9485C4.24805 68.1632 12.5287 76.4439 22.7434 76.4439Z" 
          stroke={strokeColor} 
          strokeWidth={strokeWidth}
        />
        <path 
          d="M81.684 14.3281H60.4053V101.586H81.684" 
          stroke={strokeColor} 
          strokeWidth={strokeWidth}
        />
        <path 
          d="M96.2723 31.1109C104.329 31.1109 110.86 24.6257 110.86 16.6258C110.86 8.62584 104.329 2.14062 96.2723 2.14062C88.2157 2.14062 81.6846 8.62584 81.6846 16.6258C81.6846 24.6257 88.2157 31.1109 96.2723 31.1109Z" 
          stroke={strokeColor} 
          strokeWidth={strokeWidth}
        />
        <path 
          d="M96.2723 72.439C104.329 72.439 110.86 65.9538 110.86 57.9539C110.86 49.954 104.329 43.4688 96.2723 43.4688C88.2157 43.4688 81.6846 49.954 81.6846 57.9539C81.6846 65.9538 88.2157 72.439 96.2723 72.439Z" 
          stroke={strokeColor} 
          strokeWidth={strokeWidth}
        />
        <path 
          d="M96.2723 113.767C104.329 113.767 110.86 107.282 110.86 99.282C110.86 91.2821 104.329 84.7969 96.2723 84.7969C88.2157 84.7969 81.6846 91.2821 81.6846 99.282C81.6846 107.282 88.2157 113.767 96.2723 113.767Z" 
          stroke={strokeColor} 
          strokeWidth={strokeWidth}
        />
        <path 
          d="M41.2393 56.6875H81.6838" 
          stroke={strokeColor} 
          strokeWidth={strokeWidth}
        />
      </g>
    </svg>
  );
};

export default CustomIcon;
