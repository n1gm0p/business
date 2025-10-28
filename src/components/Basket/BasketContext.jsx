import React, { createContext, useState, useEffect } from 'react';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [value, setValue] = useState(1);
  const cost = 119;
  const discount = 7;
  const shipping = 5;
  const [allCost, setAllCost] = useState(cost);

  useEffect(() => {
    setAllCost(cost * value);
  }, [value]);

  return (
    <BasketContext.Provider value={{ value, setValue, allCost, cost, discount, shipping }}>
      {children}
    </BasketContext.Provider>
  );
};
