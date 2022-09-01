function pokemon(nombre, tipo){
    this.nombre = nombre;
    this.tipo = tipo;
    
}

function tipoFuego(nombre,tipo, debilidad){
    pokemon.call(this, nombre, tipo);//hereda de pokemon
    this.debilidad = debilidad;
    this.presentarse = function(){
        console.log(`nombre: ${nombre}, tipo: ${tipo}, dibilidad: ${debilidad}`);
    }
}

function tipoElectricidad(nombre, tipo, debilidad){
    pokemon.call(this, nombre, tipo);
    this.debilidad = debilidad;
    this.presentarse = function(){
        console.log(`nombre: ${nombre}, tipo: ${tipo}, dibilidad: ${debilidad}`)
    }
}


const charizard = new tipoFuego("charizard", "fuego", "agua");//notacion de constructor
//const pikachu = Object.create(tipoFuego("pikachu","electricidad", "tierra"));//object.create

console.log(charizard.debilidad)
charizard.presentarse();

//pikachu.presentarse();

tipoElectricidad.prototype = Object.create(pokemon.prototype);
tipoElectricidad.prototype.constructor = tipoElectricidad;

var pikachu = new tipoElectricidad("pikachu", "electricidad","agua");


var pikachu1 = Object.create(tipoElectricidad);

pikachu1.nombre = "pikachu1";
pikachu1.tipo = "electricidad";
pikachu1.debilidad = "agua";

pikachu1.p = function(){
    console.log(`nombre: ${this.nombre}, tipo: ${this.tipo}, dibilidad: ${this.debilidad}`)
}

console.log(pikachu1.nombre);
console.log("pikachuy1");
pikachu1.p();


//crear arreglo
var pokemones = [];
console.log("empieza arreglo")
pokemones[0] = pikachu;
pokemones[1] = pikachu1;

pokemones.forEach( e => {
    console.log(e)
});

console.log(pikachu1 instanceof pokemon)

//pikachu.presentarse();

