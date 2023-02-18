import { useState } from "react";

const usePurchase = () => {
  const [added, setAdded] = useState(false);

  const saveToCard = (quantity, id) => {
    if (quantity > 0) setAdded(true);
  };

  const deleteFromCard = (id) => {
    setAdded(false);
  };

  return { added, saveToCard, deleteFromCard };
};

export default usePurchase;
