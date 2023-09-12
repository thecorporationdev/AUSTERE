import React from "react";

type Props = {};

const Locationsdets = (props: Props) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between gap-x-10 my-4">
      <div className=" w-full justify-start flex">
        <div className="border-black border-t-2 md:w-[85%] ">
          <div className="flex  justify-between md:justify-start">
            <div className="md:w-3/4 flex justify-between mt-2">
              <h1 className="font-extrabold text-4xl">LA</h1>
              <p className="md:w-4/12 text-[12px] text-gray-500 font-bold leading-none">
                515 maitama haruna street jabi park abuja nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-end">
        <div className="border-black border-t-2 md:w-[85%] ">
          <div className="flex  justify-end">
            <div className="md:w-3/4 flex  justify-between mt-2">
              <p className="md:w-4/12 text-[12px] text-gray-500 font-bold leading-none mt-3">
                515 maitama haruna street jabi park abuja nigeria
              </p>
              <h1 className="font-extrabold text-4xl">LA</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locationsdets;
