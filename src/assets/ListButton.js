import React from "react";


const ListButton = () => {
  return (
      <svg
      style={{ display:"block", margin: 'auto' }}
        width="2vh"
        height="2vh"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" width="15" height="3" fill="#FFFAFF" />
        <rect width="3" height="3" fill="#FFFAFF" />
        <rect x="5" y="15" width="15" height="3" fill="#FFFAFF" />
        <rect y="15" width="3" height="3" fill="#FFFAFF" />
        <rect x="5" y="10" width="15" height="3" fill="#FFFAFF" />
        <rect y="10" width="3" height="3" fill="#FFFAFF" />
        <rect x="5" y="5" width="15" height="3" fill="#FFFAFF" />
        <rect y="5" width="3" height="3" fill="#FFFAFF" />
      </svg>
  );
};

export default ListButton;
