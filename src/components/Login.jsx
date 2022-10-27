import React from "react"
import { useRef, useState, useEffect } from 'react'
import'./Body.css';

export const Login =() =>{
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [succes, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[])

    useEffect(() => {
        setErrMsg('');
    },[user, pwd])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return(
        <>
            {succes ? (
                <section className="box-body">
                    <h1 className="body-titulo">Haz ingresado</h1>
                    <br/>
                    <p>
                        <a>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem et molestiae officiis ea repellendus reprehenderit quos dolore quidem sapiente quaerat labore qui quam eligendi, rerum ipsam! Suscipit nostrum provident excepturi?</a>
                    </p>
                </section>
            ) : (
        
        <section className="box-body">
            <p ref={errRef} className={errMsg ? "errmsg" : 
            "offscreen"} aria-live="assertive">{errMsg} </p>
            <h1 className="body-titulo">Login</h1>
            <form className="body-login" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="username"
                    placeholder="Correo"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                <br/>
                <input 
                    type="password" 
                    id="password"
                    placeholder="Contraseña"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <br/>
                <button>Iniciar</button>
            </form>
        </section>
        )}
        </>
    )
}

export default Login;