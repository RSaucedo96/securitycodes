import React from "react";

class ClassState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          error:false,
        };
    }
    render() {
        return(
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p>Pro favor, escribe el codigo de seguridad</p>

                {this.state.error && (
                    <p>Error el codigo es incorrecto</p>
                )}

                <input placeholder="codigo de seguridad"/>
                <button
                    onClick={() =>
                        this.setState(prevState => (
                            {error: !prevState.error})
                        )}
                >
                    Comprobar
                </button>
            </div>
        )
    }
}

export {ClassState};