import { useEffect, useState } from "react";

const useDebounce = (saerchTerm: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(saerchTerm);
  
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(saerchTerm);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },
    [saerchTerm, delay]
  );
  return debouncedValue;
}

export default useDebounce