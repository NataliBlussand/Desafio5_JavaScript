class Productos{
    constructor(producto,material,cantidad,color){
        this.producto=producto;
        this.material=material;
        this.cantidad=cantidad;
        this.color=color;
    }
    
    comprar(){
        let respuesta = "El producto que estas buscando es ${this.producto} de ${this.material}, queres ${this.cantidad} de color ${this.color}";
        console.log(respuesta);
    }
}

const producto1 = new Productos("bidon 20 lts","polipropileno",200,celeste);
const producto2 = new Productos("bidon 20 lts","pet",200,celeste);
const producto3 = new Productos("bidon 20 lts","policarbonato",200,celeste);

producto1.comprar();
producto2.comprar();
producto3.comprar();

