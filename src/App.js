import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import NavBar from './components/navbar/NavBar';
import Contacts from './components/contacts/Contacts';
import ContextProvider from './components/ContextProvider'
import AddContact from './components/contacts/AddContact'

function App() {

  let name = "toto";
  let a = 10;
  let b = 20;
  return (

    <ContextProvider>
      <div className="App">
        <NavBar title="* Gestionnaire de contacts *" />
        <h3>test react 001</h3>

        <AddContact/>
        <Contacts />

        <p className="text-danger text-uppercase font-weight-bold">
          {name} fait l'addition de {a} et {b} est {a + b}
        </p>
      </div>
    </ContextProvider>
  );
}

export default App;
