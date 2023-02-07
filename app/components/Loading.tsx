import { memo } from "react";

const Loading = () => {
  return (
    <div className="bg-gray-800 shadow rounded-md p-4 w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(Loading);
