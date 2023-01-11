import React from "react";

function ApiDocs() {
  return (
    <>
      <div class="md:mx-36">
        <section>
          <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
            <div class="flex flex-col w-full mb-12 text-center">
              <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                Get Started and <br class="hidden lg:block" />
                Process Payments!
              </h1>
            </div>
          </div>
        </section>

        <div class="text-left">
          <div className="mockup-code">
            <div class="grid grid-cols-12 border-b">
              <div class="col-span-11"></div>
              <div class="col-span-1">
              <button className="btn">Copy</button>
              </div>
            </div>
            <pre data-prefix="1">
              <code>npm i egate</code>
            </pre>
            <pre data-prefix="2">
              <code>installing...</code>
            </pre>
            <pre data-prefix="3" className="text-success">
              <code>Success!</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApiDocs;
