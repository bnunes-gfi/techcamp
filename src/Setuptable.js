import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Tmetcsetupnmscimplementation from './Tmetcsetupnmscimplementation';
import Tmetcsetupnmscpriority from './Tmetcsetupnmscpriority';

const Setuptable = () => (
    <Switch>
        <Route exact path='/setuptable/tmetcsetupnmscimplementation' component={Tmetcsetupnmscimplementation}/>
        <Route exact path='/setuptable/tmetcsetupnmscpriority' component={Tmetcsetupnmscpriority}/>
    </Switch>
)

export default Setuptable