import React from "react";

function Input(props) {
  return (
    <>
      <label
        for={props.label}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.title}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder={props.place}
        required={props.required}
      />
    </>
  );
}

export default Input;
