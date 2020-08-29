import React from "react";

const ClearBtn = (props) => {
  return (
    <div className="clearBtn" onClick={props.handleClear}>
      {props.children}
    </div>
  );
};

export default ClearBtn;
