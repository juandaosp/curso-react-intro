import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodos = localStorage.getItem(itemName);
        if(!localStorageTodos) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          const parsedItem = JSON.parse(localStorageTodos);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch(error) {
        setError(error.message);
      }
    }, 2000)
  }, [itemName, initialValue]);
  const saveItem = (newTodos) => {
    setItem(newTodos);
    localStorage.setItem(itemName, JSON.stringify(newTodos));
  }
  return {item, saveItem, loading, error};
}

export { useLocalStorage };