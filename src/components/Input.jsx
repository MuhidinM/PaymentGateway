import React from "react";

function Input(props) {
  return (
    <>
      <label
        htmlFor={props.label}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.title}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
        placeholder={props.place}
        required={props.required}
      />
    </>
  );
}

export default Input;
