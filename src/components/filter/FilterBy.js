const SortByPrice = (products) => {
  return products.sort((x, y) => x.price - y.price);
};

const SortByCategory = (products) => {
  return products.sort((x, y) => x.category - y.category);
};

const SortByRating = (products) => {
  return products.sort((x, y) => x.rating - y.rating);
};

export const SortBy = (products, setProducts) => {
  let array = products;

  const Sort = (type) => {
    if (type === 0) array = SortByPrice(products);
    else if (type === 1) array = SortByCategory(products);
    else if (type === 2) array = SortByRating(products);

    setProducts(Array.from(array));
  };

  return Sort;
};
