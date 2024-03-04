import "./ClickParticules.scss";

import React, { useEffect, useRef } from "react";
import anime from "animejs";

const ClickParticules = () => {
  const containerRef = useRef(null);
  let pointerX = 0;
  let pointerY = 0;
  const numberOfParticules = 30;
  const tap = "ontouchstart" in window || navigator.msMaxTouchPoints ? "touchstart" : "mousedown";
  const colors = ["#0f0", "#ff0", "#f00", "#f0f","#0ff"];

  useEffect(() => {
    const container = containerRef.current;
    const ctx = container ? container.getContext("2d") : null;

    function setContainerSize() {
      container.width = window.innerWidth * 2;
      container.height = window.innerHeight * 2;
      container.style.width = window.innerWidth + "px";
      container.style.height = window.innerHeight + "px";
      container.getContext("2d").scale(2, 2);
    }

    function updateCoords(e) {
      pointerX = e.clientX || e.touches[0].clientX;
      pointerY = e.clientY || e.touches[0].clientY;
    }

    function setParticuleDirection(p) {
      const angle = anime.random(0, 360) * Math.PI / 180;
      const value = anime.random(50, 180);
      const radius = [-1, 1][anime.random(0, 1)] * value;
      return {
        x: p.x + radius * Math.cos(angle),
        y: p.y + radius * Math.sin(angle),
      };
    }

    function createParticule(x, y) {
      const p = {};
      p.x = x;
      p.y = y;
      p.color = colors[anime.random(0, colors.length - 1)];
      p.radius = anime.random(16, 32);
      p.endPos = setParticuleDirection(p);
      p.draw = function () {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = p.color;
        ctx.fill();
      };
      return p;
    }

    function createCircle(x, y) {
      const p = {};
      p.x = x;
      p.y = y;
      p.color = "#FFF";
      p.radius = 0.1;
      p.alpha = 0.5;
      p.lineWidth = 6;
      p.draw = function () {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.lineWidth = p.lineWidth;
        ctx.strokeStyle = p.color;
        ctx.stroke();
        ctx.globalAlpha = 1;
      };
      return p;
    }

    function renderParticule(anim) {
      for (let i = 0; i < anim.animatables.length; i++) {
        anim.animatables[i].target.draw();
      }
    }

    function animateParticules(x, y) {
        const circle = createCircle(x, y);
        const particules = [];
        for (let i = 0; i < numberOfParticules; i++) {
          particules.push(createParticule(x, y));
        }
        
        animateParticulesOnly(particules);
        animateCircleOnly(circle);
      }
      
      function animateParticulesOnly(particules) {
        anime.timeline().add({
          targets: particules,
          x: (p) => p.endPos.x,
          y: (p) => p.endPos.y,
          radius: 0.1,
          duration: anime.random(1200, 1800),
          easing: "easeOutExpo",
          update: renderParticule,
        });
      }
      
      function animateCircleOnly(circle) {
        anime.timeline().add({
          targets: circle,
          radius: anime.random(80, 160),
          lineWidth: 0,
          alpha: {
            value: 0,
            easing: "linear",
            duration: anime.random(600, 800),
          },
          duration: anime.random(1200, 1800),
          easing: "easeOutExpo",
          update: renderParticule,
          offset: 0,
        });
      }
      

    const render = anime({
      duration: Infinity,
      update: function () {
        ctx.clearRect(0, 0, container.width, container.height);
      },
    });

    document.addEventListener(tap, function (e) {
      window.human = true;
      render.play();
      updateCoords(e);
      animateParticules(pointerX, pointerY);
    });

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    function autoClick() {
      if (window.human) return;
      animateParticules(anime.random(centerX - 50, centerX + 50), anime.random(centerY - 50, centerY + 50));
      anime({ duration: 200 }).finished.then(autoClick);
    }

    autoClick();
    setContainerSize();
    window.addEventListener("resize", setContainerSize);

    return () => {
      document.removeEventListener(tap, function (e) {
        window.human = true;
        render.play();
        updateCoords(e);
        animateParticules(pointerX, pointerY);
      });
      window.removeEventListener("resize", setContainerSize);
    };
  }, []);

  return <div className="particules-container" ref={containerRef}></div>;
};

export default ClickParticules;
