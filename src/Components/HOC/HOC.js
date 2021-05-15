import React from 'react';
import TypeContext from '../TypeContext';

const HOC = () => (Wrapped) => {
    return (props) => {
        return (
            <TypeContext.Consumer>
                {
                    (TypeService) => {
                        return <Wrapped {...props} TypeService={TypeService}/>
                    }
                }
            </TypeContext.Consumer>
        )
    }
};

export default HOC;