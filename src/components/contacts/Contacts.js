import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../ContextProvider'

class Contacts extends Component {


    deleteContactFromChild(id) {
        console.log('*********');
        const { contacts } = this.state;
        const newList = contacts.filter((contact) => contact.id !== id)

        this.setState({
            contacts: newList
        })
    }
    render() {

        return (
            <Consumer >
                {value => (
                    <div>

                    <Contact />
                        {value.contacts.map((element) => (
                            <Contact
                                key={element.id}
                                data={element}
                                deleteFromChild={() => this.deleteContactFromChild(element.id)}
                            />
                        ))
                        }
                    </div>
                )
                }
            </Consumer>
        )

    }
}

export default Contacts;
