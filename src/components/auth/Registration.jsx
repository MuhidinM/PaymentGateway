import React from "react";

function Registration() {
  return (
    <>
      <section class="bg-gray-100 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center lg:px-64 md:px-8 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="py-8 px-4 mx-auto max-w-xl lg:py-16">
              <ul className="steps">
                <li className="step step-primary">Personal Detail</li>
                <li className="step">Site Detail</li>
                <li className="step">Authentication Detail</li>
                <li className="step">Preview Form</li>
              </ul>
              <form action="#">
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div class="sm:col-span-2">
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                      placeholder="First Middle Last"
                      required=""
                    />
                  </div>
                  <div class="w-full">
                    <label
                      for="site"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      name="site"
                      id="site"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                      placeholder="example.com"
                      required=""
                    />
                  </div>
                  <div class="w-full">
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                      placeholder="someone@example.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="sector"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Sector
                    </label>
                    <select
                      id="sector"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                    >
                      <option selected="">Select Sector</option>
                      <option value="TV">Ecommerce</option>
                      <option value="PC">example</option>
                      <option value="PC">example</option>
                      <option value="PC">example</option>
                    </select>
                  </div>
                  <div>
                    <label
                      for="phone"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                      placeholder="0900000000"
                      required=""
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="licence"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Trade Licence
                    </label>

                    <div class="flex items-center justify-center w-full">
                      <label
                        for="dropzone-file"
                        class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            aria-hidden="true"
                            class="w-10 h-10 mb-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span class="font-semibold">Click to upload</span>{" "}
                            or drag and drop
                          </p>
                          <p class="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary dark:focus:ring-primary hover:bg-primary"
                >
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;
