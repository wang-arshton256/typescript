interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    
    // Once a method is declared in an interface it should be added to all 
    // objects to avoid having an error
    display():void; 
}

var product1:Product = {
    id: 123,
    name: "Gucci Bag",
    description: "Classic leather made",
    price: 120000,

    display(): void{
        console.log(this.id + " " + this.name);
    }
}

var product2:Product = {
    id: 123,
    name: "Gucci Bag",
    description: "Classic leather made",
    price: 120000,

    display(): void{
        console.log(this.id + " " + this.name);
    }
}
