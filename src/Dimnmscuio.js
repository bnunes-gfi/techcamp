import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn  } from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const countryType = {
    'ADRIA': 'ADRIA',
    'AUSTRIA': 'AUSTRIA',
    'AZERBAIJAN': 'AZERBAIJAN',
    'BALTIC': 'BALTIC',
    'BELGIUM': 'BELGIUM',
    'CANARY IS': 'CANARY IS',
    'CYPRUS': 'CYPRUS',
    'DENMARK': 'DENMARK',
    'FINLAND': 'FINLAND',
    'FRANCE': 'FRANCE',
    'GEORGIA': 'GEORGIA',
    'GERMANY (& N.A.T.O.)': 'GERMANY (& N.A.T.O.)',
    'GIBRALTAR': 'GIBRALTAR',
    'GREECE': 'GREECE',
    'HUNGARY': 'HUNGARY',
    'ICELAND': 'ICELAND',
    'IRELAND': 'IRELAND',
    'ISRAEL': 'ISRAEL',
    'ITALY': 'ITALY',
    'KAZAKHSTAN': 'KAZAKHSTAN',
    'MALTA': 'MALTA',
    'NATO GERMANY': 'NATO GERMANY',
    'NETHERLANDS': 'NETHERLANDS',
    'NORWAY': 'NORWAY',
    'POLAND': 'POLAND',
    'PORTUGAL': 'PORTUGAL',
    'ROMANIA': 'ROMANIA',
    'RUSSIA': 'RUSSIA',
    'SOUTHAFRICA': 'SOUTHAFRICA',
    'SPAIN': 'SPAIN',
    'SWEDEN': 'SWEDEN',
    'SWITZERLAND': 'SWITZERLAND',
    'TURKEY': 'TURKEY',
    'UKRAINE': 'UKRAINE',
    'UNITED KINGDOM': 'UNITED KINGDOM'
};

class Dimnmscuio extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            dimnmscuio: []
        };
    }

    componentWillMount() {
        fetch('/dimnmscuio/list')
            .then((response) => {
                return response.json()
            })
            .then((dimnmscuio) => {
                this.setState({dimnmscuio: dimnmscuio})
            })
    }

    render() {
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>NMSC UIO</BreadcrumbItem>
                </Breadcrumb>
                <a onClick={ this.handlerClickCleanFiltered.bind(this) } style={ { cursor: 'pointer' } }>Clear filters</a>
                <BootstrapTable version='4' ref='dimnmscuio' pagination keyBoardNav data={this.state.dimnmscuio} striped hover>
                    <TableHeaderColumn hidden width='50' dataField='pk' headerAlign='center' dataAlign='center' isKey={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn ref='nmscuioNmsc3_Bk' dataField='nmscuioNmsc3_Bk' filter={ { type: 'TextFilter', delay: 1000 } } headerAlign='right' dataAlign='right' dataSort={true}>NMSC | Country</TableHeaderColumn>
                    <TableHeaderColumn hidden formatExtraData={ countryType } filter={ { type: 'SelectFilter', options: countryType}}>COUNTRY</TableHeaderColumn>
                    <TableHeaderColumn ref='nmscuioPnBk' dataField='nmscuioPnBk' filter={ { type: 'TextFilter', delay: 1000 } } headerAlign='center' dataAlign='center' dataSort={true}>PART NUMBER</TableHeaderColumn>
                    <TableHeaderColumn ref='nmscuioUioQty' dataField='nmscuioUioQty' filter={ { type: 'NumberFilter', delay: 1000, defaultValue: { comparator: '=' } } } headerAlign='center' dataAlign='center' dataSort={true}>NMSCUIO QTY</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
    handlerClickCleanFiltered() {
        this.refs.nmscuioNmsc3_Bk.cleanFiltered();
        this.refs.nmscuioPnBk.cleanFiltered();
        this.refs.nmscuioUioQty.cleanFiltered();
    }
}

export default Dimnmscuio;


