import { ModeloPieza } from "./ModeloPieza";

export const panel = {
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
    nuevaPieza: "",
    pintaPanel: ()=>{
        var html = ''
        for(let y = 1; y < panel.matriz.length-1; y++){

            html += '<div class="p-fila">'

            for(let x = 1; x < panel.matriz[y].length-1; x++){
                const valorMatriz = panel.matriz[y][x];
                if(valorMatriz == 1){
                    html+= `<div class="celda bg-danger"></div>` 
                }
                else{
                    html+= `<div class="celda"></div>`
                }
                
            }
            html += '</div>'
        }
        document.getElementById('panel').innerHTML = html
    },
    crearNuevaPieza: ()=>{
        const modelo1 = Math.random();
        const modelo = Math.round(modelo1);
       
        panel.nuevaPieza = new  ModeloPieza(modelo)
        console.log(panel.nuevaPieza);
        let x = Math.ceil(Math.random()*((10-panel.nuevaPieza.longitud)));
        panel.nuevaPieza.x = x
    },

    insertarPieza: ()=>{
        let x = panel.nuevaPieza.x
        let y = panel.nuevaPieza.y
        
        for(let alt = 0; alt< panel.nuevaPieza.altura; alt++, y++){
            for(let long = 0; long< panel.nuevaPieza.longitud; long++, x++){
                panel.matriz[y][x]=1
            }
            x = panel.nuevaPieza.x
        }
    },
    controlTeclas: ()=>{
        document.addEventListener("keydown", function(event){
            console.log(event.key);
            if(event.key == 'ArrowRight'){
                panel.moverDra();
            }
            else if(event.key == 'ArrowLeft'){
                panel.moverIzq()
            }
            else if(event.key == 'ArrowDown'){
                panel.bajar()
            }
            else if(event.key == 'ArrowUp'){
                let resultado = panel.girarComprobacion()
                if(resultado == true){
                    console.log("puede girar");
                    panel.borrar()
                    panel.nuevaPieza.girar()
                    panel.insertarPieza()
                    panel.pintaPanel()
                }
                else{
                    console.log("no puede girar");
                }
            }
        })
    },
    borrar: ()=>{
        let x = panel.nuevaPieza.x
        let y = panel.nuevaPieza.y

        for(let alt = 0; alt< panel.nuevaPieza.altura; alt++, y++){
            for(let long = 0; long< panel.nuevaPieza.longitud; long++, x++){
                panel.matriz[y][x]=0
            }
            x = panel.nuevaPieza.x
        }
    },
    moverDra: ()=>{
        panel.borrar()
        if(panel.nuevaPieza.x <=9 && panel.nuevaPieza.x + panel.nuevaPieza.longitud < 11){
            panel.nuevaPieza.x = panel.nuevaPieza.x + 1
        }
        else{
            console.log("limite derecha");
        }
        panel.insertarPieza()
        panel.pintaPanel()
        console.log(panel.nuevaPieza);
    },
    moverIzq: ()=>{
        panel.borrar()
        if(panel.nuevaPieza.x > 1){
            panel.nuevaPieza.x = panel.nuevaPieza.x -1
            
        }
        else{
            console.log("limite izquierda");
        }
        panel.insertarPieza()
        panel.pintaPanel()
        console.log(panel.nuevaPieza);
    },
    bajar: ()=>{
        panel.borrar()
        if(panel.nuevaPieza.y<20 && panel.nuevaPieza.y + panel.nuevaPieza.altura <21){
            panel.nuevaPieza.y = panel.nuevaPieza.y + 1
            console.log("Prueba");
        }
        else{
            console.log("limite abajo");
        }
        panel.insertarPieza()
        panel.pintaPanel()
        console.log(panel.nuevaPieza.y);
    },
    iniciarMovimiento: ()=>{
       let intervaloBajar = setInterval(panel.bajar,3000)
       console.log("ha entrado");
    },
    girarComprobacion: ()=>{
        let resultadoGiro = false

        panel.borrar()
        panel.nuevaPieza.girar()

        if(panel.nuevaPieza.x + panel.nuevaPieza.longitud <=11 && panel.nuevaPieza.y + panel.nuevaPieza.altura <= 21){
            resultadoGiro = true
        }
        panel.nuevaPieza.girar()
        panel.nuevaPieza.girar()
        panel.nuevaPieza.girar()
        return resultadoGiro
    }
}