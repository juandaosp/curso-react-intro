import React from "react";

function useLocalStorage(itemName, initialValue) {
  const localStorageTodos = localStorage.getItem(itemName);
  let parsedItem;
  if(!localStorageTodos) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageTodos);
  }
  const [item, setItem] = React.useState(parsedItem)
  const saveItem = (newTodos) => {
    setItem(newTodos);
    localStorage.setItem(itemName, JSON.stringify(newTodos));
  }
  return [item, saveItem]
}

export { useLocalStorage };