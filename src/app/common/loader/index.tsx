import * as React from 'react';
import { IStore } from '../../store/store.interface';
import { connect } from 'react-redux';

interface Props {
    isLoading: boolean;
}

class Hello extends React.Component<Props, object> {
    render() {
        const { isLoading } = this.props;
        return (
            <div className="loader">
                { isLoading ? (
                    <div className="loader-backdrop">
                        <div className="spinner" />
                    </div>
                ) : null }
            </div>
        );
    }
}

function mapStateToProps(store: IStore) {
    return {
        isLoading: store.http.isLoading,
    };
}

export default connect(mapStateToProps)(Hello);
