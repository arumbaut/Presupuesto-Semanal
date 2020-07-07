import React from 'react';

function Gasto(props) {
    const {gasto, eliminarGasto} = props;
    const eliminar = (id)=>{
        eliminarGasto(id)
    };
    return (
        <li className="gasto">
            <p>
                {gasto.nombre}
                <span className="gasto">$ {gasto.cantidad} </span>
                <button type="button"
                        onClick={()=>eliminar(gasto.id)}
                >X</button>
            </p>
            
        </li>
    );
}

export default Gasto;