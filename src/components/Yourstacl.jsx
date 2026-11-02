import { X } from "lucide-react";
import { Bounce, toast } from "react-toastify";

const YourStack = ({ addstack, setaddstack }) => {

  const hanleDeleteIcon = (item) => {
    setaddstack(addstack.filter((tech) => tech.id !== item.id));

    toast.error(`${item.name} removed`, {
      position: "top-center",
      transition: Bounce,
    });
  };

  const handleallremoved = () => {
    setaddstack([]);

    toast.error("All items removed", {
      position: "top-center",
      transition: Bounce,
    });
  };

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">

      <h2 className="text-sm font-bold text-gray-900">
        Your Stack
      </h2>

      <p className="mt-1 text-xs text-gray-500">
        {addstack.length} technologies selected
      </p>

      {addstack.length === 0 ? (
        <div className="mt-5 rounded-lg border border-dashed border-gray-200 p-5 text-center">
          <p className="text-xs text-gray-400">
            No technologies added yet
          </p>
        </div>
      ) : (
        <>
          <ul className="mt-4 space-y-3">
            {addstack.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-2 border-b border-gray-100 pb-3"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={item.iconImage}
                    alt={item.name}
                    className="h-6 w-6 object-contain"
                  />

                  <div>
                    <p className="text-xs font-semibold text-gray-800">
                      {item.name}
                    </p>

                    <p className="text-xs text-gray-400">
                      {item.category}
                    </p>
                  </div>
                </div>

                <button onClick={() => hanleDeleteIcon(item)}>
                  <X size={15} className="text-gray-400 hover:text-red-500" />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={handleallremoved}
            className="mt-4 w-full rounded-lg border border-red-200 py-2 text-xs text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}

    </div>
  );
};

export default YourStack;