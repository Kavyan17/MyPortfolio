import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./home-particle-config";

export default function ParticleBackground() {
  const particlesInit = async (main) => {
    // This loads the full tsparticles bundle
    await loadFull(main);
  };

  return (
    <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />
  );
}
