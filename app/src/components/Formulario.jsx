import React, { useState } from 'react';
import CampoFormulario from './CampoFormulario';

const Formulario = () => {
  const [datos, setDatos] = useState({
    cuotaComunidad: '',
    derramaPrevista: '',
    itePasada: '',
    comisionInmo: '',
    disponibilidadPosesion: '',
    observaciones: '',
    propietario: '',
    herencia: '',
    viviendaHabitual: '',
    compraOtraVivienda: '',
    mayoresDe65: '',
    metrosCuadrados: '',
    anoConstruccion: '',
    certificadoEnergetico: '',
  });

  const handleCampoChange = (campo, valor) => {
    setDatos({ ...datos, [campo]: valor });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', datos);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Agregar un Nuevo Piso</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <CampoFormulario label="Cuota de Comunidad" value={datos.cuotaComunidad} onChange={(e) => handleCampoChange('cuotaComunidad', e.target.value)} />
        <CampoFormulario label="Derrama Prevista" value={datos.derramaPrevista} onChange={(e) => handleCampoChange('derramaPrevista', e.target.value)} />
        <CampoFormulario label="ITE Pasada" value={datos.itePasada} onChange={(e) => handleCampoChange('itePasada', e.target.value)} />
        <CampoFormulario label="Comisión Inmobiliaria" value={datos.comisionInmo} onChange={(e) => handleCampoChange('comisionInmo', e.target.value)} />
        <CampoFormulario label="Disponibilidad de Posesión" value={datos.disponibilidadPosesion} onChange={(e) => handleCampoChange('disponibilidadPosesion', e.target.value)} />
        <CampoFormulario label="Observaciones" value={datos.observaciones} onChange={(e) => handleCampoChange('observaciones', e.target.value)} />
        <CampoFormulario label="Propietario" value={datos.propietario} onChange={(e) => handleCampoChange('propietario', e.target.value)} />
        <CampoFormulario label="Herencia" value={datos.herencia} onChange={(e) => handleCampoChange('herencia', e.target.value)} />
        <CampoFormulario label="Vivienda Habitual" value={datos.viviendaHabitual} onChange={(e) => handleCampoChange('viviendaHabitual', e.target.value)} />
        <CampoFormulario label="Compra de Otra Vivienda Habitual" value={datos.compraOtraVivienda} onChange={(e) => handleCampoChange('compraOtraVivienda', e.target.value)} />
        <CampoFormulario label="Mayores de 65 Años" value={datos.mayoresDe65} onChange={(e) => handleCampoChange('mayoresDe65', e.target.value)} />
        <CampoFormulario label="Metros Cuadrados" value={datos.metrosCuadrados} onChange={(e) => handleCampoChange('metrosCuadrados', e.target.value)} />
        <CampoFormulario label="Año de Construcción" value={datos.anoConstruccion} onChange={(e) => handleCampoChange('anoConstruccion', e.target.value)} />
        <CampoFormulario label="Certificado Energético" value={datos.certificadoEnergetico} onChange={(e) => handleCampoChange('certificadoEnergetico', e.target.value)} />
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