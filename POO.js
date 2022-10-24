class Poligano {
    constructor(altura, largura) {
        this.altura = prompt("Digite a altura do poligano");
        this.largura = prompt("Digite a largura do poligano");
    }


    get area() {
        return this.calcularArea();
    }

    calcularArea() {
        return this.altura * this.largura;
    }
}

// criar o objeto

let poligano = new Poligano();
console.log(poligano.area)