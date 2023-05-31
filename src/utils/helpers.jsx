export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let allValues = ["all", ...data.map((item) => item[type])];
  if (type === "colors") {
    allValues = allValues.flat();
  }
  const unique = [...new Set(allValues)];

  return unique;
};
