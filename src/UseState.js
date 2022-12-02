import React from "react";

function UseState({name}) {
    const [error,setError] = React.useState(false);
    const [loading,setLoading] = React.useState(true);

    React.useEffect(()=>{
        console.log("empezando el effecto");

        if (!!loading){
            setTimeout(()=>{
                console.log("Validando");

                setLoading(false);

                console.log("terminando Validacion");
            }, 3000);
        }

        console.log("terminando el efecto");
    },[loading]);

    return(
        <div>
            <h2>Eliminar {name}</h2>

            <p>Pro favor, escribe el codigo de seguridad</p>

            {error && (
                <p>Error el codigo es incorrecto</p>
            )}

            {loading && (
                <p>cargando...</p>
            )}

            <input placeholder="codigo de seguridad"/>
            <button
                onClick={() => setError(!error)}
            >
                Comprobar
            </button>
        </div>
    )
}

export {UseState};