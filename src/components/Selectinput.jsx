import React from "react";

function Selectinput(props) {
    
  return (
    <>
      <label
        for={props.id}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.title}
      </label>
      <select
        id={props.id}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      >
        {props.arr.map(arr => (
            <option value={arr.value}>{arr.label}</option>
        ))}
        
      </select>
    </>
  );
}

export default Selectinput;
