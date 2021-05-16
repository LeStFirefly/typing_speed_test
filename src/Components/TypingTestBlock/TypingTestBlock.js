import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { connect } from 'react-redux';
import {
    loadText,
    startTest,
    restartTest,
    updateStatistic,
    updateStartTime,
    updateActualTime,
    setCurrentLetter,
    addMistake,
    setFalse
} from '../../actions';
import HOC from '../HOC/';

import './TypingTestBlock.sass'

class TypingTestBlock extends Component {

    componentDidMount() {
        this.updateText();
    }

    componentDidUpdate(prevState) {
        if (this.props.startTesting !== prevState.startTesting) {
            if (this.props.startTesting===true) {
                document.addEventListener('keydown', (e) => this.compareLetter(e));
                this.timerId = setInterval( () => {
                    this.props.updateActualTime(new Date().getTime());
                    this.calcStatistic();
                }, 1000)
            } 
        }
    }

    updateText = () => {
        const {TypeService, loadText} = this.props;

        TypeService.getText()
            .then(res => loadText(res.text))
            //.then(res => loadText('Кошка')) //Для тестов
            .catch( () => loadText('Невозможно получить данные от сервера...'))
    }

    compareLetter = (e) => {
        e.stopImmediatePropagation();

        const {text, mistake, updateStartTime, setCurrentLetter, addMistake, setFalse} = this.props;
        let i =this.props.currentLetter;
        let actualKey = document.querySelectorAll('.letter');

        if (e.key !== 'Shift') {

            if (i === 0 && mistake===0) {
                updateStartTime(new Date().getTime());
                this.calcStatistic();
            }
            
            if (i<text.length) {
                if (actualKey[i].textContent === e.key) {
                    actualKey[i].classList.remove('blackLetter', 'redLetter', 'currentLetter')
                    actualKey[i].classList.add('greenLetter');

                    if (i<text.length-1) {
                        actualKey[i+1].classList.add('currentLetter');
                    }

                    setCurrentLetter(i+1);
                } else {
                    actualKey[i].classList.remove('blackLetter', 'currentLetter','greenLetter')
                    actualKey[i].classList.add('redLetter');
                    addMistake(mistake+1);
                }
            }

            if (i===text.length-1 && actualKey[i].textContent === e.key) {
                actualKey[i].classList.remove('currentLetter');
                clearInterval(this.timerId);
                document.querySelector('.resultModalWrapper').style.display ='block';
                setFalse();
            }
        }

    }

    restart = () => {
        const {restartTest, startTest} =this.props;
        let letters = document.querySelectorAll('.letter');
        
        letters.forEach( item => {
            item.classList.remove('greenLetter', 'redLetter','currentLetter');
            item.classList.add('blackLetter');
        })

        letters[0].classList.add('currentLetter')
            
        this.updateText();
        restartTest();
        startTest();
    }

    calcStatistic = () => {
        const {startTime, actualTime, currentLetter, mistake, text, updateStatistic} = this.props;
        const minutes = (actualTime - startTime)/1000/60;

        let actualSpeed = Math.ceil(currentLetter/minutes);
        let actualAccuracy = (100 - (mistake*100/text.length)).toFixed(1);

        updateStatistic(actualSpeed, actualAccuracy);   
    }

    render() {
        const {text, accuracy, speed} = this.props;
        
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
                        <span className='resultSpan'>{speed} зн./мин</span>
                        <span><i className="bi bi-binoculars"></i>Точность</span>
                        <span className='resultSpan'>{accuracy}%</span>
                        <Button color="light" onClick={() => this.restart()} onMouseDown={(e) => e.preventDefault()}><i className="bi bi-arrow-counterclockwise"></i>Начать заново!</Button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.text,
        startTesting: state.startTesting,
        speed: state.speed,
        accuracy: state.accuracy,
        currentLetter: state.currentLetter,
        startTime: state.startTime,
        actualTime: state.actualTime,
        mistake: state.mistake
    }
}

const mapDispatchToProps = {
    loadText,
    startTest,
    restartTest,
    updateStatistic,
    updateStartTime,
    updateActualTime,
    setCurrentLetter,
    addMistake,
    setFalse
}

export default HOC()(connect(mapStateToProps, mapDispatchToProps)(TypingTestBlock));
