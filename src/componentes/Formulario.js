import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

function Formulario(props) {
    const {setGasto, crearGasto} = props;
 
    const [nombreGasto, setNombregasto] = useState("");
    const [cantidadGasto, setCantidadGasto] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto = (e) =>{
        e.preventDefault()

        if (nombreGasto ==='' || cantidadGasto<1 || isNaN(cantidadGasto)) {
            setError(true);
            return
        }

        const gasto ={
                nombre: nombreGasto,
                cantidad : cantidadGasto,
                id : shortid.generate()
            };
        
        setGasto(gasto);
        crearGasto(true);
        //eliminar alerta
        setError(false);  
        
        //Resetear form
        setNombregasto('');
        setCantidadGasto('');        
        
    };

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agregar tus Gastos Aqui</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto"/> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder= "Ej. Transporte"
                    onChange={e=>setNombregasto(e.target.value)}
                    value={nombreGasto}
                    />
            </div>

            <div className="campo">
                <label>Cantida Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder= "Ej. 300"
                    onChange={e=>setCantidadGasto(parseInt( e.target.value, 10))}
                    value={cantidadGasto}
                    />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>

        </form>
    );
}

export default Formulario;