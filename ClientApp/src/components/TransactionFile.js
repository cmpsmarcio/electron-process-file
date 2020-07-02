import React, { Component } from 'react';

export 
    class TransactionFile extends Component {

    constructor() {
        super();

        this.state = {
            nome: ''
        };

        fetch('api/Transacao', { method: 'GET' })
            .then(response => { return response.json() })
            .then(data => {
                this.setState({ nome : data.nome });
            });
    };


    render() {
        return (
            <div>
                <h1>Arquivo</h1>
                <h6>{this.state.nome}</h6>
            </div>
        )
    }
}
  