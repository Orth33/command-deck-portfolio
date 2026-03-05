import { useEffect, useRef } from "react";

export default function ProtectedImage({ src, alt, className }: any) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      const size = 192; // 48 * 4 (Tailwind w-48)

      canvas.width = size;
      canvas.height = size;

      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-label={alt}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
}