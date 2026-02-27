import { Canvas } from '@react-three/fiber';
import Laptop from './Laptop.jsx';
const App = () => {
  return (
    <>
      <Canvas
        className="canvas-container"
        style={{ touchAction: 'none', width: '100vw', height: '100vh' }}
        camera={{ fov: 45, near: 0.1, far: 2000, position: [0, 0, 4.69] }}
      >
        <Laptop />
      </Canvas>
    </>
  );
};
export default App;
