import React from "react";

function UseState({name}) {
    const [error,serError] = React.useState(false);
    return(
        <div>
            <h2>Eliminar {name}</h2>

            <p>Pro favor, escribe el codigo de seguridad</p>

            {error && (
                <p>Error el codigo es incorrecto</p>
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