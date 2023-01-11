import React from "react";

function Gateway() {
  return (
    <div>
      <section class="bg-gray-100 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <img
                class="w-full h-auto"
                src="https://d6vdma9166ldh.cloudfront.net/media/images/1540976335764-pasted%20image%200.png"
                alt="front credit card"
              />
              <div class="flex flex-col justify-center items-center">
                <ul class="flex">
                  <li class="mx-2">
                    <img
                      class="w-16"
                      src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                      alt=""
                    />
                  </li>
                  <li class="ml-5">
                    <img
                      class="w-9"
                      src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                      alt=""
                    />
                  </li>
                </ul>
              </div>

              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Card payment
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <input
                    type="text"
                    name="cardholder"
                    id="cardNumber"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Card Holder"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    class="bg-gray-50 border
            border-gray-300 text-gray-900 sm:text-sm rounded-lg
            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div class="my-3 flex flex-col">
                  <div class="mb-2">
                    <label for="" class="text-gray-700">
                      Expired
                    </label>
                  </div>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <select
                      name=""
                      id=""
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      x-model="expired.month"
                    >
                      <option value="" selected disabled>
                        MM
                      </option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                    <select
                      name=""
                      id=""
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      x-model="expired.year"
                    >
                      <option value="" selected disabled>
                        YY
                      </option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                    </select>
                    <input
                      type="text"
                      class="block w-full col-span-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Security code"
                      maxlength="3"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Pay now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gateway;
