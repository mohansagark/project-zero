export const validateAlphabets = (string) => {
  const regex = /^[a-zA-Z\s]*$/;
  return regex.test(string);
};

export const validateCurrency = (string) => {
  const regex = /\D/;
  let raw = string.replace("₹", "").replace(/,/g, "");
  if (regex.test(raw)) {
    return (
      "₹" +
      raw
        .toString()
        .replace("$", "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  }
};
