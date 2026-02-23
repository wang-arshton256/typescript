interface Product{
    id: number;
    name: string;
    description: string;
    price?: number;  // To create optional parameters, use the "?" while creating the object
}

var product1:Product = {
    id: 123,
    name: "Gucci Bag",
    description: "Classic leather made",
    price: 120000,
}
var product2:Product = {
    id: 123,
    name: "Gucci Bag",
    description: "Classic leather made",
    price: 120000,
}

//
var product2:Product = {
    id: 123,
    name: "Gucci Bag",
    description: "Classic leather made"
  
}