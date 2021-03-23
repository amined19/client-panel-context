import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../ContextProvider'
import './contact.css'



class Contact extends Component {

    state = {
        visibilite: true
    }

    showMessage(msg) {
        this.setState({
            visibilite: !this.state.visibilite
        }
        );
    }

    // deleteContact(contactName) {
    //     this.props.deleteFromChild && this.props.deleteFromChild();
    //     //console.log(`contact  ${contactName} deleted !`);
    // }
    deleteContact = (id, dispatch) => {
        dispatch({
            type: "DELETE_CONTACT",
            payload: id
        })
    }


    render() {
        const {id, nom, tel, email } = this.props.data;
        const { visibilite } = this.state;


        return (
            
            <Consumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        {nom}
                                        <i style={{ cursor: 'pointer' }} className="fa fa-sort-down" onClick={this.showMessage.bind(this, nom)} />
                                        <i style={{ color: 'red', cursor: 'pointer', float: 'right' }} className="fa fa-times" aria-hidden="true" onClick={() => this.deleteContact(id, dispatch)} />
                                    </h4>

                                    {visibilite ?
                                        (
                                            <ul className="list-group ">
                                                <li className="list-group-item bg-info">{tel}</li>
                                                <li className="list-group-item bg-light">{email}</li>
                                            </ul>
                                        ) : null
                                    }
                                </div>
                            </div>

                        )
                    }

                }

            </Consumer>


        )
    }
}

Contact.defaultProps = {
    data: {
        nom: "nnnn",
        tel: "0000",
        email: "my@email.com"
    }

}

Contact.propTypes = {
    data: PropTypes.object.isRequired,
}


export default Contact;
