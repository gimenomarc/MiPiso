import React, { useState } from 'react';

const Formulario = () => {
  const [cuotaComunidad, setCuotaComunidad] = useState('');
  const [derramaPrevista, setDerramaPrevista] = useState('');
  const [itePasada, setItePasada] = useState('');
  const [comisionInmo, setComisionInmo] = useState('');
  const [disponibilidadPosesion, setDisponibilidadPosesion] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [propietario, setPropietario] = useState('');
  const [herencia, setHerencia] = useState('');
  const [viviendaHabitual, setViviendaHabitual] = useState('');
  const [compraOtraVivienda, setCompraOtraVivienda] = useState('');
  const [mayoresDe65, setMayoresDe65] = useState('');
  const [metrosCuadrados, setMetrosCuadrados] = useState('');
  const [anoConstruccion, setAnoConstruccion] = useState('');
  const [certificadoEnergetico, setCertificadoEnergetico] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      cuotaComunidad,
      derramaPrevista,
      itePasada,
      comisionInmo,
      disponibilidadPosesion,
      observaciones,
      propietario,
      herencia,
      viviendaHabitual,
      compraOtraVivienda,
      mayoresDe65,
      metrosCuadrados,
      anoConstruccion,
      certificadoEnergetico,
    };
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Agregar un Nuevo Piso</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="cuotaComunidad" className="text-gray-700">Cuota de Comunidad</label>
          <input
            type="text"
            id="cuotaComunidad"
            value={cuotaComunidad}
            onChange={(e) => setCuotaComunidad(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="derramaPrevista" className="text-gray-700">Derrama Prevista</label>
          <input
            type="text"
            id="derramaPrevista"
            value={derramaPrevista}
            onChange={(e) => setDerramaPrevista(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>
        {/* Repite el patrón anterior para otros campos */}
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Guardar Piso
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;