import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dimvinsummary from './Dimvinsummary';
import Dimnmscuio from './Dimnmscuio';

// The Upload Table component matches one of three different routes
// depending on the full pathname
const Uploadtable = () => (
    <Switch>
        <Route exact path='/uploadtable/dimvinsummary' component={Dimvinsummary}/>
        <Route exact path='/uploadtable/dimnmscuio' component={Dimnmscuio}/>
    </Switch>
)

export default Uploadtable