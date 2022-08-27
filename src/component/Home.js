import * as THREE from "three";
import React, { Suspense, useState, useEffect } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { useTransition, a } from "react-spring";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, draco, Stars } from "drei";
import Typewriter from "typewriter-effect";
import Wave from "./Wave";
import Ab1 from "./Ab1";

function Model({ url }) {
  const { nodes, materials } = useLoader(GLTFLoader, url, draco());
  return (
    <group
      rotation={[-Math.PI / 2, 0, 0]}
      position={[-9, 6, 0]}
      scale={[7, 7, 7]}
    >
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.planet001.geometry}
          material={materials.scene}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.planet002.geometry}
          material={materials.scene}
        />
      </group>
    </group>
  );
}

function Loading() {
  const [finished, set] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    THREE.DefaultLoadingManager.onLoad = () => set(true);
    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
      setWidth((itemsLoaded / itemsTotal) * 200);
  }, []);

  const props = useTransition(finished, null, {
    from: { opacity: 1, width: 0 },
    leave: { opacity: 0 },
    update: { width },
  });

  return props.map(
    ({ item: finished, key, props: { opacity, width } }) =>
      !finished && (
        <a.div className="loading" key={key} style={{ opacity }}>
          <div className="loading-bar-container">
            <a.div className="loading-bar" style={{ width }} />
          </div>
        </a.div>
      )
  );
}

export default function Home() {
  return (
    <>
      <div className="bg" />
      <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
      <div id="h3">
        {" "}
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter

              .typeString("I am Godknows Egi 👌👌")

              .pauseFor(1000)
              .deleteAll()
              .typeString("Welcome  to my world of Fullstack Web Dev....")
              .start();
          }}
        />
      </div>
      <Canvas
        style={{ height: 500 }}
        shadowMap
        camera={{ position: [0, 0, 15] }}
      >
        <ambientLight intensity={0.75} />
        <pointLight intensity={1} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={2.25}
          angle={0.2}
          penumbra={1}
          position={[25, 25, 25]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <fog attach="fog" args={["#cc7b32", 16, 20]} />
        <Suspense fallback={null}>
          <Model url="/scene-draco.gltf" />
        </Suspense>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.5}
          rotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stars radius={500} depth={50} count={1000} factor={10} />
      </Canvas>
      <div className="layer" />
      <Loading />

      <div id="wh-div" className="w-[100%] h-[200px]  lg:h-[50px]  bg-white">
        <img
          className=" w-[250px] sm:w-[300px] bottom-[-10%] left-[20%]  sm:left-[60%] md:w-[400px]  lg:w-[400px] absolute md:bottom-[-20%] md:left-[60%] lg:bottom-[-20%] lg:left-[60%]"
          src="/astro-mona.webp"
          alt="logo"
        />
      </div>
      <Wave/>
      <div className="bg-mybg">
        <Ab1/>
      </div>
    </>
  );
}
