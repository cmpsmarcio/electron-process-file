import React, { Component } from 'react';
import { TransactionFile } from './components/TransactionFile';
import { FileInfo } from './components/FileInfo';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <>
                <TransactionFile />
                <FileInfo />
            </>
        );
    }
}
