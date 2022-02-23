import ShoppingCart from './ShoppingCart';

test('adding items to cart', () => {
  const shoppingCart = new ShoppingCart();
  shoppingCart.addItem(110);
  shoppingCart.addItem(110);
  shoppingCart.addItem(110);
  shoppingCart.addItem(111);
  shoppingCart.addItem(112);
  shoppingCart.addItem(113);
  expect(shoppingCart.cart.size).toEqual(4);
  expect(shoppingCart.cart.get(110).itemName).toEqual('Apple');
  expect(shoppingCart.cart.get(110).count).toEqual(3);
  expect(shoppingCart.cart.get(111).itemName).toEqual('Mango');
  expect(shoppingCart.cart.get(112).itemName).toEqual('Orange');
  expect(shoppingCart.cart.get(113).itemName).toEqual('Banana');
});

test('deleting items from cart', () => {
    const shoppingCart = new ShoppingCart();
    shoppingCart.addItem(110);
    shoppingCart.addItem(110);
    shoppingCart.addItem(110);
    shoppingCart.addItem(111);
    shoppingCart.addItem(112);
    shoppingCart.addItem(113);
    expect(shoppingCart.cart.size).toEqual(4);
    expect(shoppingCart.cart.get(110).itemName).toEqual('Apple');
    expect(shoppingCart.cart.get(110).count).toEqual(3);

    //delete all Apple
    shoppingCart.removeItem(110);
    shoppingCart.removeItem(110);
    shoppingCart.removeItem(110);

    expect(shoppingCart.cart.get(110)).toEqual(undefined);
    expect(shoppingCart.cart.get(111).itemName).toEqual('Mango');
    expect(shoppingCart.cart.get(112).itemName).toEqual('Orange');
    expect(shoppingCart.cart.get(113).itemName).toEqual('Banana');
  });

  test("verify total bill of shopping cart",() => {
    const shoppingCart = new ShoppingCart();
    //adding item
    shoppingCart.addItem(110);
    shoppingCart.addItem(110);
    shoppingCart.addItem(111);
    shoppingCart.addItem(112);
    shoppingCart.addItem(113);

    //calling printBill method to calculate total bill
    shoppingCart.generateBill();
    
    expect(shoppingCart.total).toEqual(2070);
  });