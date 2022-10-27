import React from "react"
import'./Body.css';


export const Administrador =() =>{

    return(
        <div className="box-body">
            <ul>
                <a href='#'>Dashboard</a> <br />
                <a href='#'>Tickets</a> <br />
                <a href='#'>Crear usuario</a>
            </ul>
        </div>
    )
}

export default Administrador;