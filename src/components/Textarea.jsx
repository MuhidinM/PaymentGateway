import React from "react";

function Textarea(props) {
  return (
    <>
      <label
        for={props.label}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.title}
      </label>
      <textarea
        id={props.label}
        rows="8"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="Your description here"
      ></textarea>
    </>
  );
}

export default Textarea;
