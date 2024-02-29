import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Ingeniosite.scss";

import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

const Ingeniosite = ({isDown}) => {
  const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
  
  return (
    <div className="ingeniosite-container">
      <ChangePage isDown={isDown}/>
      <h1 className="ingeniosite-titre">Ingeniosité</h1>
      <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
    </div>
  );
};

export default Ingeniosite;