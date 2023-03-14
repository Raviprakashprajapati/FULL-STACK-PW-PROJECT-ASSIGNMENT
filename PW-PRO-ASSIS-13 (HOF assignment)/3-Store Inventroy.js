const items = {
    apple: 0.99,
    banana: 1.25,
    orange: 1.49,
    pear: 0.79
  };
  
  const exchangeRate = 80;
  
  const itemsInRupees = Object.keys(items).map(i => {
    const priceInRupees = items[i] * exchangeRate;
    return { item: i, price: priceInRupees };
  });
  
  console.log(itemsInRupees);
  