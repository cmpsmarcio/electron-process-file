import React, { Component } from 'react';
import GetFileName from '../Interop';

export 
    class TransactionFile extends Component {

    render() {
        return (
            <div>
                <h1>Arquivo</h1>
                <h6>teste.env</h6>
                <button onClick={GetFileName()} id="botao">Clique Aqui</button>
            </div>
        )
    }
}
  