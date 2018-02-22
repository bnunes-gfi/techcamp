import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FacCampaignUio from './FacCampaignUio';

const Validation = () => (
    <Switch>
        <Route exact path='/validation/faccampaignuio' component={FacCampaignUio}/>
    </Switch>
)

export default Validation