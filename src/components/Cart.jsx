import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles.css';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, clearCart, totalPrice } = useContext(CartContext);

  return (
    <div style={{ padding: '30px' }}>
      <h1 style={{ textAlign: 'center' }}>Tu carrito</h1>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Tu carrito está vacío por el momento.</p>
      ) : (
        <div>
          {/* Cabecera de tabla */}
          <div style={{ display: 'flex', fontWeight: 'bold', marginBottom: '20px', justifyContent: 'space-around' }}>
            <div style={{ width: '150px' }}>Producto</div>
            <div>Precio</div>
            <div>Cantidad</div>
            <div>Subtotal</div>
            <div>Acciones</div>
          </div>

          {/* Productos */}
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', justifyContent: 'space-around' }}>
              <div style={{ width: '150px' }}>
                <img src={item.image} alt={item.name} style={{ width: '80px', borderRadius: '8px' }} />
                <p>{item.name}</p>
              </div>

              <div>${item.price.toFixed(2)}</div>

              <div>
                <button onClick={() => decreaseQuantity(item.id)} style={{ margin: '0 5px' }}>-</button>
                {item.quantity}
                <button onClick={() => increaseQuantity(item.id)} style={{ margin: '0 5px' }}>+</button>
              </div>

              <div>${(item.price * item.quantity).toFixed(2)}</div>

              <div>
                <button onClick={() => removeFromCart(item.id)} style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <h2 style={{ textAlign: 'right', marginTop: '30px' }}>Total a pagar: ${totalPrice.toFixed(2)}</h2>

          {/* Vaciar carrito */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={clearCart} style={{ backgroundColor: '#5bc0de', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Vaciar carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;