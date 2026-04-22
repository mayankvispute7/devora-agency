"use client";
import React, { useEffect, useRef, useState } from "react";

export default function StructuredDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isForming, setIsForming] = useState(false);

  useEffect(() => {
    // 1. Intersection Observer to trigger the shape formation when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsForming(true);
        } else {
          setIsForming(false);
        }
      },
      { threshold: 0.3 } // Triggers when 30% of the section is visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    // 2. Canvas Setup
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particles: Particle[] = [];
    const numParticles = 1200;
    let rotation = 0;

    // Professional Monochromatic Palette
    const colors = ["rgba(255, 255, 255, 0.8)", "rgba(200, 200, 200, 0.5)", "rgba(150, 150, 150, 0.3)"];

    class Particle {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      targetX: number;
      targetY: number;
      targetZ: number;
      size: number;
      color: string;
      randomDriftX: number;
      randomDriftY: number;

      constructor(index: number, total: number) {
        // Start randomly scattered across the screen
        this.baseX = Math.random() * width;
        this.baseY = Math.random() * height;
        this.x = this.baseX;
        this.y = this.baseY;
        this.z = 0;

        // Fibonacci Sphere Math (Calculates their exact spot on a 3D globe)
        let phi = Math.acos(-1 + (2 * index) / total);
        let theta = Math.sqrt(total * Math.PI) * phi;
        let radius = width > 768 ? 350 : 200; // Larger sphere on desktop

        this.targetX = radius * Math.cos(theta) * Math.sin(phi);
        this.targetY = radius * Math.sin(theta) * Math.sin(phi);
        this.targetZ = radius * Math.cos(phi);

        this.size = Math.random() * 1.5 + 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.randomDriftX = Math.random() * 2 - 1;
        this.randomDriftY = Math.random() * 2 - 1;
      }

      update(forming: boolean, rot: number) {
        if (forming) {
          // 3D Rotation Math
          let cosR = Math.cos(rot);
          let sinR = Math.sin(rot);
          
          // Rotate around Y axis
          let rotatedX = this.targetX * cosR - this.targetZ * sinR;
          let rotatedZ = this.targetZ * cosR + this.targetX * sinR;
          
          // Center the sphere on screen
          let finalX = rotatedX + width / 2;
          let finalY = this.targetY + height / 2;

          // Smoothly snap to the shape (Lerp)
          this.x += (finalX - this.x) * 0.05;
          this.y += (finalY - this.y) * 0.05;
          
          // Size changes based on Z-depth for 3D illusion
          this.size = Math.max(0.1, (rotatedZ + 400) / 400);
        } else {
          // Scatter back to random dust
          this.baseX += this.randomDriftX * 0.5;
          this.baseY += this.randomDriftY * 0.5;
          
          // Screen wrap
          if (this.baseX > width) this.baseX = 0;
          if (this.baseX < 0) this.baseX = width;
          if (this.baseY > height) this.baseY = 0;
          if (this.baseY < 0) this.baseY = height;

          this.x += (this.baseX - this.x) * 0.05;
          this.y += (this.baseY - this.y) * 0.05;
          this.size = 1;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(i, numParticles));
      }
    };

    const animate = () => {
      if (!ctx) return;
      // Dark, clean background wipe
      ctx.clearRect(0, 0, width, height);
      
      // Slowly rotate the sphere
      rotation += 0.002;

      // We use a state reference to ensure the animation loop has the latest scroll state
      particles.forEach((particle) => {
        particle.update(isFormingRef.current, rotation);
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  // Hack to get the latest React state into the vanilla JS animation loop
  const isFormingRef = useRef(isForming);
  useEffect(() => {
    isFormingRef.current = isForming;
  }, [isForming]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-40 mix-blend-screen"
      />
      {/* Sleek monochromatic vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#05050A_80%)] pointer-events-none"></div>
    </div>
  );
}