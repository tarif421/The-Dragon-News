import React from "react";
import swimingimg from "./../assets/swimming.png";
import clsssimg from "./../assets/class.png";
import playground from "./../assets/playground.png";
const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className="space-y-5">
        <img src={swimingimg} alt="" />
        <img src={clsssimg} alt="" />
        <img src={playground} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
