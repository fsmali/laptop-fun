import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <>
    <Canvas
      className="canvas-container"
      style={{ touchAction: 'none', width: '100vw', height: '100vh' }}
      camera={{ fov: 45, near: 0.1, far: 2000, position: [0, 0, 4.69] }}
    >
      <Experience />
    </Canvas>
  </>,
);
