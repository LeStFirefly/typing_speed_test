import React from 'react';
import errorImg from './error404.svg';

import './Error.sass'

const Error = () => {
    return(
        <div className='errorBlock'>
            <img src={errorImg} alt="Что-то пошло не так!" />
        </div>
    )
}

export default Error;