import React from "react";

const SECURITY_CODE = 'veritran';

function UseState({name}) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
    });

    React.useEffect(()=>{
        console.log("empezando el effecto");

        if (!!state.loading){
            setTimeout(()=>{
                console.log("Validando");
                if (state.value === SECURITY_CODE){
                    setState({
                        ...state,
                        error: false,
                        loading:false,
                    })
                } else {
                    setState({
                        ...state,
                        loading:false,
                        error:true,
                    })
                }
                console.log("terminando Validacion");
            }, 3000);
        }

        console.log("terminando el efecto");
    },[state.loading]);

    return(
        <div>
            <h2>Eliminar {name}</h2>

            <p>Pro favor, escribe el codigo de seguridad</p>

            {(state.error && !state.loading) && (
                <p>Error el codigo es incorrecto</p>
            )}

            {state.loading && (
                <p>cargando...</p>
            )}

            <input
                placeholder="codigo de seguridad"
                onChange={(event) => {
                    setState({
                        ...state,
                        value:event.target.value,
                    });
                }}
                value={state.value}

            />
            <button
                onClick={() => {
                    setState({
                        ...state,
                        loading:true,
                        error:false,
                    });
                }}
            >
                Comprobar
            </button>
        </div>
    )
}

export {UseState};