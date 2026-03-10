import './App.css';
import { useState } from 'react';
import { LoginForm, RegisterForm } from './auth';

function App() {
  const [view, setView] = useState<'login' | 'register'>('login');
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      {view === 'login' ? (
        <LoginForm onRegister={() => setView('register')} />
      ) : (
        <RegisterForm onLogin={() => setView('login')} />
      )}
    </div>
  );
}

export default App;
