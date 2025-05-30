import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CitaForm from './components/CitaForm';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CitaForm />
      <main className="pt-12 p-6">
        <h1 className="text-3xl text-center text-rose-700 font-bold mt-12">
          ¡Bienvenido a Mihaela Hair Studios!
        </h1>
      </main>
    </div>
  );
}

export default App;
