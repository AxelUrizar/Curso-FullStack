class Coche{
    nombre;
    marca;
    velocidad;

    constructor(){}

    acelerar(){
        this.velocidad += 30;
    }

    frenar(){
        this.velocidad -= 30;
    }
}