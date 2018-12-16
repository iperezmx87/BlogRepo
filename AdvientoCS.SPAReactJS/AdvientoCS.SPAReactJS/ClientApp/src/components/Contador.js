import React, { Component } from 'react';

class Contador extends Component {
    state = {
        contador: 0
    }

    SumaContador = (e) => {
        // tomamos el valor del estado previo
        let contadorClics = parseInt(this.state.contador);

        // sumamos uno
        contadorClics += 1;

        // actualizamos el estado
        this.setState({
            contador: contadorClics
        });
    }

    render() {
        return (
            <div className="container">
                <h5>Número de clics: {this.state.contador}</h5>
                <button className="button" onClick={this.SumaContador}>¡Hazme clic!</button>
            </div>
        );
    }
}

export default Contador;