const Loading = () => {
  return (
    <div className="container mx-auto animate-pulse px-4 sm:px-6 lg:px-0">
      <div className="mb-8 md:mb-10">
        <div className="h-8 md:h-10 w-70 md:w-97.5 rounded-lg bg-slate-200"></div>
        <div className="h-4 md:h-5 w-[320px] md:w-107.5 rounded-md bg-slate-200 mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="w-full h-70 sm:h-67.5 lg:h-70 rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm flex flex-col"
            >
              <div className="flex items-center justify-between">
                <div className="h-8 w-8 rounded-lg bg-slate-200"></div>
                <div className="h-6 w-16 rounded-full bg-slate-200"></div>
              </div>

              <div className="h-5 w-28 rounded-md bg-slate-200 mt-5"></div>

              <div className="mt-3 space-y-2">
                <div className="h-3 w-full rounded bg-slate-200"></div>
                <div className="h-3 w-[92%] rounded bg-slate-200"></div>
                <div className="h-3 w-[70%] rounded bg-slate-200"></div>
              </div>

              <div className="h-px w-full bg-slate-100 mt-5"></div>

              <div className="flex items-center justify-between mt-4">
                <div className="h-5 w-16 rounded bg-slate-200"></div>
                <div className="h-4 w-24 rounded bg-slate-200"></div>
                <div className="h-4 w-10 rounded bg-slate-200"></div>
              </div>

              <div className="h-10 w-full rounded-lg bg-slate-200 mt-auto"></div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="w-full min-h-69.5 lg:min-h-81 rounded-4xl border border-slate-200 bg-white p-5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08),0_2px_4px_-2px_rgba(0,0,0,0.05)]">
            <div className="h-5 w-28 rounded-md bg-slate-200"></div>

            <div className="h-4 w-44 rounded bg-slate-200 mt-4"></div>

            <div className="h-35 w-full rounded-4xl border border-dashed border-slate-200 mt-6 flex items-center justify-center p-4">
              <div className="h-3 w-28 rounded bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;