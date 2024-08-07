import React from 'react';

const Payment = () => {
  return (
    <div>
      <h2>Payment Page</h2>
      <p>Please proceed with your payment.</p>
      {/* You can add your payment processing logic here */}
      <button onClick={() => alert('Payment processed!')}>Pay Now</button>
    </div>
  );
};

export default Payment; // Ensure you have a default export