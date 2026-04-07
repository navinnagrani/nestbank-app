import React from "react";
import Sidebar from "../components/Sidebar";

import credit1 from "../assets/cards/Credit1.jpeg";
import credit2 from "../assets/cards/Credit2.jpg";

function Credit() {

  const cards = [
    {
      id: 1,
      name: "Premium Credit Card",
      image: credit1
    },
    {
      id: 2,
      name: "Rewards Credit Card",
      image: credit2
    }
  ];

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <h2>Credit Cards</h2>

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

export default Credit;