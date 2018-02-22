import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function onAfterSaveCell(row, cellName, cellValue) {

    let data = '{\n';
    let tmp = "";

    for (const prop in row) {
        tmp = '"' + row[prop] + '"';
        if (prop==="implExcelFileName")
            tmp = tmp.replace(/\\/g, "\\\\");
        else
            tmp += ',';

        data += '"' + prop + '": ' + tmp + '\n';
    }
    data += '}';

    console.log('Sending for save:', data);

    fetch('/tmetcsetupnmscimplementation/save', {
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

function porcentFormater(cell, row) {

    var value=cell*100;

    return parseFloat(value).toFixed(2)+'%';
}

function targetValidator(value, row) {
    const nan = isNaN(parseFloat(value));
    if ((nan) || (parseFloat(value)>1))  {
        return 'UIO must be a decimal number less than 1!';
    }
    return true;
}

const cellEditProp = {
    mode: 'click',
    blurToSave: true,
//    beforeSaveCell: onBeforeSaveCell, // a hook for before saving cell
    afterSaveCell: onAfterSaveCell  // a hook for after saving cell
};

class Tmetcsetupnmscimplementation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tmetcsetupnmscimplementation: []
        };
    }

    componentWillMount() {
        fetch('/tmetcsetupnmscimplementation/list')
            .then((response) => {
                return response.json()
            })
            .then((tmetcsetupnmscimplementation) => {
                this.setState({tmetcsetupnmscimplementation: tmetcsetupnmscimplementation})
            })
    }

    render() {
        return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>TARGET IMPLEMENTATION</BreadcrumbItem>
            </Breadcrumb>
            <a onClick={ this.handlerClickCleanFiltered.bind(this) } style={ { cursor: 'pointer' } }>Clear filters</a>
            <BootstrapTable version='4' ref='tmetcsetupnmscimplementation' cellEdit={ cellEditProp } pagination keyBoardNav data={this.state.tmetcsetupnmscimplementation} striped hover>
                <TableHeaderColumn hidden width='50' dataField='pk' headerAlign='center' dataAlign='center' isKey={true}>ID</TableHeaderColumn>
                <TableHeaderColumn ref='implNmsc' editable={ false } dataField='implNmsc' filter={ { type: 'TextFilter', delay: 1000 } } headerAlign='center' dataAlign='center' dataSort={true}>NMSC | COUNTRY</TableHeaderColumn>
                <TableHeaderColumn ref='implPartNumber' editable={ false } dataField='implPartNumber' filter={ { type: 'TextFilter', delay: 1000 } } headerAlign='center' dataAlign='center' dataSort={true}>PART NUMBER</TableHeaderColumn>
                <TableHeaderColumn ref='implImplementationRatio' dataField='implImplementationRatio' editable={ { validator: targetValidator } } filter={ {type: 'NumberFilter', delay: 1000, defaultValue: { comparator: '=' }} } dataFormat={ porcentFormater } filterFormatted headerAlign='center' dataAlign='center' dataSort={true}>IMPLEMENTATION TARGET *</TableHeaderColumn>
            </BootstrapTable>
        </div>
        );
    }

    handlerClickCleanFiltered() {
        this.refs.implNmsc.cleanFiltered();
        this.refs.implPartNumber.cleanFiltered();
        this.refs.implImplementationRatio.cleanFiltered();
    }
}

export default Tmetcsetupnmscimplementation;


