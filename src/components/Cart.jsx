import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // ✅ esta es la única línea de importación correcta

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    totalPrice
  } = useContext(CartContext);

  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: '#b88c6a',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '500',
    fontFamily: 'Playfair Display, serif'
  };

  const btnCircle = {
    backgroundColor: '#b88c6a',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    fontSize: '18px',
    cursor: 'pointer'
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1 className="titulo-sunaar text-center">Tu carrito</h1>

      {cartItems.length === 0 ? (
        <p className="texto-sunaar text-center">Tu carrito está vacío por el momento.</p>
      ) : (
        <div>
          {/* Cabecera */}
          <div
            style={{
              display: 'flex',
              fontWeight: 'bold',
              marginBottom: '20px',
              justifyContent: 'space-around'
            }}
            className="texto-sunaar"
          >
            <div style={{ width: '150px' }}>Producto</div>
            <div>Precio</div>
            <div>Cantidad</div>
            <div>Subtotal</div>
            <div>Acciones</div>
          </div>

          {/* Lista de productos */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                justifyContent: 'space-around',
                borderBottom: '1px solid #e0d8cb',
                paddingBottom: '15px'
              }}
              className="texto-sunaar"
            >
              <div style={{ width: '150px' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '80px', borderRadius: '8px' }}
                />
                <p>{item.name}</p>
              </div>

              <div>${item.price.toFixed(2)}</div>

              <div>
                <button style={btnCircle} onClick={() => decreaseQuantity(item.id)}>−</button>
                <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                <button style={btnCircle} onClick={() => increaseQuantity(item.id)}>+</button>
              </div>

              <div>${(item.price * item.quantity).toFixed(2)}</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button style={buttonStyle} onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
                <button style={buttonStyle} onClick={() => navigate('/confirmation')}>
                  Confirmación de compra
                </button>
              </div>
            </div>
          ))}

          {/* Total y acciones */}
          <h2 className="texto-sunaar text-end" style={{ marginTop: '30px' }}>
            Total a pagar: ${totalPrice.toFixed(2)}
          </h2>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button style={buttonStyle} onClick={clearCart}>
              Vaciar carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
