import React, { Component } from 'react';
import AdminLayout from "../../../Hoc/AdminLayout";

import FormField from '../../Ui/formField';
import { validate } from "../../Ui/misc"

class AddEditMatch extends Component {

    state = {
        matchId:'',
        formType:'',
        formError: false,
        formSuccess:'',
        teams:[],
        formdata:{
            date:{
                element: 'input',
                value: "",
                config: {
                    label:"Event Date",
                    name: "date_input",
                    type: "date"
                   
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: "",
                showLabel: true

            },
            local:{
                element: 'select',
                value: "",
                config: {
                    label:"Select A Local Team",
                    name: "select_local",
                    type: "select",
                    option:[]
                   
                },
                validation: {
                    required: true
                   
                },
                valid: false,
                validationMessage: "",
                showLabel: false

            }
        }

    }
    render() {
        return (
            <AdminLayout>

                <div className="editmatch_dialog_wrapper">
                    <h2>
                        {this.state.formType}
                    </h2>
                    <div>
                        <form onSubmit={(event) => this.submitForm(event)}>
                            <FormField
                                id={'date'}
                                formdata={this.state.formdata.date}
                                change={(element) => this.updateForm(element)}
                            />
                            <FormField
                                id={'local'}
                                formdata={this.state.formdata.local}
                                change={(element) => this.updateForm(element)}
                            />

                        </form>

                    </div>

                </div>

                    

            </AdminLayout>
        );
    }
}

export default  AddEditMatch;