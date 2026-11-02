import { Star } from "lucide-react";

const Techcard = ({ tachnology, addstack, hanslebutton }) => {
  const alreadyAdded = addstack.some(
    (item) => item.id === tachnology.id
  );

  return (
    <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <img
          src={tachnology.iconImage}
          alt={tachnology.name}
          className="h-8 w-8 object-contain"
        />

        <div className="rounded-full bg-sky-50 px-2 py-1 text-xs font-medium text-sky-500">
          {tachnology.badge}
        </div>
      </div>

      <div className="mt-3">
        <h2 className="text-base font-bold text-gray-900">
          {tachnology.name}
        </h2>

        <p className="mt-2 min-h-12 text-xs leading-5 text-gray-500">
          {tachnology.description}
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
        <h2 className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600">
          {tachnology.category}
        </h2>

        <p className="text-xs text-gray-500">
          {tachnology.level}
        </p>

        <div className="flex items-center gap-1 text-xs font-semibold text-gray-700">
          <Star size={12} className="fill-amber-400 text-amber-400" />
          {tachnology.rating}
        </div>
      </div>

      <button
        onClick={() => hanslebutton(tachnology)}
        disabled={alreadyAdded}
        className={`mt-3 w-full rounded-lg py-2 text-xs font-medium transition ${
          alreadyAdded
            ? "cursor-not-allowed border border-pink-200 bg-pink-50 text-pink-600"
            : "bg-gray-950 text-white hover:bg-gray-800"
        }`}
      >
        {alreadyAdded ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default Techcard;