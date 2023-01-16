import React from "react";
import Card from "../../components/Card";
import Tablesite from "../../components/Tablesite";

function Sites() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-4 justify-self-auto">
        <div className="col-span-8">
          <button className="mb-4 ml-8 btn btn-outline btn-primary">
            Add New
          </button>
          <Tablesite />
        </div>
        <div className="flex col-span-4">
          <Card />
        </div>
      </div>
    </>
  );
}

export default Sites;
