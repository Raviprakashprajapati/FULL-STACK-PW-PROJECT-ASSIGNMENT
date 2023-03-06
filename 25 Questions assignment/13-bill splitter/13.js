

function calculateBill(costPerDish, numberOfPeople) {
    const totalBill = costPerDish * numberOfPeople;
    const billPerPerson = totalBill / numberOfPeople;
  
    return {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  }
  

const result = calculateBill(100, 4);
console.log(result);
