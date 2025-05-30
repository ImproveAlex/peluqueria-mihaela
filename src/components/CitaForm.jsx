import React, { useState } from 'react';

function CitaForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    hora: '',
    descripcion: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí podrías enviar los datos a tu backend o integrarlo con una hoja de Google
  };

  const isSaturday = formData.fecha && new Date(formData.fecha).getDay() === 6;
  const isSunday = formData.fecha && new Date(formData.fecha).getDay() === 0;

  const horas = () => {
    const inicio = 10;
    const fin = isSaturday ? 18 : 20;
    let opciones = [];
    for (let h = inicio; h <= fin; h++) {
      opciones.push(`${h.toString().padStart(2, '0')}:00`);
    }
    return opciones;
  };

  return (
    <section id="cita" className="bg-[#f1e0c2] py-12 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-cursive text-center text-[#d8b26e] mb-6">
          Pedir una Cita
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded"
          />

          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded"
          />

          {!isSunday && (
            <select
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded"
            >
              <option value="">Selecciona una hora</option>
              {horas().map((hora) => (
                <option key={hora} value={hora}>{hora}</option>
              ))}
            </select>
          )}

          {isSunday && (
            <p className="text-red-600 text-sm">Lo sentimos, no abrimos los domingos.</p>
          )}

          <textarea
            name="descripcion"
            placeholder="Descripción del servicio"
            value={formData.descripcion}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 p-3 rounded"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#d8b26e] hover:bg-black hover:text-white text-black font-semibold py-3 px-6 rounded transition"
          >
            Reservar
          </button>
        </form>
      </div>
    </section>
  );
}

export default CitaForm;
