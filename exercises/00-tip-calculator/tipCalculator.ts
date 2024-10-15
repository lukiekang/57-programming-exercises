// Pseudocode

//  Prompt for bill amount
// - set variable billAmount
// - Prompt for tip rate
// - set variable tipRate

// - set variable tip to billAmount * (tipRate / 100)
// - set variable total to billAmount + tipAmount

// - Display tipAmount
// - Display Total

export const calculateTip = (tipRate, billAmount) => {
  if (tipRate < 0) {
    return "Invalid Tip Rate";
  }
  if (billAmount <= 0) {
    return "Invalid Bill Amount";
  }

  const tip = Math.round(billAmount * (tipRate / 100));
  const total = billAmount + tip;
  return {
    tip,
    total,
  };
};
