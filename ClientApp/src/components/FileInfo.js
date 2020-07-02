import React, { Component } from "react";

export
    class FileInfo extends Component {

    constructor() {
        super();

        this.state = {
            id: '',
            path: '',
            name: '',
        };


        fetch('api/File', { method: 'GET' })
            .then(response => { return response.json() })
            .then(data => {
                console.log(data);
                this.setState({
                    id: data.id,
                    path: data.path,
                    name: data.name
                });
            });
    };

    render() {
        return (
            <div>
                <h2>File Info</h2>
                <ul>
                    <li>{this.state.id}</li>
                    <li>{this.state.path}</li>
                    <li>{this.state.name}</li>
                </ul>
            </div>
        );
    }
}