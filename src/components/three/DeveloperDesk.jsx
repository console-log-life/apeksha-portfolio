import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls, RoundedBox, Sparkles } from "@react-three/drei";
import { MathUtils } from "three";

const CODE = [[0.9, "#bca7ff"], [1.5, "#e9e9ff"], [1.2, "#86dfbc"], [1.7, "#e9e9ff"], [0.8, "#9bcaff"], [1.4, "#e9e9ff"], [1.0, "#f7a3cc"]];

/* code that types itself line by line, with a blinking cursor */
const CodeLines = () => {
  const refs = useRef([]);
  const cur = useRef(null);
  useFrame(({ clock }) => {
    const t = (clock.elapsedTime * 1.1) % (CODE.length + 2.5);
    CODE.forEach(([w], i) => {
      const p = MathUtils.clamp(t - i, 0, 1), m = refs.current[i];
      if (m) { m.scale.x = Math.max(p, 0.001); m.position.x = -1.1 + (w * p) / 2; }
    });
    const a = Math.min(Math.floor(t), CODE.length - 1);
    if (cur.current) {
      cur.current.position.set(-1.1 + CODE[a][0] * MathUtils.clamp(t - a, 0, 1) + 0.07, 2.72 - a * 0.17, -0.49);
      cur.current.visible = Math.floor(clock.elapsedTime * 2.4) % 2 === 0;
    }
  });
  return (
    <>
      {CODE.map(([w, c], i) => (
        <mesh key={i} ref={(el) => (refs.current[i] = el)} position={[-1.1, 2.72 - i * 0.17, -0.49]} scale={[0.001, 1, 1]}>
          <planeGeometry args={[w, 0.06]} /><meshBasicMaterial color={c} />
        </mesh>
      ))}
      <mesh ref={cur}><planeGeometry args={[0.05, 0.11]} /><meshBasicMaterial color="#e9e5db" /></mesh>
    </>
  );
};

/* keys dip randomly, as if someone is typing */
const Keys = () => {
  const refs = useRef([]);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    refs.current.forEach((m, i) => { if (m) m.position.y = 0.6 - Math.max(0, Math.sin(t * 5.3 + i * 2.399) - 0.93) * 0.35; });
  });
  return Array.from({ length: 3 }, (_, r) => Array.from({ length: 11 }, (_, c) => {
    const i = r * 11 + c;
    return (
      <mesh key={i} ref={(el) => (refs.current[i] = el)} position={[-0.75 + c * 0.14, 0.6, 0.55 + r * 0.14]}>
        <boxGeometry args={[0.1, 0.03, 0.09]} /><meshStandardMaterial color={i === 16 ? "#bca7ff" : "#282a3a"} roughness={0.6} />
      </mesh>
    );
  }));
};

const Steam = () => {
  const refs = useRef([]);
  useFrame(({ clock }) => {
    refs.current.forEach((m, i) => {
      if (!m) return;
      const p = (clock.elapsedTime * 0.3 + i / 5) % 1;
      m.position.set(Math.sin(p * 7 + i) * 0.06, p * 0.8, 0);
      m.scale.setScalar(0.5 + p * 1.2);
      m.material.opacity = 0.3 * (1 - p) * Math.min(1, p * 5);
    });
  });
  return (
    <group position={[1.8, 0.88, 0.5]}>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} ref={(el) => (refs.current[i] = el)}>
          <sphereGeometry args={[0.07, 12, 12]} /><meshBasicMaterial color="#e9e5db" transparent opacity={0} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
};

const Plant = () => {
  const ref = useRef(null);
  useFrame(({ clock }) => { if (ref.current) ref.current.rotation.z = Math.sin(clock.elapsedTime * 1.3) * 0.05; });
  return (
    <group position={[2.05, 0.69, -0.62]}>
      <mesh castShadow><cylinderGeometry args={[0.22, 0.17, 0.3, 24]} /><meshStandardMaterial color="#6b6d5f" roughness={0.8} /></mesh>
      <group ref={ref} position={[0, 0.15, 0]}>
        {[-0.5, -0.25, 0, 0.25, 0.5].map((a, i) => (
          <mesh key={i} position={[a * 0.35, 0.3 + (i % 2) * 0.07, 0]} rotation={[0, i, a]} scale={[0.09, 0.42 + (i % 3) * 0.08, 0.04]}>
            <sphereGeometry args={[1, 12, 12]} /><meshStandardMaterial color={i % 2 ? "#798262" : "#919a7a"} roughness={0.7} />
          </mesh>
        ))}
      </group>
    </group>
  );
};

