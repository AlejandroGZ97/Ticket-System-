import React from "react"
import picture from "../images/test.png";
import photo from "../images/empty.png";
import'./UsersBox.css';


export const Usuario =() =>{

    return(
        <section className="box">
            <div className="perfil">
                <img className="picture" src={picture} height="85" width="85"/>
                <p>User Name</p>
            </div>
            <div className="sections">
                <ul className="sections-top">
                    <a className="top1" href='#'><img src={photo} height="85" width="85"/><h1>Dashboard</h1></a> 
                    <a className="top2" href='#'><img src={photo} height="85" width="85"/><h1>Tickets</h1></a>
                    <a className="top3" href='#'><img src={photo} height="85" width="85"/><h1>Usuarios</h1></a>
                </ul>
                <ul className="sections-bottom">
                    <text-intent><a className="tab" href="#">Actividades</a></text-intent>
                    <text-intent><a className="tab" href="#">Administrar clientes</a></text-intent>
                    <text-intent><a className="tab" href="#">Filtrar tickets/clientes</a></text-intent>
                    <text-intent><a className="tab" href="#">Filtrar tickets/usuarios</a></text-intent>
                    <text-intent><a className="tab" href="#">Crear tickets</a></text-intent>
                    <text-intent><a className="tab" href="#">Asignar tickets</a></text-intent>
                    <text-intent><a className="tab" href="#">Notificaciones</a></text-intent>
                </ul>
            </div>
            <div className="tabla">
                <p>Actividades</p>
            </div>
        </section>
    )
}

export default Usuario;