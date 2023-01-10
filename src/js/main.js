// Import our custom CSS
import '../scss/styles.scss'

// Import only the Bootstrap components we need
import { Dropdown, Offcanvas, Popover } from 'bootstrap';
import { panel } from './panel';
import { ModeloPieza } from './ModeloPieza.js';

// Llamo a las funciones

panel.pintaPanel()

panel.crearNuevaPieza()

panel.insertarPieza()

panel.pintaPanel()

panel.controlTeclas()

document.getElementById('jugar').addEventListener("click", panel.iniciarMovimiento)



  //para detectar que pulsas un boton key down en el addEventListener