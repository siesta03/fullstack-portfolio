import { useEffect, useRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  color?: string;
}

export function Particles({
  className,
  quantity = 100,
  staticity = 50,
  ease = 50,
  color = "#ffffff",
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);
    
    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        mouse.current = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const drawParticles = () => {
    circles.current = [];
    for (let i = 0; i < quantity; i++) {
      const circle = circleParams();
      drawCircle(circle);
    }
  };

  const circleParams = () => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const size = Math.floor(Math.random() * 2) + 0.1;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  };

  const drawCircle = (circle: any, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.current.translate(translateX, translateY);
      context.current.beginPath();
      context.current.arc(x, y, size, 0, 2 * Math.PI);
      context.current.fillStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
      context.current.fill();
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!update) {
        circles.current.push(circle);
      }
    }
  };

  const clearContext = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
    }
  };

  const resizeCanvas = () => {
    if (canvasRef.current && canvasRef.current.parentElement) {
      canvasSize.current.w = canvasRef.current.parentElement.offsetWidth;
      canvasSize.current.h = canvasRef.current.parentElement.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      if (context.current) {
        context.current.scale(dpr, dpr);
      }
    }
  };

  const animate = () => {
    clearContext();
    circles.current.forEach((circle: any, i: number) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSize.current.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.current.h - circle.y - circle.translateY - circle.size,
      ];
      const isOutOfBounds = edge.some((e) => e < 0);
      if (isOutOfBounds) {
        circles.current[i] = circleParams();
      }
      
      const dxMouse = mouse.current.x - (circle.x + circle.translateX);
      const dyMouse = mouse.current.y - (circle.y + circle.translateY);
      const distance = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
      if (distance < 200) {
        circle.translateX += dxMouse / (staticity * circle.magnetism);
        circle.translateY += dyMouse / (staticity * circle.magnetism);
      }

      circle.x += circle.dx;
      circle.y += circle.dy;
      circle.alpha += (circle.targetAlpha - circle.alpha) / ease;
      drawCircle(circle, true);
    });
    requestAnimationFrame(animate);
  };

  return (
    <div className={cn("absolute inset-0 z-0 pointer-events-none", className)}>
      <canvas ref={canvasRef} />
    </div>
  );
}
