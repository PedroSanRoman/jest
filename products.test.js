const { addProduct, removeProduct, getProduct, getProducts, updateProduct, resetProducts } = require ('./products.js');

describe('addProduct', () => {
    beforeEach(() => {
        resetProducts ()
    });
  
    it('debería agregar un producto', () => {
      const result = addProduct('God of War:Ragnarok', 60);
      expect(result).toEqual({
        id: 0,
        name: 'God of War:Ragnarok',
        price: 60
      });
    });
  
    it('debería incrementar el id en 1 cada vez que se añada un producto', () => {
      addProduct('FIFA 24', 70);
      const second = addProduct('Elden Ring', 80);
      expect(second.id).toBe(1);
    });
  
    it('debería lanzar un error si el nombre o el precio no están definidos', () => {
      expect(() => addProduct()).toThrow('Rellena ambos parámetros con datos válidos.');
      expect(() => addProduct('Mario Kart')).toThrow('Rellena ambos parámetros con datos válidos.');
      expect(() => addProduct('', 50)).toThrow('Rellena ambos parámetros con datos válidos.');
    });
  
    it('debería lanzar un error si el producto ya existe', () => {
      addProduct('Zelda', 55);
      expect(() => addProduct('Zelda', 55)).toThrow('El producto ya existe');
    });
  });

describe('removeProduct', () => {
  beforeEach(() => {
    resetProducts();
  });

  it('debería eliminar un producto', () => {
    addProduct('FIFA 24', 70);
    addProduct('Zelda', 55);
    removeProduct('FIFA 24');
    
    expect(getProducts()).toEqual([
      {
        id: 1,
        name: 'Zelda',
        price: 55
      }
    ]);
  });
  it('debería lanzar un error si el producto no existe', () => {
    expect(() => removeProduct('any').toThrow('El producto no existe'))
  })
});

describe('getProduct', () => {
  beforeEach(() => {
    resetProducts();
  });

  it('debería dar un producto por su id', () => {
    addProduct('FIFA 24', 70);
    addProduct('Zelda', 55);    
    expect(getProduct(1)).toEqual((
      {
        id: 1,
        name: 'Zelda',
        price: 55
      }
    ));
  });
  it('debería lanzar un error si el producto no existe', () => {
    expect(() => getProduct(0).toThrow(`Producto con id ${id} no encontrado.`))
  })
});

describe('updateProduct', () => {
  beforeEach(() => {
    resetProducts();
  });

  it('debería actualizar un producto por su id', () => {
    addProduct('FIFA 24', 70);
    addProduct('Zelda', 55);    
    expect(updateProduct(1, 'God of War', 60)).toEqual((
      {
        id: 1,
        name: 'God of War',
        price: 60
      }
    ));
  });
  it('debería lanzar un error si el producto no existe', () => {
    expect(() => updateProduct(0).toThrow(`Producto con id ${id} no encontrado.`))
  })
});
