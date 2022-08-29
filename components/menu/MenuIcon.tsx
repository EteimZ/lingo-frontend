import React from "react";

type Props = {
  className?: any;
};

const MenuIcon: React.FC<Props> = ({ className }) => {
  return (
    <div>
      <svg
        width="3"
        height="15"
        viewBox="0 0 3 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 0.75C1.91421 0.75 2.25 1.08579 2.25 1.5C2.25 1.91421 1.91421 2.25 1.5 2.25C1.08579 2.25 0.75 1.91421 0.750001 1.5C0.750001 1.08579 1.08579 0.75 1.5 0.75ZM1.5 6.75C1.91421 6.75 2.25 7.08579 2.25 7.5C2.25 7.91421 1.91421 8.25 1.5 8.25C1.08579 8.25 0.75 7.91421 0.75 7.5C0.75 7.08579 1.08579 6.75 1.5 6.75ZM1.5 12.75C1.91421 12.75 2.25 13.0858 2.25 13.5C2.25 13.9142 1.91421 14.25 1.5 14.25C1.08579 14.25 0.75 13.9142 0.75 13.5C0.75 13.0858 1.08579 12.75 1.5 12.75Z"
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export default MenuIcon;
