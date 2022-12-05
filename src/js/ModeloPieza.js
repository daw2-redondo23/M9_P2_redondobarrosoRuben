import { models } from "./models.js";

export class ModeloPieza {
    constructor(modelo){
        this.modelo = modelo
        this.angulo = 0
        this.matriz = models[modelo].matriz[this.angulo]
        this.x = 0
        this.y = 0
        this.longitud = this.matriz[0].length
        this.altura = this.matriz.length
    }
    girar = ()=>{
          
    }
    
}