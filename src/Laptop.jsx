import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Environment,
  useGLTF,
  Text3D,
  Center,
} from '@react-three/drei';
import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Perf } from 'r3f-perf';

export default function Laptop() {
  const { viewport } = useThree();
  const isMobile = window.innerWidth < 768;
  const { scene } = useGLTF('./laptop.glb');
  const textRef = useRef();
  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    if (textRef.current) {
      textRef.current.position.x = Math.sin(time) * 0.1;
    }
  });

  return (
    <>
      <color args={['#241a1a']} attach="background" />
      <Perf position="top-left" />

      <Environment preset="city" />

      <PresentationControls
        global
        rotation={[0.13, 0, 0]}
        polar={[0, 0]}
        azimuth={[-1, 1]}
        damping={0.1}
        scale={isMobile ? 0.8 : 1}
        position={[0, -1, 0]}
      >
        {/* <Float rotationIntensity={0.4}> */}
        <rectAreaLight
          width={2.5}
          height={1.65}
          intensity={65}
          color={new THREE.Color('hsl(185, 62%, 45%)')}
          rotation={[-0.1, Math.PI, 0]}
          position={[0, 0.55, -1.15]}
        />

        <group position-y={-0.8} scale={isMobile ? 0.15 : 0.28}>
          <primitive object={scene} />

          <Html
            transform
            wrapperClass="htmlScreen"
            rotation={[0, 0, 0]}
            position={isMobile ? [0, 4.2, 0.3] : [0, 3, 0.3]}
            distanceFactor={3.3}
          >
            <iframe src="https://beautiful-sorbet-27645f.netlify.app/#skills" />
          </Html>
        </group>
        <Center position={isMobile ? [0, 0.6, 0.1] : [0, 1.35, 0.1]}>
          <Text3D
            ref={textRef}
            font="./helvetiker_regular.typeface.json"
            size={isMobile ? 0.2 : 0.4}
            height={0.2}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
          >
            ALI.JS
            <meshStandardMaterial
              color={new THREE.Color('hsl(185, 62%, 45%)')}
            />
          </Text3D>
        </Center>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
