import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';

  };

  return (
    <aside className='dnd-container' >
      <div className="dndnode blobNodeVert" onDragStart={(event) => onDragStart(event, 'blobNodeVert')} draggable></div>
      <div className="dndnode blobNodeRose" onDragStart={(event) => onDragStart(event, 'blobNodeRose')} draggable></div>
      <div className="dndnode blobNodeJaune" onDragStart={(event) => onDragStart(event, 'blobNodeJaune')} draggable></div>
      <div className="dndnode blobNodeMauve" onDragStart={(event) => onDragStart(event, 'blobNodeMauve')} draggable></div>
    </aside>
  );
};