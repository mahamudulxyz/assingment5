
import { Star } from "lucide-react";

const Techcard = ({ tachnology }) => {
  return (
    <section className="px-5 py-12">

      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the <span className="text-fuchsia-500">Technologies</span>
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-6 sm:grid-cols-2 xl:grid-cols-3">

        {/* Technology Card */}
        <div className=" flex flex-col rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md ">

          <div className="flex items-start justify-between">
            <div>
              <img
                src={tachnology.iconImage}
                alt={tachnology.name}
                className="h-9 w-9 object-contain"
              />
            </div>

            <div className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-500">
              <h3>{tachnology.badge}</h3>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="text-lg font-bold text-gray-900">
              {tachnology.name}
            </h2>

            <p className="mt-2 text-sm leading-5 text-gray-500">
              {tachnology.description}
            </p>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-3">
            <h2 className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600">
              {tachnology.category}
            </h2>

            <p className="text-xs text-gray-500">
              {tachnology.level}
            </p>

            <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
              <Star
                size={15}
                className="fill-amber-400 text-amber-400"
              />
              <p>{tachnology.rating}</p>
            </div>
          </div>

          <button className="mt-4 w-full rounded-lg bg-gray-950 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
            Add to Stack
          </button>

        </div>
      </div>
    </section>
  );
};

export default Techcard;
