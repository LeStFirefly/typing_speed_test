import React, {Component} from 'react';
import { Card, Button, CardTitle} from 'reactstrap';

import './ResultBlock.sass'

class ResultBlock extends Component {
    render() {
        return(
            <div className='startModalBlock'>
                <Card body className='startCard'>
                    <CardTitle tag="h5">Испытание завершено!</CardTitle>
                    <CardTitle tag="h6">Твои результаты:</CardTitle>
                    <div className='results'>
                        <div className='result'>
                            <span><i className="bi bi-clock-history"></i>Скорость</span>
                            <span className='resultSpan'>200 зн./с</span>
                        </div>
                        <div className='result'>
                            <span><i className="bi bi-binoculars"></i>Точность</span>
                            <span className='resultSpan'>90,0%</span>
                        </div>
                    </div>
                    <Button color="success"><i className="bi bi-arrow-counterclockwise"></i>Попробовать ещё?</Button>
                </Card>
                <button type="button" className="btn-close closeButton" aria-label="Close"></button>
            </div>
        )
    }
}

export default ResultBlock;
