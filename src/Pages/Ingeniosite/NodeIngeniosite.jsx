import React, { memo } from "react";
import { Handle} from "reactflow";

export default memo(({ isConnectable }) => {
  return (
    <>
      <div className="node-ingeniosite"> Ingéniosité </div>
      <Handle
        type="target"
        id="outputHandle"
        style={{ left: 645, bottom: 94}}
        isConnectable={isConnectable}
      />
    </>
  );
});