import ChangePage from "../../Components/ChangePage/ChangePage";
import Instruction from "../../Components/UI/Instruction";
import "./Ingeniosite.scss";
import NodeIngeniosite from "./NodeIngeniosite";

import { useState, useCallback } from "react";

import ReactFlow, { applyEdgeChanges, applyNodeChanges, addEdge } from "reactflow";
import "reactflow/dist/style.css";

const Ingeniosite = ({ isDown }) => {

  const nodeTypes = {
    ingeniositeNode: NodeIngeniosite,
  };

  const initialNodes = [
    { id: "1", position: { x: 0, y: 0 }, type: "input" },
    { id: "2", position: { x: 0, y: 100 }, type: "input" },
    { id: "3", position: { x: 100, y: 100 }, type: "input" },
    { id: "4", position: { x: 200, y: 100 }, type: "input" },
    { id: "5", position: { x: 300, y: 100 }, type: "input" },
    { id: "6", position: { x: 400, y: 100 }, type: "input" },
    {
      id: "output",
      type: "ingeniositeNode",
      position: { x: 250, y: 300 },
      style: {width: 1110, height: 200, background: "red"},
      connectable: true,
    },
  ];
  const initialEdges = [];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds)),
    []
  );

    // Mettre le edge dans le centre du o de ingeniosite

  return (
    <div className="ingeniosite-container">
      {/* <ChangePage isDown={isDown} /> */}
      {/* <h1 className="ingeniosite-titre">Ingeniosité</h1> */}
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          // zoomOnScroll={false}
          // panOnDrag={false}
          zoomOnDoubleClick={false}
          nodeTypes={nodeTypes}
        />
      </div>
      {/* <Instruction texte={"Maintenez la barre d'espacement enfoncée"} delais={120000} delaisOut={30000}/> */}
    </div>
  );
};

export default Ingeniosite;
