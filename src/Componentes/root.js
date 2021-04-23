import React from 'react';
import { AuthContext } from '../context/auth';
import Cargando from '../Paginas/Cargando';

class Root extends React.Component {
    render() {
        const {
            children,
        } = this.props;
        const {
            authReady,
        } = this.context;

        if (!authReady) {
            return <Cargando/>;
        }

        return children;
    };
}

Root.contextType = AuthContext;

export default Root;