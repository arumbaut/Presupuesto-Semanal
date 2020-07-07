import React, {useState, useEffect}  from 'react';
import Pregunta from './componentes/Pregunta';
import Formulario from './componentes/Formulario';
import ListaGasto from './componentes/ListadoGasto';
import ControlPresupuesto from './componentes/ControlPresupuesto';

function App() {
  

  const [presupuesto, setPresupuesto] = useState(0);
  const [preguntaPresupuesto, setPreguntaPresupuesto] = useState(true);
  const [gasto, setGasto] = useState({});
  const [gastos, setGastos] = useState([]);
  const [crearGasto, setCrearGasto] = useState(false);
  const [restante, setRestante] = useState(0);

  
  useEffect(()=>{
    if (crearGasto) {
       const listaGastos = [...gastos,gasto];
       setGastos(listaGastos);

       //restar presupuesto
       const presupuestoRestante = restante - gasto.cantidad;
       setRestante(presupuestoRestante)
    }

    setCrearGasto(false)
    
  },[crearGasto])

  const eliminarGasto= (id)=>{
        
        const newGastos= [...gastos];
        const found = newGastos.find(element=> element.id ===id)
        const filter =newGastos.filter(element=> element.id !==id)
        setGastos(filter);
        setRestante(restante+found.cantidad)
        
  };
  return (
    <div className="App container">
      <header>
       <h1>Gasto Semenal</h1> 
        <div className="contenido-principal contenido">
          { (preguntaPresupuesto)
            ?
              <Pregunta 
              setPresupuesto={setPresupuesto}
              setPreguntaPresupuesto = {setPreguntaPresupuesto}
              setRestante = {setRestante}
              />
            :
              (
                <div className="row">
                  <div className="one-half column">
                  <Formulario
                    setGasto= {setGasto}
                    crearGasto={setCrearGasto}
                  />
                  </div>

                  <div className="one-half column">
                    <ListaGasto
                      gastos= {gastos}
                      eliminarGasto= {eliminarGasto}
                    />

                    <ControlPresupuesto 
                        presupuesto={presupuesto}
                        restante={restante}
                        />
                  </div>
                </div>
              )
          }
        </div>
      </header>  
    </div>
  );
}

export default App;
