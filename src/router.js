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
                <Route exact path='/faq' component={Pages.Faq}/>
                <Route exact path='/slide' component={Pages.Slide}/>
                <Route exact path='/hand-slide' component={Pages.HandSlide}/>
                <Route exact path='/video' component={Pages.Video}/>
                <Route exact path='/snow' component={Pages.Snow}/>
                <Route component={Pages.NotFound}/>
            </Switch>
        </Provider>
    </Router>
}