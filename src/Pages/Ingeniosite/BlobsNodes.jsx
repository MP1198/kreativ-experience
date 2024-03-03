import React, { memo, useEffect, useState } from "react";
import { Handle } from "reactflow";

export default memo(({ isConnectable }) => {
    
  return (
    <>
      <div className="node-blob"> </div>
      <Handle
        type="source"
        id="inputHandle"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          width: 20,
          height: 20,
          borderRadius: "50%",
          opasity: 0.5,
        }}
        isConnectable={isConnectable}
      />
    </>
  );
});