const Lamp = () => {
  const light = useRef(null);
  useFrame(({ clock }) => { if (light.current) light.current.intensity = 14 + Math.sin(clock.elapsedTime * 2.1) * 1.2 + Math.sin(clock.elapsedTime * 7.3) * 0.6; });
  return (
    <group>
      <mesh position={[-1.9, 0.6, -0.5]}><cylinderGeometry args={[0.26, 0.3, 0.1, 28]} /><meshStandardMaterial color="#282a2d" metalness={0.5} roughness={0.4} /></mesh>
      <mesh position={[-1.8, 1.12, -0.5]} rotation={[0, 0, -0.16]}><cylinderGeometry args={[0.03, 0.03, 1, 12]} /><meshStandardMaterial color="#77796f" metalness={0.8} roughness={0.3} /></mesh>
      <mesh position={[-1.55, 1.62, -0.45]} rotation={[0, 0, -0.95]} castShadow><coneGeometry args={[0.3, 0.38, 28, 1, true]} /><meshStandardMaterial color="#8876ca" side={2} roughness={0.5} metalness={0.3} /></mesh>
      <mesh position={[-1.5, 1.52, -0.45]}><sphereGeometry args={[0.08, 16, 16]} /><meshStandardMaterial color="#f0ede4" emissive="#c3aeff" emissiveIntensity={0.8} /></mesh>
      <pointLight ref={light} position={[-1.4, 1.4, -0.3]} color="#c3aeff" distance={7} decay={2} />
    </group>
  );
};

