import React from "react";

function ApiDocs() {
  return (
    <>
      <div className="md:mx-36">
        <section>
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
            <div className="flex flex-col w-full mb-12 text-center">
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                Get Started and <br className="hidden lg:block" />
                Process Payments!
              </h1>
            </div>
          </div>
        </section>

        <div className="text-left">
          <div className="mockup-code">
            <div className="grid grid-cols-12 border-b">
              <div className="col-span-11"></div>
              <div className="col-span-1">
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
