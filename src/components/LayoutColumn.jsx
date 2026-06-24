import React from "react";

const LayoutColumn = ({ children, style, className = "", ...props }) => (
  <div
    className={className}
    style={{
      boxSizing: "border-box",
      minWidth: 0,
      ...(style || {}),
    }}
    {...props}
  >
    {children}
  </div>
);

export default LayoutColumn;
