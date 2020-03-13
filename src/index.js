    import React , {Component} from 'react';
    import ReactDOM from 'react-dom';
    import axios from 'axios';
   
    import App from './app.js';
    import Users from './users.js';
    import Things from './things.js';
    import UserForm from './userForm';
    import ThingForm from './thingForm.js'
    import UserThingForm from './userThingForm.js'


    const { useState, useEffect } = React;

    const root = document.querySelector('#root');
    ReactDOM.render(<App />, root);