const DeskScene = () => {
  const g = useRef(null);
  const k = useRef(0);
  useFrame((st, d) => {
    k.current = Math.min(1, k.current + d * 0.55);
    const e = 1 - Math.pow(1 - k.current, 3); // ease-out intro
    if (!g.current) return;
    g.current.scale.setScalar(0.55 + 0.45 * e);
    g.current.rotation.y = MathUtils.lerp(g.current.rotation.y, -0.35 - (1 - e) * 1.4 + st.pointer.x * 0.14, 0.08);
    g.current.rotation.x = MathUtils.lerp(g.current.rotation.x, -0.08 + st.pointer.y * 0.05, 0.08);
    g.current.position.y = -0.25 + Math.sin(st.clock.elapsedTime * 0.7) * 0.03 - (1 - e) * 0.7;
  });
  return (
    <>
      <hemisphereLight args={["#e9e9ff", "#252943", 0.75]} />
      <directionalLight position={[4, 7, 5]} intensity={1.5} color="#eeeaff" castShadow />
      <pointLight position={[4, 2, -3]} intensity={5} color="#9bcaff" />
      <Sparkles count={45} scale={[7, 4, 5]} size={2.2} speed={0.3} color="#d8cbff" position={[0, 1.4, 0]} />
      <group ref={g}>
        <mesh position={[0, -1.3, 0]} receiveShadow><cylinderGeometry args={[3.2, 3.2, 0.04, 64]} /><meshStandardMaterial color="#202225" roughness={1} /></mesh>
        <RoundedBox args={[4.8, 0.18, 2.5]} radius={0.06} position={[0, 0.45, 0]} castShadow receiveShadow><meshStandardMaterial color="#514d6e" roughness={0.72} /></RoundedBox>
        {[-1, 1].flatMap((x) => [-1, 1].map((z) => (
          <mesh key={`${x}${z}`} position={[x * 2.05, -0.45, z * 0.98]} castShadow><boxGeometry args={[0.12, 1.7, 0.12]} /><meshStandardMaterial color="#333538" roughness={0.7} /></mesh>
        )))}
        {/* monitor */}
        <mesh position={[0, 0.58, -0.62]}><boxGeometry args={[0.9, 0.04, 0.5]} /><meshStandardMaterial color="#1c1e20" metalness={0.6} roughness={0.4} /></mesh>
        <mesh position={[0, 1.35, -0.62]}><boxGeometry args={[0.12, 1.5, 0.12]} /><meshStandardMaterial color="#77796f" metalness={0.7} roughness={0.35} /></mesh>
        <RoundedBox args={[2.9, 1.85, 0.16]} radius={0.1} position={[0, 2.1, -0.62]} castShadow><meshStandardMaterial color="#181a1c" metalness={0.6} roughness={0.4} /></RoundedBox>
        <mesh position={[0, 2.1, -0.525]}><planeGeometry args={[2.65, 1.6]} /><meshBasicMaterial color="#202225" /></mesh>
        {["#bca7ff", "#f7a3cc", "#86dfbc"].map((c, i) => <mesh key={c} position={[-1.15 + i * 0.1, 2.85, -0.5]}><circleGeometry args={[0.025, 16]} /><meshBasicMaterial color={c} /></mesh>)}
        <CodeLines />
        <RoundedBox args={[0.7, 0.55, 0.02]} radius={0.04} position={[0.85, 2.3, -0.5]}><meshBasicMaterial color="#343639" /></RoundedBox>
        <mesh position={[0.85, 2.3, -0.485]}><circleGeometry args={[0.14, 24]} /><meshBasicMaterial color="#9bcaff" /></mesh>
        {/* keyboard, mouse */}
        <RoundedBox args={[1.65, 0.07, 0.55]} radius={0.04} position={[-0.05, 0.57, 0.72]}><meshStandardMaterial color="#181a1c" metalness={0.3} roughness={0.5} /></RoundedBox>
        <Keys />
        <Float speed={1.5} floatIntensity={0.1}><RoundedBox args={[0.3, 0.13, 0.43]} radius={0.1} position={[1.15, 0.65, 0.72]}><meshStandardMaterial color="#343639" roughness={0.5} /></RoundedBox></Float>
        {/* mug + steam */}
        <mesh position={[1.8, 0.69, 0.5]} castShadow><cylinderGeometry args={[0.17, 0.15, 0.3, 28]} /><meshStandardMaterial color="#e9e5db" roughness={0.4} /></mesh>
        <mesh position={[1.8, 0.83, 0.5]}><cylinderGeometry args={[0.15, 0.15, 0.01, 28]} /><meshStandardMaterial color="#303235" /></mesh>
        <mesh position={[1.98, 0.7, 0.5]}><torusGeometry args={[0.09, 0.025, 8, 16]} /><meshStandardMaterial color="#e9e5db" roughness={0.4} /></mesh>
        <Steam />
        {/* books */}
        {[["#86dfbc", 0.59, 0.05], ["#d8cbff", 0.69, -0.08], ["#f7a3cc", 0.79, 0.1]].map(([c, y, r], i) => (
          <mesh key={i} position={[-1.65, y, 0.6]} rotation={[0, r, 0]} castShadow><boxGeometry args={[0.7 - i * 0.05, 0.1, 0.5]} /><meshStandardMaterial color={c} roughness={0.7} /></mesh>
        ))}
        <Lamp />
        <Plant />
        <Float speed={1.2} rotationIntensity={0.5}><mesh position={[-2.2, 2.7, 0.4]} rotation={[0.5, 0.3, 0.2]}><torusGeometry args={[0.3, 0.02, 12, 64]} /><meshStandardMaterial color="#9bcaff" emissive="#528bdd" emissiveIntensity={0.55} metalness={0.8} roughness={0.3} /></mesh></Float>
        <Float speed={1.5}><mesh position={[2.3, 2.8, 0.2]}><icosahedronGeometry args={[0.18, 0]} /><meshStandardMaterial color="#86dfbc" emissive="#31a87e" emissiveIntensity={0.35} flatShading /></mesh></Float>
      </group>
      <ContactShadows position={[0, -1.28, 0]} opacity={0.5} scale={8} blur={2.5} far={4} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={1.05} maxPolarAngle={1.85} rotateSpeed={0.5} enableDamping autoRotate autoRotateSpeed={0.3} />
    </>
  );
};

export default function DeveloperDesk() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-[1.5rem] sm:h-[370px] lg:h-[410px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(165,138,242,.12),transparent_62%)]" />
      <Canvas camera={{ position: [6.2, 4.4, 7.3], fov: 34 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} shadows style={{ background: "transparent", touchAction: "pan-y" }}>
        <DeskScene />
      </Canvas>
      <div className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-cyan-200/20 bg-slate-950/75 px-3 py-2 text-[9px] uppercase tracking-[0.22em] text-cyan-100 backdrop-blur-xl">Interactive 3D workspace · drag to explore</div>
    </div>
  );
}
