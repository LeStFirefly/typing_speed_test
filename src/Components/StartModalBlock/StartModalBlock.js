import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import './StartModalBlock.sass'

class StartModalBlock extends Component {
    render() {
        return(
            <div className='startModalBlock'>
                <Card body className='startCard'>
                    <CardTitle tag="h5">Хочешь проверить, как быстро ты печатаешь?</CardTitle>
                    <CardText>Нажимай на кнопку и повтори текст так быстро, как только можешь! О, и было бы неплохо не промахиваться!</CardText>
                    <Button color="success"><i className="bi bi-alarm"></i>Начать!</Button>
                </Card>
                <button type="button" className="btn-close closeButton" aria-label="Close"></button>
            </div>
        )
    }
}

export default StartModalBlock;