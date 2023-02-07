"use client";

import React, { useState, useEffect, useCallback } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import Loading from "./components/Loading";

interface Item {
  name: string;
  count: number;
  date: string;
  defaultCount: number;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  // const [newItem, setNewItem] = useState("");
  // const [newItemDefaultCount, setNewItemDefaultCount] = useState(0);
  const today = new Date().toDateString();

  useEffect(() => {
    // Check if the date stored in `item` is greater than or equal to 7 days ago from the current date
    const storedItems = JSON.parse(localStorage.getItem("items") || "[]");
    const filteredItems = storedItems.filter(
      (item) =>
        new Date(item.date).getTime() >=
        new Date().getTime() - 7 * 24 * 60 * 60 * 1000
    );
    filteredItems.forEach((item) => {
      if (item.date !== today) {
        item.count = item.defaultCount;
      }
    });
    setItems(filteredItems);
    setLoading(false);
    localStorage.setItem("items", JSON.stringify(filteredItems));
  }, [today]);

  const handleAddItem = useCallback(
    ({ newItem, newItemDefaultCount }) => {
      console.log(newItem, newItemDefaultCount);
      const updatedItems = [
        ...items,
        {
          name: newItem,
          count: newItemDefaultCount,
          date: today,
          defaultCount: newItemDefaultCount,
        },
      ];
      setItems(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));
    },
    [items]
  );

  const handleIncrement = useCallback(
    (index: number) => {
      const updatedItems = [...items];
      updatedItems[index].count += 1;
      updatedItems[index].date = today;
      setItems(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));
    },
    [items]
  );

  const handleDecrement = useCallback(
    (index: number) => {
      const updatedItems = [...items];
      updatedItems[index].count -= 1;
      updatedItems[index].date = today;
      setItems(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));
    },
    [items]
  );

  const handleDelete = useCallback(
    (index: number) => {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));
    },
    [items]
  );

  return (
    <div className="p-4 min-h-screen">
      <div className="mb-4">
        <Form onAddItem={handleAddItem} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
        {loading ? <Loading /> : null}
        {items.length === 0 && !loading ? (
          <div className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              💡 Get started
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Start by adding your daily chores/activities and the target count!{" "}
              <br />
              You can also set to zero for undetermined target.
            </p>
          </div>
        ) : null}
        {items.map((item, index) => (
          <Card
            name={item.name}
            count={item.count}
            defaultCount={item.defaultCount}
            key={index}
            onDecrement={() => handleDecrement(index)}
            onIncrement={() => handleIncrement(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
