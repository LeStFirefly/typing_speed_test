import React, {Component} from 'react';
import { Card, CardTitle} from 'reactstrap';
import HOC from '../HOC/';
import { connect } from 'react-redux';

import './ResultBlock.sass'

class ResultBlock extends Component {

    closeResultBlock = () => {
        document.querySelector('.resultModalWrapper').style.display ='none';
    }

    render() {
        const {speed, accuracy} = this.props;

        return(
            <div className='resultModalWrapper'>
                <div className='resultModalBlock'>
                    <Card body className='resultCard'>
                        <CardTitle tag="h5">Испытание завершено!</CardTitle>
                        <CardTitle tag="h6">Твои результаты:</CardTitle>
                        <div className='results'>
                            <div className='result'>
                                <span><i className="bi bi-clock-history"></i>Скорость</span>
                                <span className='resultSpan'>{speed} зн./мин</span>
                            </div>
                            <div className='result'>
                                <span><i className="bi bi-binoculars"></i>Точность</span>
                                <span className='resultSpan'>{accuracy}%</span>
                            </div>
                        </div>
                    </Card>
                    <button type="button" className="btn-close closeButton" aria-label="Close" onClick={() => this.closeResultBlock()}></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        speed: state.speed,
        accuracy: state.accuracy
    }
}

export default HOC()(connect(mapStateToProps, {})(ResultBlock));
