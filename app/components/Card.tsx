import { FC } from "react";

interface CardProps {
  name: string;
  count: number;
  defaultCount: number;
  onDecrement: () => void;
  onIncrement: () => void;
  onDelete: () => void;
}

const Card: FC<CardProps> = (props) => {
  const { count, defaultCount, name, onDecrement, onIncrement, onDelete } =
    props;
  return (
    <div className="flex flex-col justify-center bg-cyan-50 rounded shadow p-4 dark:bg-gray-800 dark:text-white">
      <div className="mb-4">{name}:</div>
      <div className="flex justify-between">
        <div className="flex items-center justify-center">
          <button
            className="bg-red-500 ease-in hover:ease-out transition duration-150 hover:scale-110 hover:bg-red-400 text-white px-4 py-2 rounded mr-2"
            onClick={() => onDecrement()}
          >
            -
          </button>
          <div className="flex justify-center items-center">
            <span className="font-bold text-center text-2xl w-8">{count}</span>
            {defaultCount > 0 ? (
              <>
                <span className="text-xs opacity-50">/</span>
                <span className="font-bold text-center text-sm mx-2 w-3 opacity-50">
                  {defaultCount}
                </span>
              </>
            ) : null}
          </div>
          <button
            className="bg-green-500 ease-in hover:ease-out transition duration-150 hover:scale-110 hover:bg-green-400 text-white px-4 py-2 rounded ml-2"
            onClick={() => onIncrement()}
          >
            +
          </button>
        </div>
        <button
          className="bg-gray-500 ease-in hover:ease-out transition duration-150 hover:scale-110 hover:bg-gray-400 text-white px-4 py-2 rounded"
          onClick={
            () => (confirm("Are you sure?") ? onDelete() : null)
            // () => handleDelete(index)
          }
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Card;
