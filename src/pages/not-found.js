import React from 'react'
import {observer, inject} from 'mobx-react'


class NotFound extends React.Component {
    render() {
        return <div className="notFoundBg">
            The page does not exist.
        </div>
    }
}

export default NotFound