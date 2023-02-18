import { useState } from "react";

const useQuantity = (QTY) => {
  const [quantity, setQuantity] = useState(0);
  const Increment = () => {
    if (quantity < QTY) setQuantity((quantity) => quantity + 1);
  };

  const Decrement = () => {
    if (quantity >= 1) setQuantity((quantity) => quantity - 1);
  };

  return { quantity, Increment, Decrement };
};

export default useQuantity;
