import React from 'react'
import {Provider} from 'mobx-react'
import {
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import * as Pages from './pages/index'

export default (stores) => {
    return <Router>
        <Provider {...stores} >
            <Switch>
                <Route exact path='/nav' component={Pages.Nav}/>
                <Route exact path='/pic' component={Pages.Pic}/>
                <Route component={Pages.NotFound}/>
            </Switch>
        </Provider>
    </Router>
}