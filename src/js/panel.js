import { ModeloPieza } from "./ModeloPieza";

export var panel = {
    matriz: [
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    pintaPanel: ()=>{
        var html = ''
        for(let y = 1; y < panel.matriz.length-1; y++){

            html += '<div class="p-fila">'

            for(let x = 1; x < panel.matriz[y].length-1; x++){
                const valorMatriz = panel.matriz[y][x];
                html+= `<div class="celda">${valorMatriz}</div>`  
            }
            html += '</div>'
        }
        document.getElementById('panel').innerHTML = html
    },
    crearNuevaPieza: ()=>{
        const modelo1 = Math.random();
        const modelo = Math.round(modelo1);

        let pieza = new  ModeloPieza(modelo)
        var x = Math.floor(Math.random()*((11-pieza.longitud)-1+1)+1);
        pieza.x = x

        return pieza
    },

     nuevaPieza: panel.crearNuevaPieza(),

    insertarPieza: ()=>{
        xPieza = 0
        yPieza = 0
       x = panel.nuevaPieza.x       
       for(let altura = 0; altura<panel.nuevaPieza.altura; altura++){
            for(let longitud = x; longitud<=x+panel.nuevaPieza.longitud; longitud++){
                panel.matriz[altura][longitud] = panel.nuevaPieza[yPieza][xPieza]
                xPieza = xPieza + 1
            }
            xPieza = 0
            yPieza = yPieza + 1
       }
    },

}