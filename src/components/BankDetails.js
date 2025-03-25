import React, { useState } from "react";

export function BankDetails({ data }) {
  const [showAccDetail, setShowAccDetail] = useState(false);

  const toggleBankDetail = () => {
    setShowAccDetail((prevState) => !prevState);
  };
  return (
    <div>
      {showAccDetail && (
        <div>
          <h4>
            <strong>Bank Details</strong>
          </h4>
          <p>
            <strong>Card Number:</strong> {data.bank.cardNumber}
          </p>
          <p>
            <strong>Card Type:</strong> {data.bank.cardType}
          </p>
          <p>
            <strong>Currency:</strong> {data.bank.currency}
          </p>
          <p>
            <strong>Expire Date:</strong> {data.bank.cardExpire}
          </p>
          <p>
            <strong>Crypto Coin Type:</strong> {data.crypto.coin}
          </p>
          <p>
            <strong>Crypto Wallet:</strong> {data.crypto.wallet}
          </p>
          <p>
            <strong>Crypto Network:</strong> {data.crypto.network}
          </p>
        </div>
      )}
      <button className="btn btn-info" onClick={toggleBankDetail}>
        {showAccDetail ? "Hide Bank Detail" : "Bank Details"}
      </button>
    </div>
  );
}
