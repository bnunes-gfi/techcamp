import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Uploadtable from './Uploadtable'
import Setuptable from './Setuptable'
import Validation from './Validation'


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/uploadtable' component={Uploadtable}/>
            <Route path='/setuptable' component={Setuptable}/>
            <Route path='/validation' component={Validation}/>
        </Switch>
    </main>
)

export default Main
