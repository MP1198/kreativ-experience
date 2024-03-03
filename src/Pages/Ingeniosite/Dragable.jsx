import React from "react";


export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };



  return (
    <aside className="dnd-container">
      <div
        className="dndnode blobNode"
        onDragStart={(event) => onDragStart(event, "blobNode")}
        draggable
        style={{width:50, height:50}}
      ></div>
    </aside>
  );
};
