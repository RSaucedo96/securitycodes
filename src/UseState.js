import React from "react";

const SECURITY_CODE = 'veritran';

function UseState({name}) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted:false,
        confirmed:false,
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
                        confirmed: true,
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

    if (!state.deleted && !state.confirmed) {
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
    } else if (!state.deleted && !!state.confirmed){
        return (
          <React.Fragment>
              <p>
                  Estas segurx?
              </p>
              <button
                onClick={()=>{
                    setState({
                        ...state,
                        deleted:true,
                    });
                }}
              >
                  si, eliminar
              </button>
              <button
                  onClick={()=>{
                      setState({
                          ...state,
                          confirmed:false,
                          value:'',
                      });
                  }}
              >
                  no, me arrepiento
              </button>
          </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <p>
                    eliminado con exito
                </p>
                <button
                    onClick={()=>{
                        setState({
                            ...state,
                            deleted:false,
                            confirmed:false,
                            value:'',
                        });
                    }}
                >
                    Resetear
                </button>
            </React.Fragment>
        )
    }
}

export {UseState};