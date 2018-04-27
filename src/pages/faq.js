import React from 'react'
import {render} from 'react-dom'
import {observer, inject} from 'mobx-react'
import CSSModules from 'react-css-modules'
import styles from '../css/faq.css'

const QA = [
    {q: 'question1', a: 'answer1'},
    {q: 'question2', a: 'answer2'},
    {q: 'question3', a: 'answer3'},
    {q: 'question4', a: 'answer4'},
    {q: 'question5', a: 'answer5'},
    {q: 'question6', a: 'answer6'},
]


@CSSModules(styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'})
export default class Faq extends React.Component {
    state = {
        QA_state: [true]
    }

    QAHandler = (index) => {
        let {QA_state} = this.state
        let QA_state_copy = QA_state.slice()
        QA_state_copy[index] = !QA_state_copy[index]
        this.setState({QA_state: QA_state_copy})

    }
    QAFunc = (item, index) => {
        let {QA_state} = this.state
        return <div key={index} styleName="QAItem">
            <div styleName="itemQ" onClick={() => {
                this.QAHandler(index)
            }}>
                <div styleName="itemQLeft">{item.q}</div>
                <div styleName={QA_state[index] ? "itemQRight" : "itemQRight itemQRightDown"}>&lt;</div>
            </div>
            <div styleName={QA_state[index] ? "itemA" : "itemA itemAHide"}>{item.a}</div>
        </div>
    }

    render() {
        return <div styleName="bg">
            {QA.map(this.QAFunc)}
        </div>
    }
}

