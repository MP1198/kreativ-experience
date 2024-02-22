
import "./ReactiveDots.scss";

import React, { useRef, useEffect } from 'react';

const SENSITIVITY = 90;
const SIBLINGS_LIMIT = 10;
const DENSITY = 60;
const ANCHOR_LENGTH = 20;
const MOUSE_RADIUS = 200;

const ReactiveDots = () => {
  const canvasRef = useRef(null);
  const nodes = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeWindow = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const mousemoveHandler = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const calcDistance = (node1, node2) => {
      return Math.sqrt(Math.pow(node1.x - node2.x, 2) + (Math.pow(node1.y - node2.y, 2)));
    };

    const Node = (x, y) => {
      return {
        anchorX: x,
        anchorY: y,
        x: Math.random() * (x - (x - ANCHOR_LENGTH)) + (x - ANCHOR_LENGTH),
        y: Math.random() * (y - (y - ANCHOR_LENGTH)) + (y - ANCHOR_LENGTH),
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        energy: Math.random() * 100,
        radius: Math.random(),
        siblings: [],
        brightness: 0
      };
    };

    const initNodes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.current = [];
      for (let i = DENSITY; i < canvas.width; i += DENSITY) {
        for (let j = DENSITY; j < canvas.height; j += DENSITY) {
          nodes.current.push(Node(i, j));
        }
      }
    };

    const findSiblings = () => {
      for (let i = 0; i < nodes.current.length; i++) {
        const node1 = nodes.current[i];
        node1.siblings = [];
        for (let j = 0; j < nodes.current.length; j++) {
          const node2 = nodes.current[j];
          if (node1 !== node2) {
            const distance = calcDistance(node1, node2);
            if (distance < SENSITIVITY) {
              if (node1.siblings.length < SIBLINGS_LIMIT) {
                node1.siblings.push(node2);
              } else {
                let node_sibling_distance = 0;
                let max_distance = 0;
                let s;
                for (let k = 0; k < SIBLINGS_LIMIT; k++) {
                  node_sibling_distance = calcDistance(node1, node1.siblings[k]);
                  if (node_sibling_distance > max_distance) {
                    max_distance = node_sibling_distance;
                    s = k;
                  }
                }
                if (distance < max_distance) {
                  node1.siblings.splice(s, 1);
                  node1.siblings.push(node2);
                }
              }
            }
          }
        }
      }
    };

    const redrawScene = () => {
      resizeWindow();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      findSiblings();
      for (let i = 0; i < nodes.current.length; i++) {
        const node = nodes.current[i];
        const distance = calcDistance({ x: mouse.x, y: mouse.y }, node);
        node.brightness = (distance < MOUSE_RADIUS) ? 1 - distance / MOUSE_RADIUS : 0;
      }
      for (let i = 0; i < nodes.current.length; i++) {
        const node = nodes.current[i];
        if (node.brightness) {
          drawNode(node);
          drawConnections(node);
        }
        moveNode(node);
      }
      requestAnimationFrame(redrawScene);
    };

    const drawNode = (node) => {
      const color = `rgba(244, 244, 244, ${node.brightness})`;
      ctx.beginPath();
      ctx.arc(node.x, node.y, 2 * node.radius + 2 * node.siblings.length / SIBLINGS_LIMIT, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    };

    const drawConnections = (node) => {
      for (let i = 0; i < node.siblings.length; i++) {
        const sibling = node.siblings[i];
        const color = `rgba(222, 222, 222, ${node.brightness})`;
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(sibling.x, sibling.y);
        ctx.lineWidth = 1 - calcDistance(node, sibling) / SENSITIVITY;
        ctx.strokeStyle = color;
        ctx.stroke();
      }
    };

    const moveNode = (node) => {
      node.energy -= 1;
      if (node.energy < 1) {
        node.energy = Math.random() * 100;
        if (node.x - node.anchorX < -ANCHOR_LENGTH) {
          node.vx = Math.random() * 2;
        } else if (node.x - node.anchorX > ANCHOR_LENGTH) {
          node.vx = Math.random() * -2;
        } else {
          node.vx = Math.random() * 4 - 2;
        }
        if (node.y - node.anchorY < -ANCHOR_LENGTH) {
          node.vy = Math.random() * 2;
        } else if (node.y - node.anchorY > ANCHOR_LENGTH) {
          node.vy = Math.random() * -2;
        } else {
          node.vy = Math.random() * 4 - 2;
        }
      }
      node.x += node.vx * node.energy / 100;
      node.y += node.vy * node.energy / 100;
    };

    window.addEventListener('resize', resizeWindow);
    canvas.addEventListener('mousemove', mousemoveHandler);

    initNodes();
    redrawScene();

    return () => {
      window.removeEventListener('resize', resizeWindow);
      canvas.removeEventListener('mousemove', mousemoveHandler);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};



export default ReactiveDots;