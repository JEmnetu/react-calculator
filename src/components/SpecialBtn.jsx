import React from "react";

const SpecialBtn = (props) => {
  return (
    <div className="button-wrapper special-btn" onClick={props.handleClick}>
      {props.children}
    </div>
  );
};

export default SpecialBtn;
