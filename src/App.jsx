import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-24 p-6">
        <h1 className="text-3xl text-center text-rose-700 font-bold mt-12">
          ¡Bienvenido a Mihaela Hair Studios!
        </h1>
      </main>
    </div>
  );
}

export default App;