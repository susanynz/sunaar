import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Confirmation = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    setConfirmed(true);
  };

  const handleProceedToPayment = () => {
    navigate('/payment');
  };

  const buttonStyle = {
    backgroundColor: '#b88c6a',
    color: 'white',
    padding: '10px 30px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    fontFamily: 'Playfair Display, serif',
    transition: 'all 0.3s ease'
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>No hay productos para confirmar</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: '50px' }}>
      <h1 className="titulo-sunaar text-center">Confirmación de Compra</h1>

      <div style={{ marginBottom: '30px' }}>
        {cartItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '15px',
              alignItems: 'center',
              padding: '10px',
              border: '1px solid #e0d8cb',
              borderRadius: '8px'
            }}
            className="texto-sunaar"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src={item.image} alt={item.name} style={{ width: '80px', borderRadius: '8px' }} />
              <div>
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="texto-sunaar text-end">Total a pagar: ${totalPrice.toFixed(2)}</h2>

      {!confirmed ? (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button onClick={handleConfirm} style={buttonStyle}>
            Deseo continuar con la compra
          </button>
        </div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <h3 style={{ marginBottom: '20px' }}>¡Confirmado! Ahora puedes proceder al pago.</h3>
          <button onClick={handleProceedToPayment} style={buttonStyle}>
            Proceder a Pago
          </button>
        </div>
      )}
    </div>
  );
};

export default Confirmation;56