let products = [];
let id = 0;

function addProduct(name, price) {
    if (!name || typeof price !== 'number') {
        throw new Error('Rellena ambos parámetros con datos válidos.');
      }
    else if (products.find(product => product.name === name)) {
        throw new Error ('El producto ya existe')
    }      
    else {
        const product = {
            id: id++,
            name: name,
            price: price
        };
        products.push(product);
        return product;
    }
}

function removeProduct(productName) {
    const index = products.findIndex(product => product.name === productName);
    if (index === -1) {
      throw new Error('El producto no existe');
    }
    products.splice(index, 1);
  }
  
  
function getProducts() {
    return products;
  }

function getProduct (id) {
    if (!id){
        throw new Error (`Producto con id ${id} no encontrado.`)
    }
    else {
        return products.find(product => product.id === id)
    }
}

function updateProduct(id, name, price) {
    const product = products.find(product => product.id === id);
    if (product) {
      product.name = name;
      product.price = price;
      return product
    } else {
      throw new Error (`Producto con id ${id} no encontrado.`);
    }
  }

  function resetProducts () {
    products.length = 0; // limpia el array sin crear uno nuevo
    id = 0;
  }

  module.exports = { addProduct, removeProduct, getProduct, getProducts, updateProduct, resetProducts }
  
  