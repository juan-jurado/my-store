const faker = require('faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate () {
    const limit = 10;
    for (let index = 0; index < limit; index++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl(),
        ports: Math.floor(Math.random() * 2500) + 1500
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }

  async findOne(id) {
    return this.products.find(item => item.id === id);
  }

  async update(id, changes) {
    //obtengo el index del elemento que quiero modificar
    const index = this.products.findIndex(item => item.id === id);
    // validación si existe, es decir que encuentre el index
    if (index === -1){
      throw new Error('Product not found');
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index]

  }

  async delete(id) {
    //obtengo el index del elemento que quiero eliminar
    const index = this.products.findIndex(item => item.id === id);
    // validación si existe, es decir que encuentre el index
    if (index === -1){
      throw new Error('Product not found');
    }
    //splice me permite eliminar en esa posición para poder
    // eliminar y cuantos elementos a partir de esa posición
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
