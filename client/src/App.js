import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import {Provider} from 'react-redux';
import store from './store';
import ItemModal from "./components/ItemModal";

function App() {
    return (
        <Provider store={store}>
            <AppNavbar/>
            <ItemModal/>
            <ShoppingList/>
        </Provider>
    );
}

export default App;
