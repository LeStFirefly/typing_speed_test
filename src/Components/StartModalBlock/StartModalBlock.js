import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { startTest } from '../../actions';
import { connect } from 'react-redux';
import './StartModalBlock.sass'
class StartModalBlock extends Component {
    hideBlock = () => {
        document.querySelector('.modalWrapper').style.display = 'none';
        this.props.startTest();
    }

    render() {
        return(
            <div className='modalWrapper'>
                <div className='startModalBlock'>
                    <Card body className='startCard'>
                        <CardTitle tag="h5">Хочешь проверить, как быстро ты печатаешь?</CardTitle>
                        <CardText>Нажимай на кнопку и повтори текст так быстро, как только можешь! О, и было бы неплохо не промахиваться!</CardText>
                        <Button color="success" onClick={() => this.hideBlock()}><i className="bi bi-alarm"></i>Начать!</Button>
                    </Card>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = {
    startTest
}

export default connect(mapStateToProps, mapDispatchToProps)(StartModalBlock);