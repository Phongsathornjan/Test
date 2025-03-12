import React, { useState, useEffect } from "react";

const products = [
  { id: 1, Name: "Red_set", price: 50 },
  { id: 2, Name: "Green_set", price: 40 },
  { id: 3, Name: "Blue_set", price: 30 },
  { id: 4, Name: "Yellow_set", price: 50 },
  { id: 5, Name: "Pink_set", price: 80 },
  { id: 6, Name: "Purple_set", price: 90 },
  { id: 7, Name: "Orange_set", price: 120 },
];

const ShoppingCartPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [hasMemberCard, setHasMemberCard] = useState("0");

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity > 0) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: quantity } : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    const data = {
      order: cart,
      hasMemberCard: hasMemberCard,
    };

    fetch("http://localhost:4001/api/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalPrice(data.totalPrice);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getTotal();
  }, [cart, hasMemberCard]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center mb-2 p-2 border rounded"
            >
              <div>
                {product.Name} - ${product.price}
              </div>
              <button
                onClick={() => addToCart(product)}
                className="px-2 py-1 bg-blue-500 text-white rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Cart</h2>
          {cart.length === 0 ? (
            <div>Your cart is empty.</div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-2 p-2 border rounded"
              >
                <div>
                  {item.Name} - ${item.price} x
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-12 ml-2 border rounded px-1"
                  />
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="mt-4">
        <div className="mt-4">
          <input
            type="checkbox"
            className="mr-4"
            checked={hasMemberCard === "1"} 
            onChange={() => setHasMemberCard(hasMemberCard === "1" ? "0" : "1")}
          />
          <span>Do you have a member card? For get 10% discount</span>
        </div>
        <div className="mt-4 text-3xl">{totalPrice} บาท</div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
