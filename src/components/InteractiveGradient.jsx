import { useEffect, useState } from "react";

export default function InteractiveGradient() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#030014]">
      <div
        className="absolute w-160 h-160 rounded-full bg-purple-900 blur-3xl"
        style={{
          left: `${mousePosition.x * 0.05}px`,
          top: `${mousePosition.y * 0.05}px`,
        }}
      />

      <div
        className="absolute right-0 bottom-0 w-140 h-140 rounded-full bg-cyan-300/30 blur-3xl"
        style={{
          transform: `translate(-${mousePosition.x * 0.06}px, -${mousePosition.y * 0.06}px)`,
        }}
      />

      <div className="absolute top-1/2 left-1/2 w-120 h-120 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-950 blur-3xl " />

     
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}