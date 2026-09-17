"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StructuredDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapeRef = useRef('grid'); 
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false }); 
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const numParticles = width < 768 ? 350 : 800; 
    let particles: Particle[] = [];
    let rotation = 0;
    const startTime = Date.now();

    const checkScroll = () => {
      let sTop = window.scrollY || document.documentElement.scrollTop;
      if (sTop === 0) {
        const main = document.querySelector('main');
        if (main && main.scrollTop > 0) sTop = main.scrollTop;
      }
      let sHeight = document.documentElement.scrollHeight;
      let cHeight = window.innerHeight;
      let maxScroll = sHeight - cHeight;
      let percent = maxScroll > 0 ? sTop / maxScroll : 0;
      shapeRef.current = percent < 0.05 ? 'grid' : 'sphere';   
    };

    class Particle {
      x: number; y: number; z: number;
      baseSize: number; size: number; opacity: number;
      targets: { grid: { x: number, y: number, z: number }, sphere: { x: number, y: number, z: number } };

      constructor(index: number, total: number) {
        let aspect = width / height;
        let cols = Math.floor(Math.sqrt(total * aspect));
        let rows = Math.floor(total / cols);
        let c = index % cols; let r = Math.floor(index / cols);
        let spacingX = width / cols; let spacingY = height / rows;
        let gridX = (c * spacingX) - (width / 2) + (spacingX / 2);
        let gridY = (r * spacingY) - (height / 2) + (spacingY / 2);
        let phi = Math.acos(-1 + (2 * index) / total);
        let theta = Math.sqrt(total * Math.PI) * phi;
        let sphereRadius = width > 768 ? 350 : 200; 
        let sX = sphereRadius * Math.cos(theta) * Math.sin(phi);
        let sY = sphereRadius * Math.sin(theta) * Math.sin(phi);
        let sZ = sphereRadius * Math.cos(phi);

        this.targets = { grid: { x: gridX, y: gridY, z: 0 }, sphere: { x: sX, y: sY, z: sZ } };
        
        // 🟢 FIX: Spawns directly into the perfect grid instead of the center
        this.x = gridX + width / 2; 
        this.y = gridY + height / 2; 
        this.z = 0;
        
        this.baseSize = Math.random() * 1.0 + 1.0; 
        this.size = this.baseSize; this.opacity = 0; 
      }

      update(currentShape: string, rot: number, mX: number, mY: number, elapsed: number) {
        const isLogoPhase = elapsed < 1600;       
        let currentTargetX = 0, currentTargetY = 0, currentTargetZ = 0; 
        let currentScale = 1, targetOpacity = 1.0; 

        // 🟢 FIX: No more weird gathering/shrinking lines. Just fades in on top of grid.
        if (isLogoPhase) {
          targetOpacity = 0; 
          let target = this.targets['grid']; 
          currentTargetX = target.x; currentTargetY = target.y; currentTargetZ = target.z;
        } else {
          let target = this.targets[currentShape as keyof typeof this.targets];
          if (currentShape === 'grid') {
            currentTargetX = target.x; currentTargetY = target.y; currentTargetZ = target.z;
          } else {
            let cosR = Math.cos(rot); let sinR = Math.sin(rot);
            let rx = target.x * cosR - target.z * sinR;
            let rz = target.z * cosR + target.x * sinR;
            let tilt = 0.3; let cosT = Math.cos(tilt); let sinT = Math.sin(tilt);
            currentTargetX = rx;
            currentTargetY = target.y * cosT - rz * sinT;
            currentTargetZ = rz * cosT + target.y * sinT;
            currentScale = Math.max(0.6, (currentTargetZ + 500) / 600);
            targetOpacity = 0.85; 
          }
        }

        if (!isLogoPhase) {
          let mouseTiltX = (mY - height / 2) * 0.0008; let mouseTiltY = (mX - width / 2) * 0.0008;
          let cosTX = Math.cos(mouseTiltX); let sinTX = Math.sin(mouseTiltX);
          let cosTY = Math.cos(mouseTiltY); let sinTY = Math.sin(mouseTiltY);
          let rx = currentTargetX * cosTY - currentTargetZ * sinTY;
          let rz = currentTargetZ * cosTY + currentTargetX * sinTY;
          currentTargetY = currentTargetY * cosTX - rz * sinTX;
          currentTargetX = rx;
        }

        let targetX = currentTargetX + width / 2; let targetY = currentTargetY + height / 2;
        let hoverPushX = 0, hoverPushY = 0;

        if (!isLogoPhase) {
          let dx = mX - targetX; let dy = mY - targetY;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let interactionRadius = 150; 
          if (distance < interactionRadius) {
            let force = (interactionRadius - distance) / interactionRadius;
            targetOpacity = 1.0; 
            hoverPushX = -(dx / distance) * force * 40; hoverPushY = -(dy / distance) * force * 40;
          }
        }
        
        let lerpSpeed = 0.1;
        this.opacity += (targetOpacity - this.opacity) * 0.1;
        this.x += ((targetX + hoverPushX) - this.x) * lerpSpeed;
        this.y += ((targetY + hoverPushY) - this.y) * lerpSpeed;
        this.size = this.baseSize * currentScale;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`; 
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
      }
    }

    const init = () => { particles = []; for (let i = 0; i < numParticles; i++) particles.push(new Particle(i, numParticles)); };
    
    let animationFrameId: number;
    const animate = () => {
      if (!ctx) return;
      checkScroll();
      ctx.fillStyle = "#05050A"; ctx.fillRect(0, 0, width, height);
      rotation += 0.005; 
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.15;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.15;
      let elapsed = Date.now() - startTime;
      particles.forEach((p) => { p.update(shapeRef.current, rotation, mouseRef.current.x, mouseRef.current.y, elapsed); p.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => { mouseRef.current.targetX = e.clientX; mouseRef.current.targetY = e.clientY; };
    const handleResize = () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; init(); };

    init(); animate();
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none', overflow: 'hidden', backgroundColor: '#05050A' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />

      <AnimatePresence>
        {showLogo && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, scale: 0, filter: "brightness(400%) blur(15px)" }}
            transition={{ delay: 1.5, duration: 0.2, ease: "easeIn" }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="absolute flex items-center justify-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <motion.div layout className="relative w-20 h-20 perspective-[800px] flex items-center justify-center shrink-0">
                <motion.div animate={{ rotateX: [0, 180, 360], rotateY: [0, 180, 360], borderRadius: ["10%", "50%", "10%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)]" />
                <motion.div animate={{ rotateX: [360, 180, 0], rotateY: [0, 180, 360], borderRadius: ["50%", "10%", "50%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.5)]" />
                <div className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_20px_#fff,0_0_40px_#22d3ee] animate-pulse" />
              </motion.div>
              <motion.div
                initial={{ width: 0, opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                animate={{ width: "auto", opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
                className="overflow-hidden whitespace-nowrap"
              >
                <h1 className="text-5xl md:text-7xl font-playfair italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-400 pr-4">
                  Devora.
                </h1>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}