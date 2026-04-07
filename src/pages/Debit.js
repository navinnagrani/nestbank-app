import React from "react";
import Sidebar from "../components/Sidebar";

function Debit() {

  const cards = [
    {
      id: 1,
      name: "Platinum Debit Card",
      image: "https://via.placeholder.com/350x200/4c6ef5/ffffff?text=Debit+Card+1"
    },
    {
      id: 2,
      name: "Gold Debit Card",
      image: "https://via.placeholder.com/350x200/364fc7/ffffff?text=Debit+Card+2"
    }
  ];

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <h2>Debit Cards</h2>

        <div className="card-grid">
          {cards.map(card => (
            <div key={card.id} className="bank-card">
              <img src={card.image} alt={card.name} />
              <h3>{card.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Debit;