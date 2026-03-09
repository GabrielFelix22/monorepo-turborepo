import { useState } from 'react';
import viteLogo from '../../../public/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';
import { Button } from '@repo/ui';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="p-10">
        <Button
          type="button"
          variant="green"
          size="sm"
          text="lg"
          className="flex-1 mr-2"
          onClick={() => setCount((count) => count + 1)}
        >
          Contador {count}
        </Button>
        <Button
          type="button"
          variant="outline-green"
          size="sm"
          text="lg"
          className="flex-1"
        >
          Compartilhar
        </Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
