import React from 'react'
import CSSModules from 'react-css-modules'
import { NavLink } from 'react-router-dom'
import styles from '../css/navBar.css'

@CSSModules(styles, { allowMultiple: true, handleNotFoundStyleName: 'log'} )
class NavBar extends React.Component {
    render() {
        return (
            <div styleName="bg">
                <div styleName="nav-bar">
                    <NavLink exact styleName="nav-item-home" activeClassName={styles['nav-item-active-home']} to="/">首页</NavLink>
                    <NavLink exact styleName="nav-item-pics" activeClassName={styles['nav-item-active-pics']} to="/pic/2">图片</NavLink>
                    <NavLink exact styleName="nav-item-user" activeClassName={styles['nav-item-active-user']} to="/user">我的</NavLink>
                </div>
            </div>
        )
    }
}

export default NavBar