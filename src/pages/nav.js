import React from 'react'
import {render} from 'react-dom'
import {observer, inject} from 'mobx-react'
import styles from '../css/nav.css'

@inject('nav')
@observer
class Nav extends React.Component {
    componentDidMount() {
    }

    render() {
        let {content} = this.props.nav
        return <div className="bg">
            {content}
        </div>
    }
}

export default Nav