import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const priorityType = {
    1: 'G1',
    2: 'G2',
    3: 'G3'
}

function onAfterSaveCell(row, cellName, cellValue) {

    let data = '{\n';
    let tmp = "";

    for (const prop in row) {
        tmp = '"' + row[prop] + '"';
        if (prop==="nmscprioExcelFileName")
            tmp = tmp.replace(/\\/g, "\\\\");
        else
            tmp += ',';

        data += '"' + prop + '": ' + tmp + '\n';
    }
    data += '}';

    console.log('Sending for save:', data);

    fetch('/tmetcsetupnmscpriority/save', {
        method: 'PUT',
        body: data,
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}

const cellEditProp = {
    mode: 'click',
    blurToSave: true,
//    beforeSaveCell: onBeforeSaveCell, // a hook for before saving cell
    afterSaveCell: onAfterSaveCell  // a hook for after saving cell
};

class Tmetcsetupnmscpriority extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tmetcsetupnmscpriority: []
        };
    }

    componentWillMount() {
        fetch('/tmetcsetupnmscpriority/list')
            .then((response) => {
                return response.json()
            })
            .then((tmetcsetupnmscpriority) => {
                this.setState({tmetcsetupnmscpriority: tmetcsetupnmscpriority})
            })
    }

    render() {

        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>NMSC PRIORITY</BreadcrumbItem>
                </Breadcrumb>
                <a onClick={ this.handlerClickCleanFiltered.bind(this) } style={ { cursor: 'pointer' } }>Clear filters</a>
                <BootstrapTable version='4' ref='tmetcsetupnmscpriority' cellEdit={ cellEditProp } data={this.state.tmetcsetupnmscpriority} pagination keyBoardNav striped hover>
                    <TableHeaderColumn hidden width='50' dataField='pk' headerAlign='center' dataAlign='center' isKey={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn ref='nmscprioNmsc' editable={ false } dataField='nmscprioNmsc' filter={ { type: 'TextFilter', delay: 1000 } } headerAlign='center' dataAlign='center' dataSort={true}>NMSC | COUNTRY</TableHeaderColumn>
                    <TableHeaderColumn ref='nmscprioPartNumber' editable={ false } dataField='nmscprioPartNumber' filter={ { type: 'TextFilter', delay: 1000 } } headerAlign='center' dataAlign='center' dataSort={true}>PART NUMBER</TableHeaderColumn>
                    <TableHeaderColumn ref='nmscprioPriorityBk' dataField='nmscprioPriorityBk' filter={ { type: 'SelectFilter', options: priorityType}} editable={ { type: 'select', options: { values: ['G1','G2','G3'] } }} headerAlign='center' dataAlign='center' dataSort={true}>PRIORITY *</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }

    handlerClickCleanFiltered() {
        this.refs.nmscprioNmsc.cleanFiltered();
        this.refs.nmscprioPartNumber.cleanFiltered();
        this.refs.nmscprioPriorityBk.cleanFiltered();
    }
}

export default Tmetcsetupnmscpriority;
