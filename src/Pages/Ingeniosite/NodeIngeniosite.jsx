import React, { memo } from "react";
import { Handle } from "reactflow";

export default memo(({ isConnectable }) => {
  return (
    <>
      <div className="node-ingeniosite"> Ingéniosité </div>
      <Handle
        type="target"
        id="outputHandle"
        style={{
          position: "absolute",
          left: 649,
          top: 93,
          backgroundColor: "white",
          width: 20,
          height: 20,
          borderRadius: "50%",
        }}
        isConnectable={isConnectable}
      />
    </>
  );
});
