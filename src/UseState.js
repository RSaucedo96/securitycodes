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

    const onConfirm = () => {
        setState({
            ...state,
            error: false,
            loading:false,
            confirmed: true,
        });
    };

    const onError = () => {
        setState({
            ...state,
            loading:false,
            error:true,
        });
    };

    const onWrite = (newValue) => {
        setState({
            ...state,
            value: newValue,
        });
    };

    const onCheck = () => {
        setState({
            ...state,
            loading:true,
            error:false,
        });
    };

    const onDelete = () => {
        setState({
            ...state,
            deleted:true,
        });
    };

    const onRegret=() => {
        setState({
            ...state,
            confirmed:false,
            value:'',
        });
    };

    const onReset=()=>{
        setState({
            ...state,
            deleted:false,
            confirmed:false,
            value:'',
        });
    };

    React.useEffect(()=>{
        console.log("empezando el effecto");

        if (!!state.loading){
            setTimeout(()=>{
                console.log("Validando");
                if (state.value === SECURITY_CODE){
                    onConfirm();
                } else {
                    onError();
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
                        onWrite(event.target.value);
                    }}
                    value={state.value}

                />
                <button
                    onClick={() => {
                        onCheck();
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
                    onDelete();
                }}
              >
                  si, eliminar
              </button>
              <button
                  onClick={()=>{
                    onRegret();
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
                        onReset();
                    }}
                >
                    Resetear
                </button>
            </React.Fragment>
        )
    }
}

export {UseState};