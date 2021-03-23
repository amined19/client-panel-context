import React, { Component } from 'react';

class AddContact extends Component {


    state = {
        nom: '',
        email: '',
        tel: ''
    }


    onChangeInputValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {

        const { nom, email, tel } = this.state;
        return (
            <div>
                <form onSubmit={this.submit}>
                    <h3>Ajout Contact</h3>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-text">

                                <div className="form-group">
                                    <label htmlFor="aa">Nom</label>
                                    <input type="text" name="nom" id="aa" className="form-control" onChange={this.onChangeInputValue} value={nom} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bb">Adresse Mail</label>
                                    <input type="text" name="email" id="bb" className="form-control" onChange={this.onChangeInputValue} defaultValue={email} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cc">Telephone</label>
                                    <input type="text" name="tel" id="cc" className="form-control" onChange={this.onChangeInputValue} defaultValue={tel} />
                                </div>

                                <button type="submit" name="" id="" className="btn btn-success btn-block" >Add new contact</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddContact;
