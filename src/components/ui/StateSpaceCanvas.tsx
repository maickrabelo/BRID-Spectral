import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export function StateSpaceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Mouse state
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      // We want the canvas to cover the whole window.
      // But it might be inside a relative container. Let's just use window inner for a hero.
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      initParticles(width, height);
      
      if (prefersReducedMotion) {
        draw(width, height);
      }
    };

    const initParticles = (w: number, h: number) => {
      // 60 to 150 particles based on area
      const area = w * h;
      const particleCount = Math.min(Math.max(Math.floor(area / 15000), 60), 150);
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.15, // Extremely slow
          vy: (Math.random() - 0.5) * 0.15,
          r: 0.6 + Math.random() * 1.6, // 0.6 to 2.2
        });
      }
    };

    const draw = (w: number, h: number) => {
      // Background #070d17
      ctx.fillStyle = '#070d17';
      ctx.fillRect(0, 0, w, h);

      // Vignette
      const gradient = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, Math.max(w, h)/1.2);
      gradient.addColorStop(0, 'rgba(7, 13, 23, 0)');
      gradient.addColorStop(1, 'rgba(7, 13, 23, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // Update & Draw
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Wrap
          if (p.x < 0) p.x = w;
          if (p.x > w) p.x = 0;
          if (p.y < 0) p.y = h;
          if (p.y > h) p.y = 0;

          // Mouse interaction (repulsion)
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx*dx + dy*dy;
          const interactionRadiusSq = 160 * 160;

          if (distSq < interactionRadiusSq) {
            const force = (interactionRadiusSq - distSq) / interactionRadiusSq;
            p.x += dx * force * 0.02;
            p.y += dy * force * 0.02;
          }
        }

        // Draw particle (cyan)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(40, 216, 224, 0.7)'; // #28d8e0
        ctx.fill();

        // Draw connections (blue)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx*dx + dy*dy;
          
          if (distSq < 130 * 130) {
            const opacity = 1 - Math.sqrt(distSq) / 130;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(63, 127, 224, ${opacity * 0.4})`; // #3f7fe0 with low opacity
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      draw(window.innerWidth, window.innerHeight);
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const onMouseLeave = () => {
      mouse = { x: -1000, y: -1000 };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    
    resize();
    if (!prefersReducedMotion) {
      animate();
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}
