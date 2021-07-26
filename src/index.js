//Importar react y react-dom y vamos a insertar
//el element en el aplicativo

import React from 'react';
import ReactDOM from 'react-dom'


//referencia al componente About.jsx
import About from './components/About';
import {Education} from './components/Education';

//utilizar react dom para poder mostrar en pantalla
//ReactDOM.render(que elemento voy a mostrar,
//donde lo voy a mostrar)
ReactDOM.render(
    <div>
        <About />
        <Education />
    </div>,
    document.getElementById('app')
)