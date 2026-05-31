import { useEffect, useState } from "react";

const ASCII_CHARS = ["@", "#", "$", "%", "&", "*", "+", "=", "-", "/", "|"];

export default function AsciiTrail() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    let id = 0;

    const handleMove = (e) => {
      const char =
        ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)];

      const newParticle = {
        id: id++,
        x: e.clientX,
        y: e.clientY,
        char,
      };

      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 600);
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute text-green-400 text-2xl font-mono animate-fade"
          style={{
            left: p.x,
            top: p.y,
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
}