import React from 'react'
import CSSModules from 'react-css-modules'
import {render} from 'react-dom'
import {observer, inject} from 'mobx-react'
import styles from '../css/nav.css'

@inject('nav')
@observer
@CSSModules(styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'})
class Nav extends React.Component {
    componentDidMount() {
    }

    render() {
        let {content} = this.props.nav
        return <div styleName="bg">
            {content}
        </div>
    }
}

export default Nav