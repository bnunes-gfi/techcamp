import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const validationType = {
    'Approve': 'Approve',
    'Pending and User decision': 'Pending and User decision'
}

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

function onAfterSaveCell(row, cellName, cellValue) {

    let data = '{\n';
    let value = "";

    for (const prop in row) {
        value = '"' + row[prop] + '"';
        if ((prop==="campuioExcelFileNameCd") || (prop==="campuioBk")) {
            value = value.replace(/\\/g, "\\\\");
        }
        if ((prop==="campuioValidatedCd"))
            data += '"' + prop + '": ' + value + '\n';
        else
            data += '"' + prop + '": ' + value + ',\n';
    }
    data += '}';

    console.log('Sending for save:', data);

    fetch('/faccampaignuio/save', {
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
    afterSaveCell: onAfterSaveCell  // a hook for after saving cell
};

function uioValidator(value, row) {
    const nan = isNaN(parseInt(value, 10));
    if (nan) {
        return 'UIO must be a integer!';
    }
    return true;
}


class FacCampaignUio extends Component {

    onRowSelectApprove = (row, isSelected) => {

        let data = '{\n';
        let value = "";

        if (isSelected) {
            for (const prop in row) {
                value = '"' + row[prop] + '"';
                if ((prop === "campuioExcelFileNameCd") || (prop === "campuioBk")) {
                    value = value.replace(/\\/g, "\\\\");
                }

                if ((prop === "campuioValidationCd"))
                    value = "\"Approve\"";

                if ((prop === "campuioValidatedCd"))
                    data += '"' + prop + '": ' + value + '\n';
                else
                    data += '"' + prop + '": ' + value + ',\n';
            }

            data += '}';

            console.log('Sending for save:', data);

            // update the approve value on database
            fetch('/faccampaignuio/save', {
                method: 'PUT',
                body: data,
                headers: new Headers({
                    'Content-Type': 'application/json',
                })
            })
                .then(response => response.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response));

            // update the value on table
            fetch('/faccampaignuio/list')
                .then((response) => {
                    return response.json()
                })
                .then((faccampaignuio) => {
                    this.setState({faccampaignuio: faccampaignuio})
                })
        }
    }

    onSelectAllApprove = (isSelected, rows) => {
        for (let i = 0; i < rows.length; i++) {
            this.onRowSelectApprove(rows[i], isSelected)
        }
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            faccampaignuio: []
        };
    }

    componentWillMount() {
        fetch('/faccampaignuio/list')
            .then((response) => {
                return response.json()
            })
            .then((faccampaignuio) => {
                this.setState({faccampaignuio: faccampaignuio})
            })
    }

    render() {

        const selectRowProp = {
            mode: 'checkbox',
            bgColor: 'gray',
            clickToSelect: true,
            onSelect: this.onRowSelectApprove,
            onSelectAll: this.onSelectAllApprove
        };

        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>VALIDATION</BreadcrumbItem>
                </Breadcrumb>
                <a onClick={ this.handlerClickCleanFiltered.bind(this) } style={ { cursor: 'pointer' } }>Clear filters</a>
                <BootstrapTable version='4' scrollTop={ 'Bottom' } ref='faccampaignuio' selectRow={ selectRowProp } cellEdit={ cellEditProp } pagination keyBoardNav data={this.state.faccampaignuio} striped hover>
                    <TableHeaderColumn hidden editable={ false } headerAlign='center' dataAlign='center' width='50' dataField='pk' isKey={true} autovalue dataSort={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn width='10%' ref='campuioVinQty' editable={ false } dataField='campuioVinQty' filter={ { type: 'NumberFilter', delay: 1000, defaultValue: { comparator: '=' }} } headerAlign='center' dataAlign='center' dataSort={true}>VIN QTY</TableHeaderColumn>
                    <TableHeaderColumn width='10%' ref='campuioSystemUioQty' editable={ false } dataField='campuioSystemUioQty' filter={ { type: 'NumberFilter', delay: 1000, defaultValue: { comparator: '=' }} } headerAlign='center' dataAlign='center'>SYSTEM UIO QTY</TableHeaderColumn>
                    <TableHeaderColumn width='10%' ref='campuioNmscuioQty' editable={ false } dataField='campuioNmscuioQty' filter={ { type: 'NumberFilter', delay: 1000, defaultValue: { comparator: '=' }} } headerAlign='center' dataAlign='center' dataSort={true}>NMSC UIO QTY</TableHeaderColumn>
                    <TableHeaderColumn width='5%' ref='campuioNmsc3_Bk' editable={ false } dataField='campuioNmsc3_Bk' filter={ { type: 'TextFilter', delay: 1000} } headerAlign='right' dataAlign='right' dataSort={true}>NMSC</TableHeaderColumn>
                    <TableHeaderColumn width='10%' ref='campuioNameCountryCd' editable={ false } dataField='campuioNameCountryCd' formatExtraData={ countryType } filter={ { type: 'SelectFilter', options: countryType}} headerAlign='left' dataAlign='left'>COUNTRY</TableHeaderColumn>
                    <TableHeaderColumn width='10%' ref='campuioPnBk' editable={ false } dataField='campuioPnBk' filter={ {type: 'TextFilter', delay: 1000 }} headerAlign='center' dataAlign='center' dataSort={true}>PART NUMBER</TableHeaderColumn>
                    <TableHeaderColumn width='10%' ref='campuioValidationCd' dataField='campuioValidationCd' formatExtraData={ countryType } filter={ { type: 'SelectFilter', options: validationType}} editable={ { type: 'select', options: { values: ['Approve','Pending and User decision'] } }} headerAlign='center' dataAlign='center' dataSort={true}>VALIDATION *</TableHeaderColumn>
                    <TableHeaderColumn width='20%' ref='campuioDescriptionCd' editable={ false } dataField='campuioDescriptionCd' filter={ {type: 'TextFilter', delay: 1000 }} headerAlign='center' dataAlign='center' dataSort={true}>DESCRIPTION</TableHeaderColumn>
                    <TableHeaderColumn width='10%' ref='campuioFinalDecisionQty' dataField='campuioFinalDecisionQty' filter={ {type: 'TextFilter', delay: 1000 }} editable={ { validator: uioValidator } } headerAlign='center' dataAlign='center' dataSort={true}>VALIDATED UIO *</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
    handlerClickCleanFiltered() {
        this.refs.campuioVinQty.cleanFiltered();
        this.refs.campuioSystemUioQty.cleanFiltered();
        this.refs.campuioNmscuioQty.cleanFiltered();
        this.refs.campuioNmsc3_Bk.cleanFiltered();
        this.refs.campuioNameCountryCd.cleanFiltered();
        this.refs.campuioPnBk.cleanFiltered();
        this.refs.campuioValidationCd.cleanFiltered();
        this.refs.campuioDescriptionCd.cleanFiltered();
        this.refs.campuioFinalDecisionQty.cleanFiltered();
    }


}

export default FacCampaignUio;