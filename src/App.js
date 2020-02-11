import React from 'react';
import logo from './logo.svg';
import './App.css';
import MaterialTable from "material-table";
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CustomerModal from './CustomerModal';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mydata: [
                {
                    org: "IXCB",
                    topicnames: [
                        "topic1", "topic2", "topic3"
                    ],
                    cluster: "AWS",
                    delegatedadmin: "sjxnfm",
                    mirrormaker: true,
                    awstoonprem: true,
                    onpremtoaws: false
                }
            ],
            isNewCustomerActive: ""
        }
        this.handleButtonClick = this
            .handleButtonClick
            .bind(this);
        this.handleOnModalCancelClick = this
            .handleOnModalCancelClick
            .bind(this);
        this.handleOnModalSaveClick = this
            .handleOnModalSaveClick
            .bind(this);

    }

    handleButtonClick() {
        if (this.state.isNewCustomerActive === "") {
            this.setState({isNewCustomerActive: "is-active"});
        }
    }

    handleOnModalCancelClick() {
        this.setState({isNewCustomerActive: ""});
    }

    handleOnModalSaveClick() {
        this.setState({isNewCustomerActive: ""});
    }

    render() {
        return (
            <div className="container">
                <section class="hero is-primary">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="level">
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading">Topics</p>
                                        <p class="title">150</p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading">Users</p>
                                        <p class="title">123</p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading">Certificates</p>
                                        <p class="title">500</p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading">Mirror Maker</p>
                                        <p class="title">100</p>
                                    </div>
                                </div>

                            </h1>
                        </div>
                    </div>
                </section>
                <div class="columns">
                    <div class="column is-one-quarter">
                        <nav class="level">
                            <div class="level-left">
                                <p class="level-item has-text-centered is-8">
                                    <a class="link is-info">Home</a>
                                </p>
                                <p class="level-item has-text-centered is-8">
                                    <a class="link is-info">Menu</a>
                                </p>
                                <p class="level-item has-text-centered is-8">
                                    <a class="link is-info">Topics</a>
                                </p>
                                <p class="level-item has-text-centered is-8">
                                    <a class="link is-info">Contact</a>
                                </p>
                            </div>

                        </nav>
                    </div>
                </div>
                <section>
                    <button class="button is-primary" onClick={this.handleButtonClick} onModalSave={this.s}>Add New Topic</button>
                </section>
                <section class="section">
                    <MaterialTable
                        columns={[
                        {
                            title: "Organisation",
                            field: "org"
                        }, {
                            title: "Topics",
                            field: "topicnames"
                        }, {
                            title: "Target Cluster",
                            field: "cluster",
                            render: rowData => <Select labelId="demo-simple-select-label" id="demo-simple-select">
                                    <MenuItem>Onprem</MenuItem>
                                    <MenuItem>AWS</MenuItem>
                                    <MenuItem>Both</MenuItem>
                                </Select>
                        }, {
                            title: "Delegated Admin",
                            field: "delegatedadmin"
                        }, {
                            title: "Mirror Maker Enabled",
                            field: "mirrormaker"
                        }, {
                            title: "AWS-Onprem",
                            field: "awstoonprem"
                        }, {
                            title: "Onprem-AWS",
                            field: "onpremtoaws"
                        }
                    ]}
                        data={this.state.mydata}
                        title="Streaming Platform Customer List"/>
                </section>
                <section class="section">
                    <CustomerModal active={this.state.isNewCustomerActive} onModalSave={this.handleOnModalSaveClick} onModalCancel={this.handleOnModalCancelClick}/>
                </section>
            </div>
        );

    }
}

export default App;