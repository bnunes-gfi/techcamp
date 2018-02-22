import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
        <h2 className="App-title">Upload Table</h2>
        <ListGroup>
            <ListGroupItem><Link to='/uploadtable/dimvinsummary'>Vin Summary</Link></ListGroupItem>
            <ListGroupItem><Link to='/uploadtable/dimnmscuio'>NMSC UIO</Link></ListGroupItem>
            <ListGroupItem disabled >Incoming Parts Supply</ListGroupItem>
        </ListGroup>
        <h2 className="App-title">Setup Table</h2>
        <ListGroup>
            <ListGroupItem disabled >Remaining UIO</ListGroupItem>
            <ListGroupItem><Link to='/setuptable/tmetcsetupnmscpriority'>NMSC Priority</Link></ListGroupItem>
            <ListGroupItem><Link to='/setuptable/tmetcsetupnmscimplementation'>Target Implementation</Link></ListGroupItem>
            <ListGroupItem disabled >Priority Ratio</ListGroupItem>
        </ListGroup>
        <h2 className="App-title">Validation and Simulation</h2>
        <ListGroup>
            <ListGroupItem ><Link to='/validation/faccampaignuio'>Validation</Link></ListGroupItem>
            <ListGroupItem disabled >Simulation</ListGroupItem>
        </ListGroup>
    </div>
)

export default Home