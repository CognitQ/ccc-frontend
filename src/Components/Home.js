import React from "react";

export const Home = ({ show }) => {
  return (
    <div>
      <div>
        {show ? (
          //   code for deployment
          <div>deployment</div>
        ) : (
          //   code for demonset
          <div>demonset</div>
        )}
      </div>
    </div>
  );
};
