import React, { useState } from 'react';
import styles from '../styles.css'; // Asegúrate de importar tu CSS bonito

const Payment = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert('Pago procesado exitosamente (demo)');
    // Aquí en proyecto real enviarías los datos a un sistema de pago
  };

  return (
    <div className={styles.contact_section}>
      <div className={styles.form_cont}>
        <h1>Datos de Pago</h1>

        <form id="contactForm" onSubmit={handlePaymentSubmit}>
          <div className={styles.field}>
            <label>Nombre en la tarjeta</label>
            <input
              type="text"
              placeholder="Juan Pérez"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
            />
          </div>

          <div className={styles.field}>
            <label>Número de tarjeta</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              maxLength="19"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>

          <div className={styles.field}>
            <label>Fecha de expiración</label>
            <input
              type="text"
              placeholder="MM/AA"
              maxLength="5"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>

          <div className={styles.field}>
            <label>CVC</label>
            <input
              type="text"
              placeholder="123"
              maxLength="4"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              required
            />
          </div>

          <div className={`${styles.field} ${styles.center}`}>
            <button type="submit">Pagar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;