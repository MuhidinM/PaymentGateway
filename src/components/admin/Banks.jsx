import React from "react";
import Tablesite from "./Tablesite";

function Banks() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-4 justify-self-auto">
        <div className="col-span-8">
          <button className="mb-4 ml-8 btn btn-outline btn-primary">
            <label htmlFor="my-modal-4" className="cursor-pointer"> Add New</label>
          </button>
          <Tablesite />
        </div>
        <div className="col-span-4">
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banks;
