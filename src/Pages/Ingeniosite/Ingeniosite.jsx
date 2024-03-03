import ChangePage from "../../Components/ChangePage/ChangePage";
import Instruction from "../../Components/UI/Instruction";
import "./Ingeniosite.scss";
import NodeIngeniosite from "./NodeIngeniosite";
import BlobsNodes from "./BlobsNodes";
import Dragable from "./Dragable";

import { useState, useCallback, useRef } from "react";

import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  Background
} from "reactflow";
import "reactflow/dist/style.css";




const Ingeniosite = ({ isDown }) => {
  
  const initialNodes = [
    { id: "1", position: { x: 0, y: 0 }, type: "blobNode",},
    { id: "2", position: { x: 0, y: 100 }, type: "blobNode", },
    { id: "3", position: { x: 100, y: 100 }, type: "blobNode", },
    { id: "4", position: { x: 200, y: 100 }, type: "blobNode", },
    { id: "5", position: { x: 300, y: 100 }, type: "blobNode", },
    { id: "6", position: { x: 400, y: 100 }, type: "blobNode", },
    {
      id: "output",
      type: "ingeniositeNode",
      position: { x: 250, y: 300 },
      style: { width: 1110, height: 200 },
      connectable: true,
    },
  ];


  const nodeTypes = {
    ingeniositeNode: NodeIngeniosite,
    blobNode: BlobsNodes,
  };
  const initialEdges = [];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const reactFlowWrapper = useRef();
  let id = 0;
  const getId = () => `dndnode_${id++}`;

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );

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
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            animated: true,
            style: { stroke: "#49ff18", strokeWidth: 3 },
            type: "straight",
          },
          eds
        )
      ),
    []
  );

  return (
    <div className="ingeniosite-container">
      <ChangePage isDown={isDown} />
      <div style={{ width: "100vw", height: "100vh" }} ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          zoomOnDoubleClick={false}
          nodeTypes={nodeTypes}

          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}

          
        />
      </div>
      <Dragable />
      {/* <Instruction texte={"Maintenez la barre d'espacement enfoncée"} delais={120000} delaisOut={30000}/> */}
    </div>
  );
};

export default Ingeniosite;
