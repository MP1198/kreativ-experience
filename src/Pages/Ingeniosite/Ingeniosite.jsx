import ChangePage from "../../Components/ChangePage/ChangePage";
import Instruction from "../../Components/UI/Instruction";
import "./Ingeniosite.scss";
import NodeIngeniosite from "./NodeIngeniosite";
import BlobsNodes from "./BlobsNodes";
import Dragable from "./Dragable";

import { useState, useCallback, useRef, useEffect } from "react";

import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

const Ingeniosite = ({ isDown }) => {
  const initialNodes = [
    {
      id: "output",
      type: "ingeniositeNode",
      position: { x: 300, y: 300 },
      style: { width: 1110, height: 200, textShadow: "0 0 0px rgba(0, 0, 0, 0)"},
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
    event.dataTransfer.dropEffect = "move";
  }, []);

  const [blobColors, setBlobColors] = useState({});
  const randomColor = () => {
    const couleursBlobs = [
      "#ff1cc0",
      "#b131fa",
      "#4a0074",
      "#1c3aff",
    ];
    const randomIndex = Math.floor(Math.random() * couleursBlobs.length);
    return couleursBlobs[randomIndex];
  };

  const randomStyle = (color) => {
    const diameter = Math.random() * (175 - 50 + 1) + 50;
    return {
      width: diameter,
      height: diameter,
      background: `radial-gradient(circle at center, #FFFFFF 0%, ${color} 100%)`,
      boxShadow: `0 0 5px ${color}, 0 0 10px ${color}, 0px 0px 29px 5px ${color}`,
    };
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const color = randomColor();
      const type = event.dataTransfer.getData("application/reactflow");

      if (!type) {
        return;
      }

      const position = reactFlowInstance?.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position: position || { x: 0, y: 0 },
        data: { label: `${type} node` },
        style: randomStyle(color),
      };

      setNodes((prevNodes) => [...prevNodes, newNode]);
      setBlobColors((prevColors) => ({ ...prevColors, [newNode.id]: color }));
    },
    [reactFlowInstance]
  );

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = (params) => {
    const sourceColor = blobColors[params.source] || 'white';
    const connectedNodeIds = [params.source, params.target];
    const connectedNodeColors = connectedNodeIds.map((id) => blobColors[id] || 'white');

    const edgeStyle = {
      stroke: sourceColor,
      strokeWidth: 3,
    };

    const newEdge = {
      ...params,
      animated: true,
      type: "straight",
      style: edgeStyle,
      id: `${params.source}-${params.target}`,
    };

    setEdges((prevEdges) => [...prevEdges, newEdge]);
    updateTextShadow(connectedNodeColors);
  };
  
  const updateTextShadow = (colors) => {
    const outputNodeIndex = nodes.findIndex((node) => node.id === "output");
    if (outputNodeIndex === -1) return;
  
    const existingShadows = nodes[outputNodeIndex].style.textShadow || '';
    const filteredShadows = existingShadows.split(',').map(shadow => shadow.trim()).filter(shadow => {
      const color = shadow.split(' ').pop();
      return color !== 'white' && !shadow.startsWith('0 0 0px rbga(0, 0, 0, 0)');
    });
  
    let newShadows = [...filteredShadows];
  
    for (let i = 0; i < colors.length; i++) {
      const color = colors[i];
      if (color !== 'white') {
        const blurRadius = (filteredShadows.length + i + 1) * 5;
        const shadow = `0 0 ${blurRadius}px ${color}`;
        newShadows.push(shadow);
      }
    }
  
    const newTextShadow = newShadows.join(', ');
    console.log(newTextShadow);
  
    setNodes((prevNodes) => {
      const newNodes = [...prevNodes];
      newNodes[outputNodeIndex] = {
        ...newNodes[outputNodeIndex],
        style: {
          ...newNodes[outputNodeIndex].style,
          textShadow: newTextShadow,
        },
      };
      return newNodes;
    });
  };

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
      <Instruction
        texte={
          <>
            Drag and drop des cercles,
            <br /> 
            puis connecter les au cercle central
          </>
        }
        delais={1000}
        delaisOut={30000}
      />
    </div>
  );
};
export default Ingeniosite;
