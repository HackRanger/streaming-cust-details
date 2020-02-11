import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';

class CustomerModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={'modal ' + this.props.active}>
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Adding New Topic</p>
                        <button class="delete" aria-label="close"></button>
                    </header>
                    <section class="modal-card-body">
                        <div class="field">
                            <label class="label">Organisation Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input"/>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Topic Names</label>
                            <button class="button is-success">Add Topic</button>
                            <div class="control has-icons-left has-icons-right">
                                <List>
                                    <ListItem button>
                                        <ListItemText primary="Topic1"/>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary="Topic2"/>
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Target Cluster</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input"/>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Delegated Admin Users</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input"/>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Mirror Maker Enabled</label>
                            <div class="control">
                                <Switch/>                       
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">AWS-Onprem</label>
                            <div class="control">
                                <Switch/>                       
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Onprem-AWS</label>
                            <div class="control">
                                <Switch/>                       
                            </div>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-success" onClick={this.props.onModalSave}>Save changes</button>
                        <button class="button" onClick={this.props.onModalCancel}>Cancel</button>
                    </footer>
                </div>
            </div>
        );
    }

}

export default CustomerModal;