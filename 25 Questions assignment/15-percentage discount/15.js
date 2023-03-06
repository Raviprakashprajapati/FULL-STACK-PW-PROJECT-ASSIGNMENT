const calculatePercentageDiscount = (originalPrice, discountedPrice) => {
    const discount = originalPrice - discountedPrice;
    const percentageDiscount = (discount / originalPrice) * 100;
    return parseFloat(percentageDiscount.toFixed(2));
  };
  


  const originalPrice = 10;
const discountedPrice = 2;
const percentageDiscount = calculatePercentageDiscount(originalPrice, discountedPrice);
console.log(percentageDiscount); 
