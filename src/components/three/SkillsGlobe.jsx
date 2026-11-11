import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { skills } from "@/data/portfolio";

const RADIUS = 2.5;

const spherePoints = (count, radius) => {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: count }, (_, i) => {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    return new THREE.Vector3(
      radius * Math.cos(theta) * r,
      radius * y,
      radius * Math.sin(theta) * r,
    );
  });
};

const SkillNode = ({ skill, position }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <group position={position}>
      <Html center distanceFactor={7} style={{ pointerEvents: "auto" }} zIndexRange={[10, 0]}>
        <button
          type="button"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => window.open(skill.url, "_blank", "noopener,noreferrer")}
          aria-label={`${skill.title} — open docs`}
          className={`relative flex items-center justify-center transition-transform duration-300 ${
            hovered ? "scale-125 z-50" : "scale-100"
          }`}
          style={{ background: "transparent", border: "none", cursor: "pointer" }}
        >
          <span
            className="absolute inset-0 rounded-full blur-md transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle, ${skill.glow}66 0%, transparent 70%)`,
              opacity: hovered ? 1 : 0,
            }}
          />
          <Icon size={hovered ? 50 : 42} style={{ color: skill.color }} />
          {hovered && (
            <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/15 bg-slate-950/95 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white shadow-lg">
              {skill.title}
            </span>
          )}
        </button>
      </Html>
    </group>
  );
};

const RotatingGroup = ({ children }) => {
  const ref = useRef(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.12;
    }
  });
  return (
    <group rotation={[0.28, 0, 0.12]}>
      <group ref={ref}>
        <mesh>
          <icosahedronGeometry args={[RADIUS * 0.97, 3]} />
          <meshBasicMaterial color="#a69b7d" wireframe transparent opacity={0.07} />
        </mesh>
        <mesh>
          <sphereGeometry args={[RADIUS * 0.93, 48, 48]} />
          <meshBasicMaterial color="#181a1c" transparent opacity={0.55} depthWrite={false} />
        </mesh>
        {children}
      </group>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[RADIUS * 1.28, 0.008, 8, 160]} />
        <meshBasicMaterial color="#bfb79f" transparent opacity={0.32} />
      </mesh>
    </group>
  );
};

const SkillsGlobe = () => {
  const points = useMemo(() => spherePoints(skills.length, RADIUS), []);

  return (
    <div className="relative h-[30rem] w-full overflow-hidden sm:h-[36rem]">
      <Canvas
        camera={{ position: [0, 0, 11], fov: 45 }}
        dpr={[1, 1.8]}
        style={{ background: "transparent", touchAction: "pan-y" }}
      >
        <ambientLight intensity={0.95} />
        <pointLight position={[10, 10, 10]} intensity={1.1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <RotatingGroup>
          {skills.map((skill, index) => (
            <SkillNode key={skill.title} skill={skill} position={points[index]} />
          ))}
        </RotatingGroup>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.55}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>
    </div>
  );
};

export default SkillsGlobe;
