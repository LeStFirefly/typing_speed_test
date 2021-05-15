import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { connect } from 'react-redux';
import { loadText } from '../../actions';
import HOC from '../HOC/';

import './TypingTestBlock.sass'

class TypingTestBlock extends Component {
    componentDidMount() {
        this.updateText();
    }

    updateText = () => {
        const {TypeService, loadText} = this.props;

        TypeService.getText()
            .then(res => loadText(res))
            .catch( () => loadText('Невозможно получить данные от сервера...'))
    }

    render() {
        const {text} = this.props;

        return(
            <div className="card typingTestBlock">
                <div className="card-body">
                    <div className='card textContent'>{text}</div>
                    <div className='resultPanel'>
                        <span><i className="bi bi-clock-history"></i>Скорость</span>
                        <span className='resultSpan'>200 зн./с</span>
                        <span><i className="bi bi-binoculars"></i>Точность</span>
                        <span className='resultSpan'>90,0%</span>
                        <Button color="light"><i className="bi bi-arrow-counterclockwise"></i>Начать заново!</Button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.text,
    }
}

const mapDispatchToProps = {
    loadText
}

export default HOC()(connect(mapStateToProps, mapDispatchToProps)(TypingTestBlock));

