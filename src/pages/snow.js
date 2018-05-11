import React from 'react'
import CSSModules from 'react-css-modules'
import styles from '../css/snow.css'

import snow1 from '../images/snow/01.png'
import snow2 from '../images/snow/02.png'
import snow3 from '../images/snow/03.png'
import snow4 from '../images/snow/04.png'
import snow5 from '../images/snow/05.png'
import snow6 from '../images/snow/06.png'
import snow7 from '../images/snow/07.png'
import snow8 from '../images/snow/08.png'
import snow9 from '../images/snow/09.png'
import snow10 from '../images/snow/10.png'
import snow11 from '../images/snow/11.png'
import snow12 from '../images/snow/12.png'
import snow13 from '../images/snow/13.png'
import snow14 from '../images/snow/13.png'
import snow15 from '../images/snow/13.png'


const copyArray = []

const PICS = [snow1, snow2, snow3, snow4, snow5, snow6, snow7, snow8, snow9, snow10, snow11, snow12, snow13, snow14, snow15]

@CSSModules(styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'})
class Snow extends React.Component {

    state = {
        PICS_ARRAY: []
    }

    componentDidMount() {
        this.renderPicsArray()
    }

    renderPicsArray = () => {
        const timer = setInterval(_ => {
            let left = Math.random() * this.snowFlow.offsetWidth
            let height = Math.random() * this.snowFlow.offsetHeight
            let picIndex = Math.floor(Math.random() * (PICS.length - 0) + 0)
            copyArray.push({src: PICS[picIndex], left: left, height: height})
            this.setState({PICS_ARRAY: copyArray}, _ => {
                if (copyArray.length == (PICS.length * 4)) {
                    clearInterval(timer)
                }
            })
        }, 500)

    }

    snowFlowFunc = (item, index) => {
        return <div styleName="pic" style={{left: item.left, top: item.height}} key={index}>
            <img src={item.src}/>
        </div>

    }

    render() {
        let {PICS_ARRAY} = this.state
        return <div styleName="bg">
            <div styleName="snowFlow" ref={ele => {
                this.snowFlow = ele
            }} id="snowFlow">
                <div styleName="container">
                    {PICS_ARRAY && (PICS_ARRAY.length != 0) && PICS_ARRAY.map(this.snowFlowFunc)}
                </div>
            </div>
        </div>
    }
}

export default Snow