import React from 'react';

const App = () => {
  return (
    <div>
      <NavBar />
      <CartWidget quantity={5} />
      <ItemListContainer greeting="Welcome to Slashers for Rent!" />
    </div>
  );
}

export default App;
