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

function enumFormatter(cell, row, enumObject) {
    return enumObject[cell];
}

class Dimvinsummary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dimvinsummaries: []
        };
    }

    componentWillMount() {
        fetch('/dimvinsummary/list')
            .then((response) => {
                return response.json()
            })
            .then((dimvinsummaries) => {
                this.setState({dimvinsummaries: dimvinsummaries})
            })
    }

    render() {
        return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>VIN SUMMARY</BreadcrumbItem>
            </Breadcrumb>
            <a onClick={ this.handlerClickCleanFiltered.bind(this) } style={ { cursor: 'pointer' } }>Clear filters</a>
            <BootstrapTable version='4' ref='dimvinsummaries' pagination keyBoardNav data={this.state.dimvinsummaries} striped hover>
                <TableHeaderColumn hidden width='50' dataField='pk' headerAlign='center' dataAlign='center' isKey={true}>ID</TableHeaderColumn>
                <TableHeaderColumn ref='vinsumNmsc3_Bk' dataField='vinsumNmsc3_Bk' filter={ { type: 'TextFilter', delay: 1000 } } headerAlign='right' dataAlign='right' dataSort={true}>NMSC</TableHeaderColumn>
                <TableHeaderColumn ref='vinsumNameCountryCd' dataField='vinsumNameCountryCd' filterFormatted dataFormat={ enumFormatter } formatExtraData={ countryType } filter={ { type: 'SelectFilter', options: countryType }}>COUNTRY</TableHeaderColumn>
                <TableHeaderColumn ref='vinsumPnBk' dataField='vinsumPnBk' filter={ { type: 'TextFilter', delay: 1000 } } headerAlign='center' dataAlign='center' dataSort={true}>PART NUMBER</TableHeaderColumn>
                <TableHeaderColumn ref='vinsumYearBk' dataField='vinsumYearBk' filter={ { type: 'NumberFilter', delay: 1000, defaultValue: { comparator: '=' } } } headerAlign='center' dataAlign='center' dataSort={true}>LINE OF YEAR</TableHeaderColumn>
                <TableHeaderColumn ref='vinsumVinQty' dataField='vinsumVinQty' filter={ {type: 'NumberFilter', delay: 1000, defaultValue: { comparator: '=' }} } headerAlign='center' dataAlign='center' dataSort={true}>VIN QTY</TableHeaderColumn>
            </BootstrapTable>
        </div>
        );
    }

    handlerClickCleanFiltered() {
        this.refs.vinsumNmsc3_Bk.cleanFiltered();
        this.refs.vinsumNameCountryCd.cleanFiltered();
        this.refs.vinsumPnBk.cleanFiltered();
        this.refs.vinsumPnBk.cleanFiltered();
        this.refs.vinsumYearBk.cleanFiltered();
        this.refs.vinsumVinQty.cleanFiltered();
    }
}

export default Dimvinsummary;


