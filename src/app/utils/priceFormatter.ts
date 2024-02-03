const priceFormatter = (price: number): string => {
  const priceFormatted = new Intl.NumberFormat("es", {
    style: "currency",
    currency: "EUR", // You can change the currency as needed
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return priceFormatted;
};

export default priceFormatter;
