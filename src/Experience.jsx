import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
} from '@react-three/drei';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { Perf } from 'r3f-perf';

export default function Experience() {
  const { viewport } = useThree();
  const isMobile = window.innerWidth < 768;
  const computer = useGLTF(
    'https://threejs-journey.com/resources/models/macbook_model.gltf',
  );

  return (
    <>
      <color args={['#241a1a']} attach="background" />
      <Perf position="top-left" />

      <Environment preset="city" />

      <PresentationControls
        global
        rotation={[0.13, 0, 0]}
        polar={[0, 0]}
        azimuth={[-1, 0.75]}
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

        <primitive
          object={computer.scene}
          position-y={-1.2}
          scale={isMobile ? 0.5 : 1}
        >
          <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={isMobile ? 1.15 : 1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
          >
            <iframe src="https://beautiful-sorbet-27645f.netlify.app/#skills" />
          </Html>
        </primitive>

        <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={isMobile ? 0.3 : 0.6}
          position={isMobile ? [0, 0.6, 0.75] : [0, 1.35, 0.75]}
          // rotation-y={-1.25}
          maxWidth={2}
        >
          ALI.JS
        </Text>
        {/* </Float> */}
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
