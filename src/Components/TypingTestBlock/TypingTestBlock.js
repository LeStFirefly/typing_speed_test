import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { connect } from 'react-redux';
import { loadText, restartTest } from '../../actions';
import HOC from '../HOC/';

import './TypingTestBlock.sass'

class TypingTestBlock extends Component {
    state = {
        currentLetter: 0
    }
    componentDidMount() {
        this.updateText();
    }

    componentDidUpdate(prevState) {
        if (this.props.startTesting !== prevState.startTesting) {
            document.addEventListener('keydown', (e) => this.compareLetter(e));
        }
    }

    updateText = () => {
        const {TypeService, loadText} = this.props;

        TypeService.getText()
            .then(res => loadText(res.toString()))
            .catch( () => loadText('Невозможно получить данные от сервера...'))
    }

    compareLetter = (e) => {
        const {text} = this.props;
        const i = this.state.currentLetter;

        if (e.key !== 'Shift') {
            let actualKey = document.querySelectorAll('.letter');
            
            if (i<text.length) {
                if (actualKey[i].textContent === e.key) {
                    actualKey[i].classList.remove('blackLetter', 'redLetter', 'currentLetter')
                    actualKey[i].classList.add('greenLetter');
                    actualKey[i+1].classList.add('currentLetter');
                    const nextLetter = i+1;
                    this.setState({currentLetter: nextLetter});
                } else {
                    actualKey[i].classList.remove('blackLetter', 'currentLetter')
                    actualKey[i].classList.add('redLetter');    
                }
            }
        }
    }

    restart = () => {
        this.props.restartTest();
        this.updateText();
        console.log('restart');
    }

    render() {
        const {text, speed, accuracy} = this.props;
        let textArray = [];

        for (let char of text) {
            textArray.push(char);
        }

        const textSpan = textArray.map( (item, index) => {
            if (index === 0) {
                return(
                    <span key={index} className='letter currentLetter'>{item}</span>
                )
            } else {
                return(
                    <span key={index} className='letter blackLetter'>{item}</span>
                )
            } 
        })

        return(
            <div className="card typingTestBlock">
                <div className="card-body">
                    <div className='card'>
                        <div className='textContent'>{textSpan}</div>
                    </div>
                    <div className='resultPanel'>
                        <span><i className="bi bi-clock-history"></i>Скорость</span>
                        <span className='resultSpan'>{speed} зн./с</span>
                        <span><i className="bi bi-binoculars"></i>Точность</span>
                        <span className='resultSpan'>{accuracy}%</span>
                        <Button color="light" onClick={() => this.restart()}><i className="bi bi-arrow-counterclockwise"></i>Начать заново!</Button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.text,
        speed: state.speed,
        accuracy: state.accuracy,
        startTesting: state.startTesting
    }
}

const mapDispatchToProps = {
    loadText,
    restartTest
}

export default HOC()(connect(mapStateToProps, mapDispatchToProps)(TypingTestBlock));

