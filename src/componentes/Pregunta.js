import React, {Fragment, useState} from 'react';
import Error from './Error'


function Pregunta(props) {

    const {setPresupuesto, setPreguntaPresupuesto, setRestante} = props;
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const agregarPresupuesto = e => {
        e.preventDefault();
        if(cantidad<1 || isNaN(cantidad)){
            setError(true);
            return
        }
        setError(false)
        setPresupuesto(cantidad);
        setRestante(cantidad)
        setPreguntaPresupuesto(false);
    }
    return (
        <Fragment>
            <h1>Coloca tu presupuesto</h1>

            {error ? <Error mensaje="El presupuesto es Incorrecto"/> : null}
            
            <form 
                onSubmit={agregarPresupuesto}
            >
                <input type="number"
                       className="u-full-width"
                       placeholder="Agrega tu presupuesto"
                       onChange= { e=> (setCantidad(parseInt(e.target.value,10 ) ) )} 
                />
                <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto"/>
            </form>
        </Fragment>
    );
}

export default Pregunta;