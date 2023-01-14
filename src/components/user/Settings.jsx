import React from "react";
import Bussines from "./Business";
import UserInfo from "./UserInfo";

function Settings() {
  return (
    <>
      <section class="bg-white dark:bg-gray-900 m-8">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <form action="#">
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <UserInfo />
              <div className="sm:col-span-2 divider"></div>
              <Bussines />
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary dark:focus:ring-primary hover:bg-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Settings;
