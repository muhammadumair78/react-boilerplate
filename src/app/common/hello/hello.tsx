import * as React from 'react';
import { IStore } from '../../store/store.interface';
import { connect, Dispatch } from 'react-redux';
import * as actions from './hello.actions';

interface Props {
    enthusiasmLevel: number;
    languageName: string;
    onIncrement: () => actions.IncrementEnthusiasm;
    onDecrement: () => actions.DecrementEnthusiasm;
}

class Hello extends React.Component<Props, object> {
    render() {
        const { languageName, enthusiasmLevel, onIncrement, onDecrement } = this.props;
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {languageName + getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={onDecrement}>-</button>
                    <button onClick={onIncrement}>+</button>
                </div>
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

function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}