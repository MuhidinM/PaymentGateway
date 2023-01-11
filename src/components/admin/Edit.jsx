import React from "react";

function Edit() {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="relative w-11/12 max-w-5xl modal-box">
          <label
            htmlFor="my-modal-3"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Edit</h3>
          <div className="">
            <section class="bg-white dark:bg-gray-900">
              <div class="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Update product
                </h2>
                <form action="#">
                  <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                    <div class="sm:col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Product Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                        value="Apple iMac 27&ldquo;"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>
                    <div class="w-full">
                      <label
                        for="brand"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Brand
                      </label>
                      <input
                        type="text"
                        name="brand"
                        id="brand"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                        value="Apple"
                        placeholder="Product brand"
                        required=""
                      />
                    </div>
                    <div class="w-full">
                      <label
                        for="price"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                        value="2999"
                        placeholder="$299"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="category"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                      >
                        <option selected="">Electronics</option>
                        <option value="TV">TV/Monitors</option>
                        <option value="PC">PC</option>
                        <option value="GA">Gaming/Console</option>
                        <option value="PH">Phones</option>
                      </select>
                    </div>
                    <div>
                      <label
                        for="item-weight"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Item Weight (kg)
                      </label>
                      <input
                        type="number"
                        name="item-weight"
                        id="item-weight"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                        value="15"
                        placeholder="Ex. 12"
                        required=""
                      />
                    </div>
                    <div class="sm:col-span-2">
                      <label
                        for="description"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        rows="8"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                        placeholder="Write a product description here..."
                      >
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US
                      </textarea>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <button
                      type="submit"
                      class="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
                    >
                      Update product
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
