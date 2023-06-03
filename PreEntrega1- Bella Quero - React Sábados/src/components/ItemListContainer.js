import React from 'react';
import '../styles/ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2 className="slasher-title">Slasher Movies Character for Rent</h2>
      <p className="description">Choose from our collection of iconic characters for your private parties!</p>
    </div>
  );
}

export default ItemListContainer;
