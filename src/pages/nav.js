import React from 'react'
import CSSModules from 'react-css-modules'
import {render} from 'react-dom'
import {observer, inject} from 'mobx-react'
import styles from '../css/nav.css'
import NavBar from '../components/navBar'
import Header from '../components/Header'

@inject('nav')
@observer
@CSSModules(styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'})
class Nav extends React.Component {
    componentDidMount() {
    }

    render() {
        let {content} = this.props.nav
        return <div styleName="bg">
            <Header title='导航' history={this.props.history} />
            {content}
            <NavBar />
        </div>
    }
}

export default Nav