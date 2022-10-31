import React from "react"
import photo from "../images/empty.png";
import'./UsersBox.css';


export const Cliente =() =>{

    return(
        <div >
            <ul className="customer-box">
                <ul className="crear" href='#'><img src={photo} height="100" width="100"/><h1>Crear Ticket</h1> <button className="btn-grey">Crear Ticket</button></ul>
                <ul className="ver" href='#'><img src={photo} height="100" width="100"/><h1>Ver Ticket</h1><button className="btn-grey">Ver Ticket</button></ul>
                <ul className="modificar" href='#'><img src={photo} height="100" width="100"/><h1>Modificar Datos</h1><button className="btn-grey">Modificar Ticket</button></ul>
            </ul>
        </div>
    )
}

export default Cliente;