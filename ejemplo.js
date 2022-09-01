const humano = function (name) {
    return {
      nombre: name,
      genero: '',
      ciudad: 'Bogota',
      decirGenero() {
        console.log(this.nombre + ' mi genero es ' + this.genero)
      },
      decirCiudad() {
        console.log(this.nombre + ' vivo en ' + this.ciudad)
      }
  
    };
  }


  const juan = humano('juan');
//   juan.decirCiudad();
  
  const hombre = function (name) {
    const that = humano(name);
  
    return Object.assign({},
      that,
      { genero: 'Masculino' }
    )
  }
  
  const mujer = function (name) {
    const that = humano(name);
  
    return Object.assign({},
      that,
      { genero: 'Masculino' }
    )
  }
  const david = hombre('David');
  const jane = mujer('Jane');
  
//   david.decirGenero();
//   david.decirCiudad();
  
//   jane.decirGenero();
//   jane.decirCiudad();



  var calculadora = function (a, b){
    let sumar = () => a+b;
    let restar = () => a/b;
    let dividir = () => a/b;
    let multiplicar = () => a*b;
    return { sumar, restar, dividir, multiplicar };
};


const calCientifica = function (a,b){
    const that = calculadora(a, b);
    let potencia = () => a^b;
    let raiz = () => a^(1/b);
    return Object.assign({},
        that, {potencia,raiz}
    )
}

let v = calCientifica(3,5);
let s = v.potencia();
let t = v.raiz();

console.log(s);
console.log(t);


