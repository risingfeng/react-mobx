import React from 'react'
import {observer, inject} from 'mobx-react'
import CSSModules from 'react-css-modules'
import styles from '../css/not-found.css'


@CSSModules(styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'})
class NotFound extends React.Component {
    render() {
        return <div styleName="notFoundBg">
            The page does not exist.
        </div>
    }
}

export default NotFound