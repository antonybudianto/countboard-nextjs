import React, { useState, useEffect } from "react";

interface Item {
  name: string;
  count: number;
  date: string;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>(
    JSON.parse(localStorage.getItem("items") || "[]")
  );
  // const [items, setItems] = useState<Item[]>(
  //   JSON.parse(
  //     typeof document === "undefined"
  //       ? "[]"
  //       : localStorage.getItem("items") || "[]"
  //   )
  // );
  const [newItem, setNewItem] = useState("");
  const today = new Date().toDateString();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items") || "[]");
    const filteredItems = storedItems.filter(
      (item) =>
        new Date(item.date).getTime() >=
        new Date().getTime() - 7 * 24 * 60 * 60 * 1000
    );
    setItems(filteredItems);
    localStorage.setItem("items", JSON.stringify(filteredItems));
  }, [today]);

  const handleAddItem = () => {
    setItems([...items, { name: newItem, count: 0, date: today }]);
    setNewItem("");
  };

  const handleIncrement = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].count += 1;
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const handleDecrement = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].count -= 1;
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const handleDelete = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Count Anything</h1>
      <div className="mb-4">
        <input
          className="border p-2 w-full"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2" onClick={handleAddItem}>
          Add Item
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div key={item.name} className="bg-white rounded shadow p-4">
            <div className="mb-4">{item.name}:</div>
            <div className="flex items-center mb-4">
              <button
                className="bg-red-500 text-white p-2 mr-2"
                onClick={() => handleDecrement(index)}
              >
                -
              </button>
              <span className="font-bold">{item.count}</span>
              <button
                className="bg-green-500 text-white p-2 ml-2"
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
              <button
                className="bg-gray-500 text-white p-2 ml-10"
                onClick={() => handleDelete(index)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
