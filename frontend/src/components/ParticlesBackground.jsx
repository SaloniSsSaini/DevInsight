import React from "react";

import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        background: { color: "#0f172a" },
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          move: { speed: 1 },
          links: {
            enable: true,
            distance: 120,
            color: "#38bdf8",
          },
        },
      }}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
}