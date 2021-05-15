import React, {Component} from 'react';
import {Button} from 'reactstrap';

import './TypingTestBlock.sass'

class TypingTestBlock extends Component {
    typingText = `Ribeye duis pig, ham hock ut quis enim landjaeger ea excepteur jowl jerky exercitation beef.  Labore flank pork belly occaecat tri-tip sint.  Boudin capicola laborum, 
    leberkas kielbasa mollit qui turkey ut ea ribeye rump sint tongue.  In prosciutto cillum laborum porchetta biltong ullamco drumstick ea ut excepteur pork loin meatball.  
    Cillum officia tenderloin shoulder, flank prosciutto bresaola eu beef ribs nisi sunt proident dolor.","Fatback short loin chislic proident ball tip tongue deserunt brisket landjaeger tempor.  
    Short ribs proident adipisicing officia turducken ex.`


    render() {
        return(
            <div className="card typingTestBlock">
                <div className="card-body">
                    <div className='card textContent'>{this.typingText}</div>
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

export default TypingTestBlock;