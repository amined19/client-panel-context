import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
        default: 
            return state;
    }
}

export const Consumer = Context.Consumer;


export default class ContextProvider extends Component {

    state = {
        contacts: [
            { id: 1, nom: "toto 01", tel: "010203", email: "skklk@" },
            { id: 2, nom: "toto 02", tel: "040506", email: "aeer@" },
            { id: 3, nom: "toto 03", tel: "070809", email: "utht@" }
        ],

        dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>

        )
    }
}


