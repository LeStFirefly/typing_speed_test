import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { connect } from 'react-redux';
import { loadText, restartTest, saveResult } from '../../actions';
import HOC from '../HOC/';

import './TypingTestBlock.sass'

class TypingTestBlock extends Component {

    state = {
        currentLetter: 0,
        speed: 0,
        accuracy: 100.0,
        startTime: 0,
        actualTime: 0,
        mistake: 0
    }

    componentDidMount() {
        this.updateText();
    }

    componentDidUpdate(prevState) {
        if (this.props.startTesting !== prevState.startTesting && this.props.startTesting===true) {
            document.addEventListener('keydown', (e) => this.compareLetter(e));
            this.setState({startTime: new Date().getTime()});
            this.calcSpeed();
        }
    }

    updateText = () => {
        const {TypeService, loadText} = this.props;

        TypeService.getText()
            .then(res => loadText(res.text))
            .catch( () => loadText('Невозможно получить данные от сервера...'))
    }

    calcSpeed = () => {
        this.timerId = setInterval( () => {
            this.setState({actualTime: new Date().getTime()})

            const {startTime, actualTime, currentLetter, mistake} = this.state;
            const {text} = this.props;
            const minutes = (actualTime - startTime)/1000/60;
            console.log('считаем')
            let actualSpeed = Math.ceil(currentLetter/minutes);
            let actualAccuracy = (100 - (mistake*100/text.length)).toFixed(1);

            this.setState({
                speed: actualSpeed,
                accuracy: actualAccuracy
            });
        }, 1000)
    }

    compareLetter = (e) => {
        const {text, saveResult} = this.props;
        const i = this.state.currentLetter;
        let {mistake, accuracy, speed} = this.state;

        if (e.key !== 'Shift') {
            let actualKey = document.querySelectorAll('.letter');
            
            if (i<text.length) {
                if (actualKey[i].textContent === e.key) {
                    actualKey[i].classList.remove('blackLetter', 'redLetter', 'currentLetter')
                    actualKey[i].classList.add('greenLetter');

                    if (i !== (text.length-1)) {
                        actualKey[i+1].classList.add('currentLetter');
                    }

                    const nextLetter = i+1;
                    this.setState({currentLetter: nextLetter});
                } else {
                    actualKey[i].classList.remove('blackLetter', 'currentLetter','greenLetter')
                    actualKey[i].classList.add('redLetter');
                    mistake++

                    this.setState({
                        mistake: mistake,
                    });   
                }
            }

            if (i===text.length-1 && actualKey[i].textContent === e.key) {
                clearInterval(this.timerId);
                saveResult(speed, accuracy<0 ? 0 : accuracy);
                document.querySelector('.resultModalWrapper').style.display ='block';
            }
        }

    }

    restart = () => {
        console.log('restart')
        this.props.restartTest();
        let letters = document.querySelectorAll('.letter');
            letters.forEach( item => {
                item.classList.remove('greenLetter', 'redLetter','currentLetter');
                item.classList.add('blackLetter');
                
            })
            letters[0].classList.add('currentLetter')

        this.setState({
            currentLetter: 0,
            speed: 0,
            accuracy: 100.0,
            startTime: new Date().getTime(),
            mistake: 0
        });

        this.updateText();
        //this.calcSpeed(); 
    }

    render() {
        const {text} = this.props;
        const {accuracy, speed} = this.state;
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
                        <span className='resultSpan'>{accuracy<0 ? 0 : accuracy}%</span>
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
        startTesting: state.startTesting
    }
}

const mapDispatchToProps = {
    loadText,
    restartTest,
    saveResult
}

export default HOC()(connect(mapStateToProps, mapDispatchToProps)(TypingTestBlock));

