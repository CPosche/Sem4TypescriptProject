const Result = () => {
  return (
    <div className="flex flex-col flex-grow pb-3">
      <div className="flex justify-center">Result</div>
      <div className="flex flex-grow">
        <div className="flex flex-col flex-grow items-center">
          <div className="flex bg-slate-800 px-3 border-t-4 rounded-t-lg border-r-4 border-l-4 border-black invertround">
            Items
          </div>
          <div className="flex flex-grow flex-col w-4/5 bg-slate-800 rounded-lg border-black border-4"></div>
        </div>
        <div className="flex flex-col flex-grow items-center">
          <div className="flex bg-slate-800 px-3 rounded-t-lg border-t-4 border-r-4 border-l-4 border-black invertround">
            Dungeons
          </div>
          <div className="flex flex-grow flex-col w-4/5 bg-slate-800 rounded-lg border-4 border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Result;
