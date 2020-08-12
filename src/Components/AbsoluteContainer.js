import React from "react";

const AbsoluteContainer = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AbsoluteContainer;
