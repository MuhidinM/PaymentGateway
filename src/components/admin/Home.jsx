import React from "react";
import Stat from './Stat';
import Table from './Table';
function Content() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-4 justify-self-auto">
        <div className="col-span-8">
          <Stat />
          <Table />
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

export default Content;
