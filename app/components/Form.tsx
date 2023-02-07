import { useCallback, useState } from "react";

const Form = (props) => {
  const { onAddItem } = props;
  const [newItem, setNewItem] = useState("");
  const [newItemDefaultCount, setNewItemDefaultCount] = useState(0);

  const handleAddItem = useCallback(
    (e) => {
      e.preventDefault();
      onAddItem({ newItem, newItemDefaultCount });
      setNewItem("");
      setNewItemDefaultCount(0);
    },
    [onAddItem, newItem, newItemDefaultCount]
  );

  return (
    <form onSubmit={handleAddItem} noValidate>
      <div className="flex justify-center">
        <input
          className="border border-2 text-sm md:text-base p-2 w-3/5 outline-2 outline-offset-2 dark:bg-gray-700 dark:border-gray-600"
          type="text"
          placeholder="Chore/activity name"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <input
          className="border border-2 text-sm md:text-base p-2 w-1/5 outline-2 outline-offset-2 dark:bg-gray-700 dark:border-gray-600"
          type="number"
          placeholder="Target"
          value={newItemDefaultCount || ""}
          onChange={(e) => setNewItemDefaultCount(Number(e.target.value))}
        />
        <button
          type="submit"
          disabled={newItem === ""}
          className="bg-blue-500 rounded text-white p-2 disabled:opacity-50 w-1/5"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
