
const Banner = () => {
  return (
    <div className="flex items-center justify-between gap-10 px-6 py-14">

      <div className="w-1/2">

        <h1 className="text-5xl font-bold leading-tight text-slate-900">
          Build Your Ideal
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-5 text-base leading-relaxed text-slate-500">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits your
          next project.
        </p>

        <div className="mt-12 flex gap-3">

          <button className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-600 px-4 py-3 text-sm font-semibold text-white">
            Explore Technologies
          </button>

          <button className="rounded-lg border border-gray-200 px-6 py-3 text-sm text-slate-600">
            Learn More
          </button>

        </div>
      </div>

      <div className="w-1/2">
        <img
          src="/src/assets/banner-stack.png"
          alt="Development Stack"
          className="ml-auto w-full max-w-md object-contain"
        />
      </div>

    </div>
  );
};

export default Banner;
