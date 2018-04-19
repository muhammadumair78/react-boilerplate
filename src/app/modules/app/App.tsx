import * as React from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../store/store.interface';
import Hello from '../../common/hello/hello';

const logo = require('../../../assets/images/logo.svg');

interface PropsI {
    enthusiasmLevel: number;
    languageName: string;
}

class App extends React.Component<PropsI, object> {
    render() {
        const { languageName, enthusiasmLevel } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>I am language = {languageName}. And i am enthusiasm = {enthusiasmLevel}</p>
                <Hello />
            </div>
        );
    }
}

function mapStateToProps(store: IStore) {
    return {
        enthusiasmLevel: store.enthusiasm.enthusiasmLevel,
        languageName: store.enthusiasm.name,
    };
}

export default connect(mapStateToProps)(App);