class ProductManager {
    constructor() {
      this.products = [];
    }
    addProduct(object) {
      const objCode = this.products.map((product) => product.code);
      const objExist = objCode.includes(object.code);
      if (objExist) {
        console.log("Codigo de producto existente, intente otro");
      } else if (Object.values(object).includes("")) {
        console.log(
          "Todos los campos del producto deben estar completos para poder ser ingresado"
        );
      } else {
        let id;
        id = this.products.length + 1;
        const newObject = { ...object, id };
        this.products.push(newObject);
        return console.log(`Agregaste el producto con id: ${newObject.id} exitosamente`);
      }
    }
    getProducts() {
      return this.products;
    }
    getPorductById(id) {
      const productFind = this.products.find((product) => id === product.id);
      if (productFind) {
        let productJSON = JSON.stringify(productFind);
        return console.log(`El producto seleccionado es: ${productJSON}`);
      } else {
        console.log("Not Found");
      }
    }
  }
  
  const clase1 = new ProductManager();
  
  console.log(clase1);
  
  clase1.addProduct({
    title: "iPhone",
    description: "iPhone14",
    price: 6500,
    thumbnail: "https://www.apple.com/iphone/",
    code: 789,
    stock: 40,
  });
  
  console.log(clase1);
  
  clase1.addProduct({
    title: "iPad",
    description: "Tablets",
    price: 850,
    thumbnail: "https://www.apple.com/ipad/",
    code: 420,
    stock: 30,
  });
  
  clase1.addProduct({
    title: "iPad",
    description: "Tablets",
    price: 850,
    thumbnail: "https://www.apple.com/ipad/",
    code: 420,
    stock: 30,
  });
  
  clase1.addProduct({
    title: "iPad",
    description: "Tablets",
    price: 850,
    thumbnail: "https://www.apple.com/ipad/",
    code: 420,
    stock: 30,
  });
  
  console.log(clase1);
  
  clase1.getPorductById(2)