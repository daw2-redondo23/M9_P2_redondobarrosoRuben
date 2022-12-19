// Import our custom CSS
import '../scss/styles.scss'

// Import only the Bootstrap components we need
import { Dropdown, Offcanvas, Popover } from 'bootstrap';
import { panel } from './panel';
import { ModeloPieza } from './ModeloPieza.js';


// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })
  console.log(panel.matriz);
console.log(panel.nuevaPieza);
/* 
  console.log(panel.pintaPanel());

  const modelo = 0
  const pieza = new  ModeloPieza(modelo)
  console.log(pieza); */


  //para detectar que pulsas un boton key down en el addEventListener